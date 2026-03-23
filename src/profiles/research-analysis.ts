import type { InioProfile } from "./types";

export const researchAnalysisProfile: InioProfile = {
  id: "research-analysis",
  name: "Research Analysis",
  description:
    "Adds an evidence-driven workflow for industry research, crawling, analysis and reporting.",
  localizedMeta: {
    zh: {
      name: "行业研究与分析",
      description: "扩展行业调研、爬取、数据分析与报告写作的证据驱动工作流。"
    }
  },
  extends: "core",
  requiredDirs: [
    "workflow/01-discover",
    "workflow/02-build",
    "workflow/03-verify",
    "src/crawlers",
    "src/analysis"
  ],
  requiredFiles: [
    "workflow/01-discover/README.md",
    "workflow/01-discover/research-brief.md",
    "workflow/01-discover/source-map.md",
    "workflow/01-discover/crawling-scope.md",
    "workflow/01-discover/analysis-framework.md",
    "workflow/01-discover/evidence-policy.md",
    "workflow/01-discover/report-outline.md",
    "workflow/02-build/README.md",
    "workflow/02-build/01plan.md",
    "workflow/02-build/data-pipeline-plan.md",
    "workflow/02-build/report-writing-playbook.md",
    "workflow/03-verify/README.md",
    "workflow/03-verify/data-quality-checklist.md",
    "workflow/03-verify/report-review-checklist.md",
    "workflow/03-verify/evidence-traceability-matrix.md",
    "src/crawlers/README.md",
    "src/analysis/README.md",
    "src/reports/.gitkeep"
  ],
  files: {
    "workflow/01-discover/README.md": [
      "# 01-discover",
      "",
      "Define research problem framing and design analysis/report approach."
    ].join("\n"),
    "workflow/01-discover/research-brief.md": [
      "# Research Brief",
      "",
      "## Objective",
      "-",
      "",
      "## Research Questions",
      "1.",
      "",
      "## Target Industry/Market",
      "-",
      "",
      "## Deliverables",
      "- Industry report",
      "- Key findings",
      "- Dataset summary"
    ].join("\n"),
    "workflow/01-discover/source-map.md": [
      "# Source Map",
      "",
      "| Source | Type | Access Method | Reliability | Notes |",
      "| --- | --- | --- | --- | --- |",
      "| | | API / crawl / manual | High / Medium / Low | |"
    ].join("\n"),
    "workflow/01-discover/crawling-scope.md": [
      "# Crawling Scope",
      "",
      "## Allowed Domains",
      "-",
      "",
      "## Data Fields",
      "-",
      "",
      "## Frequency",
      "- One-off / daily / weekly",
      "",
      "## Compliance Notes",
      "- Respect robots.txt and terms of service.",
      "- Avoid personal or sensitive data unless explicitly approved."
    ].join("\n"),
    "workflow/01-discover/analysis-framework.md": [
      "# Analysis Framework",
      "",
      "## Method",
      "- Comparative analysis / trend analysis / segmentation / forecasting",
      "",
      "## KPI Dictionary",
      "| KPI | Definition | Formula | Data Source |",
      "| --- | --- | --- | --- |",
      "| | | | |",
      "",
      "## Assumptions",
      "-"
    ].join("\n"),
    "workflow/01-discover/evidence-policy.md": [
      "# Evidence Policy",
      "",
      "Define what qualifies as acceptable evidence before execution.",
      "",
      "## Evidence Tiers",
      "- Tier 1: official/public institution data (highest priority)",
      "- Tier 2: audited company reports and reputable industry databases",
      "- Tier 3: media and community signals (supporting evidence only)",
      "",
      "## Claim Rules",
      "- Every key claim must cite at least 2 independent sources.",
      "- Conflicting evidence must be documented in risk notes.",
      "- Any estimate must include method and confidence level."
    ].join("\n"),
    "workflow/01-discover/report-outline.md": [
      "# Report Outline",
      "",
      "1. Executive Summary",
      "2. Industry Overview",
      "3. Market Structure and Trends",
      "4. Competitor Landscape",
      "5. Quantitative Findings",
      "6. Risks and Uncertainty",
      "7. Recommendations",
      "8. Appendix (data sources and methodology)"
    ].join("\n"),
    "workflow/02-build/README.md": [
      "# 02-build",
      "",
      "Execute crawler, analysis and report drafting pipeline."
    ].join("\n"),
    "workflow/02-build/01plan.md": [
      "# Build Plan 01",
      "",
      "## Milestone",
      "- Data collection completed",
      "- First-pass analysis completed",
      "- Report draft completed",
      "",
      "## Checklist",
      "- [ ] Finalize source list",
      "- [ ] Run crawler and archive raw data",
      "- [ ] Complete KPI calculations",
      "- [ ] Produce charts and tables",
      "- [ ] Write report draft",
      "",
      "## Definition of Done",
      "- Reproducible data pipeline",
      "- All key claims trace back to sources",
      "- Report passes review checklist"
    ].join("\n"),
    "workflow/02-build/data-pipeline-plan.md": [
      "# Data Pipeline Plan",
      "",
      "## Stages",
      "1. Ingest (crawl/API/import)",
      "2. Clean (dedup, normalize, validate)",
      "3. Analyze (metrics, segmentation, trend)",
      "4. Publish (report tables/charts/text)",
      "",
      "## File/Storage Convention",
      "- raw/",
      "- processed/",
      "- outputs/"
    ].join("\n"),
    "workflow/02-build/report-writing-playbook.md": [
      "# Report Writing Playbook",
      "",
      "Use this sequence to keep writing evidence-driven and decision-oriented.",
      "",
      "## Section Pattern",
      "Conclusion -> Evidence -> Method -> Risk -> Recommendation",
      "",
      "## Writing Rules",
      "- One section answers one core question.",
      "- Charts/tables must include metric definition and source.",
      "- Avoid opinion-only language without evidence.",
      "",
      "## Release Versions",
      "- v0: skeleton and evidence placeholders",
      "- v1: complete first draft",
      "- v2: reviewed and decision-ready version"
    ].join("\n"),
    "workflow/03-verify/README.md": [
      "# 03-verify",
      "",
      "Validate data quality, analysis correctness and report credibility."
    ].join("\n"),
    "workflow/03-verify/data-quality-checklist.md": [
      "# Data Quality Checklist",
      "",
      "- [ ] Data completeness verified",
      "- [ ] Duplicate records handled",
      "- [ ] Timestamp and unit normalized",
      "- [ ] Outliers reviewed and documented",
      "- [ ] Sampling bias discussed"
    ].join("\n"),
    "workflow/03-verify/report-review-checklist.md": [
      "# Report Review Checklist",
      "",
      "- [ ] Every key claim has a source reference",
      "- [ ] Methods and assumptions are explicit",
      "- [ ] Visualizations match underlying data",
      "- [ ] Conclusions align with evidence",
      "- [ ] Limitations and risks are documented"
    ].join("\n"),
    "workflow/03-verify/evidence-traceability-matrix.md": [
      "# Evidence Traceability Matrix",
      "",
      "| Claim ID | Claim | Evidence Source | Data/Chart Ref | Method Ref | Confidence | Reviewer |",
      "| --- | --- | --- | --- | --- | --- | --- |",
      "| C-01 |  |  |  |  | High / Medium / Low |  |",
      "",
      "## Rules",
      "- Every executive-summary claim must map to at least one row.",
      "- Missing mapping blocks release.",
      "- Confidence must be justified in review notes."
    ].join("\n"),
    "src/crawlers/README.md": [
      "# crawlers",
      "",
      "Place crawler implementations here.",
      "",
      "- Keep each crawler idempotent.",
      "- Log source URL, run time and output path."
    ].join("\n"),
    "src/analysis/README.md": [
      "# analysis",
      "",
      "Place data cleaning, transformation and analysis code here.",
      "",
      "- Keep transformation steps reproducible.",
      "- Version key metric definitions."
    ].join("\n"),
    "src/reports/.gitkeep": ""
  },
  localizedFiles: {
    zh: {
      "workflow/01-discover/README.md": [
        "# 01-discover",
        "",
        "定义调研问题与分析/报告方案（调研+设计合并）。"
      ].join("\n"),
      "workflow/01-discover/research-brief.md": [
        "# 调研简报",
        "",
        "## 目标",
        "-",
        "",
        "## 调研问题",
        "1.",
        "",
        "## 目标行业/市场",
        "-",
        "",
        "## 交付物",
        "- 行业研究报告",
        "- 关键结论",
        "- 数据集摘要"
      ].join("\n"),
      "workflow/01-discover/source-map.md": [
        "# 信息源地图",
        "",
        "| 来源 | 类型 | 获取方式 | 可靠性 | 备注 |",
        "| --- | --- | --- | --- | --- |",
        "| | | API / 爬取 / 手工 | 高 / 中 / 低 | |"
      ].join("\n"),
      "workflow/01-discover/crawling-scope.md": [
        "# 爬取范围定义",
        "",
        "## 允许域名",
        "-",
        "",
        "## 采集字段",
        "-",
        "",
        "## 采集频率",
        "- 一次性 / 每日 / 每周",
        "",
        "## 合规说明",
        "- 遵守 robots.txt 与站点服务条款。",
        "- 未获授权时避免采集个人或敏感数据。"
      ].join("\n"),
      "workflow/01-discover/analysis-framework.md": [
        "# 分析框架",
        "",
        "## 方法",
        "- 对比分析 / 趋势分析 / 分层分析 / 预测",
        "",
        "## KPI 字典",
        "| KPI | 定义 | 公式 | 数据来源 |",
        "| --- | --- | --- | --- |",
        "| | | | |",
        "",
        "## 前置假设",
        "-"
      ].join("\n"),
      "workflow/01-discover/evidence-policy.md": [
        "# 证据策略",
        "",
        "在执行前先定义“什么算有效证据”。",
        "",
        "## 证据分级",
        "- 一级：官方/公共机构数据（最高优先级）",
        "- 二级：审计过的企业报告与权威行业数据库",
        "- 三级：媒体与社区信号（仅作辅助证据）",
        "",
        "## 结论规则",
        "- 每个关键结论至少引用 2 个相互独立的信息源。",
        "- 出现相互冲突证据时，必须在风险说明中披露。",
        "- 任何估算都要写明方法与置信度。"
      ].join("\n"),
      "workflow/01-discover/report-outline.md": [
        "# 报告大纲",
        "",
        "1. 执行摘要",
        "2. 行业概览",
        "3. 市场结构与趋势",
        "4. 竞争格局",
        "5. 定量分析结果",
        "6. 风险与不确定性",
        "7. 建议与行动项",
        "8. 附录（数据来源与方法）"
      ].join("\n"),
      "workflow/02-build/README.md": [
        "# 02-build",
        "",
        "执行爬取、分析与报告撰写流程。"
      ].join("\n"),
      "workflow/02-build/01plan.md": [
        "# 第 01 次构建计划",
        "",
        "## 里程碑",
        "- 数据采集完成",
        "- 首轮分析完成",
        "- 报告初稿完成",
        "",
        "## 检查项",
        "- [ ] 确认信息源清单",
        "- [ ] 运行爬虫并归档原始数据",
        "- [ ] 完成 KPI 计算",
        "- [ ] 产出图表与表格",
        "- [ ] 完成报告初稿",
        "",
        "## 完成定义（DoD）",
        "- 数据管线可复现",
        "- 关键结论可回溯到证据来源",
        "- 报告通过审校清单"
      ].join("\n"),
      "workflow/02-build/data-pipeline-plan.md": [
        "# 数据管线计划",
        "",
        "## 阶段",
        "1. 采集（爬虫/API/导入）",
        "2. 清洗（去重、规范化、校验）",
        "3. 分析（指标、分层、趋势）",
        "4. 发布（报告表格/图表/文本）",
        "",
        "## 存储约定",
        "- raw/",
        "- processed/",
        "- outputs/"
      ].join("\n"),
      "workflow/02-build/report-writing-playbook.md": [
        "# 报告写作作战卡",
        "",
        "用固定写作顺序保证“结论可用、证据可查”。",
        "",
        "## 小节结构",
        "结论 -> 证据 -> 方法 -> 风险 -> 建议",
        "",
        "## 写作规则",
        "- 每个小节只回答一个核心问题。",
        "- 图表必须附指标定义与来源。",
        "- 禁止没有证据支撑的主观判断。",
        "",
        "## 版本节奏",
        "- v0：骨架与证据占位",
        "- v1：完整初稿",
        "- v2：审校后可决策版本"
      ].join("\n"),
      "workflow/03-verify/README.md": [
        "# 03-verify",
        "",
        "验证数据质量、分析正确性与报告可信度。"
      ].join("\n"),
      "workflow/03-verify/data-quality-checklist.md": [
        "# 数据质量检查清单",
        "",
        "- [ ] 数据完整性已验证",
        "- [ ] 重复记录已处理",
        "- [ ] 时间戳与单位已规范化",
        "- [ ] 异常值已复核并记录",
        "- [ ] 抽样偏差已说明"
      ].join("\n"),
      "workflow/03-verify/report-review-checklist.md": [
        "# 报告审校清单",
        "",
        "- [ ] 关键结论均有来源依据",
        "- [ ] 方法与假设表达清晰",
        "- [ ] 可视化与底层数据一致",
        "- [ ] 结论与证据一致",
        "- [ ] 局限性与风险已披露"
      ].join("\n"),
      "workflow/03-verify/evidence-traceability-matrix.md": [
        "# 证据追溯矩阵",
        "",
        "| 结论ID | 结论 | 证据来源 | 数据/图表引用 | 方法引用 | 置信度 | 审核人 |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "| C-01 |  |  |  |  | 高 / 中 / 低 |  |",
        "",
        "## 规则",
        "- 执行摘要中的每条关键结论都必须在矩阵中有映射。",
        "- 缺失映射不允许发布。",
        "- 置信度必须在审校记录中说明依据。"
      ].join("\n"),
      "src/crawlers/README.md": [
        "# crawlers",
        "",
        "在这里放置爬虫实现代码。",
        "",
        "- 每个爬虫应保持幂等。",
        "- 记录来源 URL、运行时间与输出路径。"
      ].join("\n"),
      "src/analysis/README.md": [
        "# analysis",
        "",
        "在这里放置数据清洗、转换与分析代码。",
        "",
        "- 保持转换步骤可复现。",
        "- 关键指标定义需版本化。"
      ].join("\n")
    }
  }
};
