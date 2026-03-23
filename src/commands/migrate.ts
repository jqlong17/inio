import path from "node:path";
import { readdir, rename, rm } from "node:fs/promises";
import { ensureDir, pathExists, writeTextFile } from "../lib/fs";
import { renderTemplate } from "../lib/template";
import { resolveProfile, resolveProfileFiles } from "../profiles";
import type { SupportedLanguage } from "../profiles/types";

type MigrateOptions = {
  profile: string;
  lang: SupportedLanguage;
  dryRun?: boolean;
};

type Mapping = {
  from: string;
  to: string;
};

type MigrationReport = {
  movedEntries: number;
  renamedConflicts: number;
  createdFiles: number;
  createdDirs: number;
};

const legacyMappings: Mapping[] = [
  { from: "workflow/01-research", to: "workflow/01-discover/research" },
  { from: "workflow/02-design", to: "workflow/01-discover/design" },
  { from: "workflow/03-plan", to: "workflow/02-build/plan" },
  { from: "workflow/04-test", to: "workflow/03-verify/test" },
  { from: "01-research", to: "workflow/01-discover/research" },
  { from: "02-design", to: "workflow/01-discover/design" },
  { from: "03-plan", to: "workflow/02-build/plan" },
  { from: "04-test", to: "workflow/03-verify/test" }
];

function nowSuffix(): string {
  const d = new Date();
  const pad = (v: number) => String(v).padStart(2, "0");
  return [
    d.getFullYear(),
    pad(d.getMonth() + 1),
    pad(d.getDate()),
    "-",
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join("");
}

async function nextAvailablePath(basePath: string): Promise<string> {
  const ext = path.extname(basePath);
  const name = basePath.slice(0, basePath.length - ext.length);
  let candidate = `${name}.migrated-${nowSuffix()}${ext}`;
  let i = 1;
  while (await pathExists(candidate)) {
    candidate = `${name}.migrated-${nowSuffix()}-${i}${ext}`;
    i += 1;
  }
  return candidate;
}

async function moveDirectoryEntries(
  sourceDir: string,
  targetDir: string,
  dryRun: boolean,
  report: MigrationReport
): Promise<void> {
  if (!(await pathExists(sourceDir))) {
    return;
  }

  if (!dryRun) {
    await ensureDir(targetDir);
  }

  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(sourceDir, entry.name);
    let dst = path.join(targetDir, entry.name);

    if (await pathExists(dst)) {
      dst = await nextAvailablePath(dst);
      report.renamedConflicts += 1;
    }

    if (dryRun) {
      continue;
    }
    await ensureDir(path.dirname(dst));
    await rename(src, dst);
    report.movedEntries += 1;
  }

  if (!dryRun) {
    await rm(sourceDir, { recursive: true, force: true });
  }
}

export async function runMigrateCommand(
  targetDirArg: string | undefined,
  options: MigrateOptions
): Promise<void> {
  const isZh = options.lang === "zh";
  const text = {
    header: isZh
      ? "开始迁移：旧项目 -> inio 三阶段框架"
      : "Starting migration: legacy project -> inio three-phase framework",
    done: isZh ? "迁移完成。" : "Migration completed.",
    summary: isZh ? "迁移摘要" : "Migration summary",
    moved: isZh ? "迁移条目数" : "Moved entries",
    renamed: isZh ? "冲突重命名数" : "Conflict renames",
    createdFiles: isZh ? "新建文件数" : "Created files",
    createdDirs: isZh ? "新建目录数" : "Created directories",
    next: isZh
      ? "建议下一步：运行 validate 检查结构一致性。"
      : "Next: run validate to check structure consistency."
  };

  const targetDir = path.resolve(targetDirArg ?? ".");
  const profile = resolveProfile(options.profile);
  const profileFiles = resolveProfileFiles(profile, options.lang);
  const projectName = path.basename(targetDir);
  const year = String(new Date().getFullYear());

  const report: MigrationReport = {
    movedEntries: 0,
    renamedConflicts: 0,
    createdFiles: 0,
    createdDirs: 0
  };

  await ensureDir(targetDir);
  console.log(text.header);

  for (const mapping of legacyMappings) {
    const from = path.join(targetDir, mapping.from);
    const to = path.join(targetDir, mapping.to);
    const exists = await pathExists(from);
    if (!exists) {
      continue;
    }
    if (options.dryRun) {
      console.log(`[dry-run] move ${mapping.from} -> ${mapping.to}`);
    }
    await moveDirectoryEntries(from, to, Boolean(options.dryRun), report);
  }

  const requiredDirs = new Set(profile.requiredDirs);
  for (const relativeDir of requiredDirs) {
    const fullDir = path.join(targetDir, relativeDir);
    if (await pathExists(fullDir)) {
      continue;
    }
    if (options.dryRun) {
      console.log(`[dry-run] mkdir ${relativeDir}`);
      report.createdDirs += 1;
      continue;
    }
    await ensureDir(fullDir);
    report.createdDirs += 1;
  }

  for (const relativeFile of profile.requiredFiles) {
    const fullPath = path.join(targetDir, relativeFile);
    if (await pathExists(fullPath)) {
      continue;
    }

    const template = profileFiles[relativeFile] ?? "";
    const content = renderTemplate(template, { projectName, year });
    if (options.dryRun) {
      console.log(`[dry-run] create ${relativeFile}`);
      report.createdFiles += 1;
      continue;
    }

    await writeTextFile(fullPath, content, false);
    report.createdFiles += 1;
  }

  console.log(text.done);
  console.log(`\n${text.summary}`);
  console.log(`- ${text.moved}: ${report.movedEntries}`);
  console.log(`- ${text.renamed}: ${report.renamedConflicts}`);
  console.log(`- ${text.createdDirs}: ${report.createdDirs}`);
  console.log(`- ${text.createdFiles}: ${report.createdFiles}`);
  console.log(`\n${text.next}`);
}
