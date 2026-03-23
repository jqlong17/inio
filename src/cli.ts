#!/usr/bin/env node

import { Command } from "commander";
import { runInitCommand } from "./commands/init";
import { runListCommand } from "./commands/list";
import { runMigrateCommand } from "./commands/migrate";
import { runValidateCommand } from "./commands/validate";
import type { SupportedLanguage } from "./profiles/types";

function parseLanguage(value: string): SupportedLanguage {
  if (value === "en" || value === "zh") {
    return value;
  }
  throw new Error(`Unsupported language "${value}". Use "zh" or "en".`);
}

async function main(): Promise<void> {
  const program = new Command();

  program
    .name("inio")
    .description("Workflow-first project initializer with scenario profiles.")
    .version("0.1.0");

  program
    .command("init")
    .description("Initialize a directory with selected profile")
    .argument("[dir]", "Target directory, default current directory")
    .option("-p, --profile <id>", "Profile id", "product-design")
    .option("-l, --lang <lang>", "Template language: zh | en", parseLanguage, "zh")
    .option("-f, --force", "Overwrite existing files")
    .option("--dry-run", "Show file plan without writing")
    .action(async (dir: string | undefined, options) => {
      await runInitCommand(dir, options);
    });

  program
    .command("list")
    .description("List all built-in profiles")
    .option("-l, --lang <lang>", "Display language: zh | en", parseLanguage, "zh")
    .action((options) => {
      runListCommand(options);
    });

  program
    .command("validate")
    .description("Validate directory structure against profile")
    .argument("[dir]", "Target directory, default current directory")
    .option("-p, --profile <id>", "Profile id", "product-design")
    .option("-l, --lang <lang>", "Display language: zh | en", parseLanguage, "zh")
    .action(async (dir: string | undefined, options) => {
      await runValidateCommand(dir, options);
    });

  program
    .command("migrate")
    .description("Migrate legacy project structure into inio three-phase workflow")
    .argument("[dir]", "Target directory, default current directory")
    .option("-p, --profile <id>", "Profile id", "product-design")
    .option("-l, --lang <lang>", "Template language: zh | en", parseLanguage, "zh")
    .option("--dry-run", "Preview migration actions without writing")
    .action(async (dir: string | undefined, options) => {
      await runMigrateCommand(dir, options);
    });

  await program.parseAsync(process.argv);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: ${message}`);
  process.exit(1);
});
