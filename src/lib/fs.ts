import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

export async function ensureDir(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}

export async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function writeTextFile(
  fullPath: string,
  content: string,
  force: boolean
): Promise<void> {
  const exists = await pathExists(fullPath);
  if (exists && !force) {
    throw new Error(`File exists: ${fullPath}`);
  }

  await ensureDir(path.dirname(fullPath));
  await writeFile(fullPath, content, "utf8");
}

export async function walkFiles(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const output: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await walkFiles(fullPath)));
      continue;
    }
    output.push(fullPath);
  }

  return output;
}
