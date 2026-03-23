import type { InioProfile } from "./types";

export const coreProfile: InioProfile = {
  id: "core",
  name: "Core Workflow",
  description: "Universal project workflow baseline with workflow/ + src/ boundaries.",
  localizedMeta: {
    zh: {
      name: "核心工作流",
      description: "通用协作基线，约束 workflow/ 与 src/ 的清晰边界。"
    }
  },
  requiredDirs: [
    "workflow",
    "workflow/00-rule",
    "workflow/00-rule/trace",
    "src"
  ],
  requiredFiles: [
    ".gitignore",
    ".env.example",
    "README.md",
    "workflow/README.md",
    "workflow/00-rule/meta-rule.md",
    "workflow/00-rule/soul.md",
    "workflow/00-rule/self.md",
    "workflow/00-rule/current-state.md",
    "workflow/00-rule/trace/README.md"
  ],
  files: {
    ".gitignore": [
      "node_modules/",
      "dist/",
      ".env",
      ".DS_Store",
      "*.log"
    ].join("\n"),
    ".env.example": [
      "# Fill values in your local .env file (never commit secrets).",
      "APP_NAME={{projectName}}",
      "APP_ENV=development"
    ].join("\n"),
    "README.md": [
      "# {{projectName}}",
      "",
      "This project uses the inio workflow-first template.",
      "",
      "- `src/`: executable source code",
      "- `workflow/`: collaboration docs (rules, discover, build, verify)"
    ].join("\n"),
    "workflow/README.md": [
      "# workflow",
      "",
      "| Directory | Purpose |",
      "| --- | --- |",
      "| `00-rule/` | Collaboration baseline and current state |",
      "| `01-discover/` | Discovery artifacts (research + design) |",
      "| `02-build/` | Build plans and implementation notes |",
      "| `03-verify/` | Validation, acceptance and review notes |"
    ].join("\n"),
    "workflow/00-rule/meta-rule.md": [
      "# Meta Rules",
      "",
      "1. Keep `current-state.md` as the single source of current progress.",
      "2. Update `trace/` when key decisions are made.",
      "3. Never commit secrets or local credentials into this repository.",
      "4. Keep template language neutral and avoid project-specific assumptions.",
      "5. Keep executable code in `src/`, not in `workflow/`."
    ].join("\n"),
    "workflow/00-rule/soul.md": [
      "# Soul",
      "",
      "AI collaboration principles (placeholder):",
      "",
      "- Clarify goals before implementing.",
      "- Deliver in small, verifiable increments.",
      "- Keep context and decisions explicit."
    ].join("\n"),
    "workflow/00-rule/self.md": [
      "# Self",
      "",
      "Maintained by human collaborators.",
      "",
      "- Background:",
      "- Preferences:",
      "- Constraints:"
    ].join("\n"),
    "workflow/00-rule/current-state.md": [
      "# Current State",
      "",
      "## Stage",
      "- Draft",
      "",
      "## Done",
      "- Initial repository scaffolded",
      "",
      "## Next",
      "- Define first milestone"
    ].join("\n"),
    "workflow/00-rule/trace/README.md": [
      "# trace",
      "",
      "Record major decisions and rationale here.",
      "",
      "- Do not store secrets.",
      "- Keep each decision concise and dated."
    ].join("\n"),
    "src/.gitkeep": ""
  },
  localizedFiles: {
    zh: {
      ".env.example": [
        "# 请在本地 .env 中填写具体值（不要提交密钥）。",
        "APP_NAME={{projectName}}",
        "APP_ENV=development"
      ].join("\n"),
      "README.md": [
        "# {{projectName}}",
        "",
        "本项目使用 inio 的工作流优先模板。",
        "",
        "- `src/`：可执行源码",
        "- `workflow/`：协作过程文档（规则、发现、构建、验证）"
      ].join("\n"),
      "workflow/README.md": [
        "# workflow",
        "",
        "| 目录 | 用途 |",
        "| --- | --- |",
        "| `00-rule/` | 协作基线与当前状态 |",
        "| `01-discover/` | 发现阶段产物（调研+设计） |",
        "| `02-build/` | 构建计划与实现说明 |",
        "| `03-verify/` | 验收、测试与复盘说明 |"
      ].join("\n"),
      "workflow/00-rule/meta-rule.md": [
        "# 元规则",
        "",
        "1. `current-state.md` 是当前进展的单一事实来源。",
        "2. 关键决策发生后，及时更新 `trace/`。",
        "3. 禁止提交密钥或本地凭证到仓库。",
        "4. 模板语言保持中性，避免预置业务假设。",
        "5. 可执行代码放在 `src/`，不要放在 `workflow/`。"
      ].join("\n"),
      "workflow/00-rule/soul.md": [
        "# soul",
        "",
        "AI 协作原则（占位）：",
        "",
        "- 先澄清目标，再实施。",
        "- 小步可验证交付。",
        "- 决策与上下文保持显式。"
      ].join("\n"),
      "workflow/00-rule/self.md": [
        "# self",
        "",
        "由人类协作者维护。",
        "",
        "- 背景：",
        "- 偏好：",
        "- 约束："
      ].join("\n"),
      "workflow/00-rule/current-state.md": [
        "# 当前状态",
        "",
        "## 阶段",
        "- 草稿",
        "",
        "## 已完成",
        "- 仓库初始骨架已创建",
        "",
        "## 下一步",
        "- 定义首个里程碑"
      ].join("\n"),
      "workflow/00-rule/trace/README.md": [
        "# trace",
        "",
        "用于记录关键决策与原因。",
        "",
        "- 不要存放任何密钥。",
        "- 每条记录尽量简洁并标注日期。"
      ].join("\n")
    }
  }
};
