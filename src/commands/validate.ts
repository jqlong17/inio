import path from "node:path";
import { pathExists, walkFiles } from "../lib/fs";
import { resolveProfile } from "../profiles";
import type { SupportedLanguage } from "../profiles/types";

type ValidateOptions = {
  profile: string;
  lang: SupportedLanguage;
};

const codeExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".py",
  ".go",
  ".java",
  ".rs",
  ".sh",
  ".rb",
  ".php"
]);

const forbiddenDocNamesInSrc = new Set([
  "current-state.md",
  "meta-rule.md",
  "soul.md",
  "self.md"
]);

export async function runValidateCommand(
  targetDirArg: string | undefined,
  options: ValidateOptions
): Promise<void> {
  const isZh = options.lang === "zh";
  const text = {
    ok: isZh ? "通过" : "OK",
    matches: isZh ? "符合" : "matches",
    sentenceEnd: isZh ? "。" : ".",
    missingDirs: isZh ? "缺失目录：" : "Missing directories:",
    missingFiles: isZh ? "缺失文件：" : "Missing files:",
    warnings: isZh ? "警告：" : "Warnings:",
    codeLikeInWorkflow: isZh
      ? "在 workflow/ 中发现疑似代码文件："
      : "Code-like file found in workflow/:",
    workflowDocInSrc: isZh
      ? "在 src/ 中发现 workflow 文档："
      : "Workflow doc found in src/:"
  };

  const targetDir = path.resolve(targetDirArg ?? ".");
  const profile = resolveProfile(options.profile);
  const missingDirs: string[] = [];
  const missingFiles: string[] = [];
  const warnings: string[] = [];

  for (const relativeDir of profile.requiredDirs) {
    const full = path.join(targetDir, relativeDir);
    if (!(await pathExists(full))) {
      missingDirs.push(relativeDir);
    }
  }

  for (const relativeFile of profile.requiredFiles) {
    const full = path.join(targetDir, relativeFile);
    if (!(await pathExists(full))) {
      missingFiles.push(relativeFile);
    }
  }

  const workflowPath = path.join(targetDir, "workflow");
  if (await pathExists(workflowPath)) {
    const files = await walkFiles(workflowPath);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (codeExtensions.has(ext)) {
        warnings.push(
          `${text.codeLikeInWorkflow} ${path.relative(targetDir, file)}`
        );
      }
    }
  }

  const srcPath = path.join(targetDir, "src");
  if (await pathExists(srcPath)) {
    const files = await walkFiles(srcPath);
    for (const file of files) {
      const name = path.basename(file).toLowerCase();
      if (forbiddenDocNamesInSrc.has(name)) {
        warnings.push(
          `${text.workflowDocInSrc} ${path.relative(targetDir, file)}`
        );
      }
    }
  }

  if (missingDirs.length === 0 && missingFiles.length === 0 && warnings.length === 0) {
    console.log(
      `${text.ok}: "${targetDir}" ${text.matches} profile "${profile.id}"${text.sentenceEnd}`
    );
    return;
  }

  if (missingDirs.length > 0) {
    console.log(text.missingDirs);
    for (const dir of missingDirs) {
      console.log(`- ${dir}`);
    }
  }

  if (missingFiles.length > 0) {
    console.log(text.missingFiles);
    for (const file of missingFiles) {
      console.log(`- ${file}`);
    }
  }

  if (warnings.length > 0) {
    console.log(text.warnings);
    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
  }

  process.exitCode = 1;
}
