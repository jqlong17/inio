import path from "node:path";
import { ensureDir, writeTextFile } from "../lib/fs";
import { renderTemplate } from "../lib/template";
import { resolveProfile, resolveProfileFiles } from "../profiles";
import type { SupportedLanguage } from "../profiles/types";

type InitOptions = {
  profile: string;
  lang: SupportedLanguage;
  force?: boolean;
  dryRun?: boolean;
};

export async function runInitCommand(
  targetDirArg: string | undefined,
  options: InitOptions
): Promise<void> {
  const targetDir = path.resolve(targetDirArg ?? ".");
  const profile = resolveProfile(options.profile);
  const projectName = path.basename(targetDir);
  const year = String(new Date().getFullYear());
  const profileFiles = resolveProfileFiles(profile, options.lang);

  await ensureDir(targetDir);

  const writeItems = Object.entries(profileFiles).map(([relativePath, content]) => {
    return {
      relativePath,
      fullPath: path.join(targetDir, relativePath),
      content: renderTemplate(content, { projectName, year })
    };
  });

  if (options.dryRun) {
    console.log(
      `[dry-run] profile=${profile.id} lang=${options.lang} target=${targetDir}`
    );
    for (const item of writeItems) {
      console.log(`[dry-run] write ${item.relativePath}`);
    }
    return;
  }

  for (const item of writeItems) {
    await writeTextFile(item.fullPath, item.content, Boolean(options.force));
    console.log(`created ${item.relativePath}`);
  }

  console.log(
    `\nInitialized "${projectName}" with profile "${profile.id}" (lang=${options.lang}).`
  );
}
