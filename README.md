# inio

`inio` 是基于「工作流优先」的场景化项目初始化 CLI，适合协作与交接。

**English:** [README.en.md](./README.en.md)

## 安装

```bash
npm install -g inio-labs
```

## 用法

（CLI 默认 `--lang zh`；需要英文模板或英文输出时加 `--lang en`。）

```bash
inio list
inio list --lang en
inio init my-project --profile product-design
inio init my-project --profile product-design --lang en
inio validate my-project --profile product-design
inio validate my-project --profile product-design --lang en
inio migrate my-project --profile product-design
inio init market-report --profile research-analysis
inio init market-report --profile research-analysis --lang en
```

## 内置场景（Profile）

- `core`：通用协作基线（`workflow/` + `src/` 边界）
- `product-design`：**产品设计 + AI coding 驱动的产品实现闭环**  
  - Discover：调研与设计合并 → **Build：在 `src/` 中实现、联调与迭代** → Verify：验收  
  - 默认推荐 **TDD**，覆盖从需求到可运行代码，而不是“只做设计稿”
- `research-analysis`：行业调研 / 爬取 / 数据分析 / 报告（证据驱动的三阶段工作流）

## research-analysis 方法论

- Discover：先定义研究问题、证据分级和结论判定规则，再进入执行
- Build：按“采集 -> 清洗 -> 分析 -> 写作”流水线产出可复现结果
- Verify：用数据质量清单 + 报告审校清单 + 证据追溯矩阵做发布前验收
- 关键原则：每条关键结论必须可追溯到来源、图表和方法

## product-design 强化方法论

- Discover：必须通过提问澄清业务/用户/约束上下文，并明确本轮是 MVP、增长期还是终态目标
- Build：执行计划必须包含单元测试与 E2E 测试矩阵，并定义发布门禁
- Build：提前定义日志策略（事件结构、日志级别、traceId、敏感信息边界）
- Verify：通过“测试证据记录 + 反馈闭环”沉淀可复用的调试与迭代机制

## 语言（CLI）

- **`--lang zh`（默认）**：模板与 `list` / `validate` 输出为中文
- **`--lang en`**：模板与输出为英文

## 迁移（migrate）

- 将旧版四阶段目录迁入新的 Discover / Build / Verify 布局
- 保留已有内容（冲突文件会重命名为 `.migrated-*`）
- 仅补齐缺失的 inio 基线文件，**不覆盖**已有文件

## 本地开发

```bash
npm install
npm run build
node dist/cli.js list
```

## 本地冒烟测试约定

- 临时验证项目放在 **`.tmp/`**（例如 `.tmp/smoke-product`）
- `.tmp/` 已加入 `.gitignore`，避免与正式仓库内容混淆

```bash
node dist/cli.js init .tmp/smoke-product --profile product-design
node dist/cli.js validate .tmp/smoke-product --profile product-design
# 需要英文模板时加：--lang en
```
