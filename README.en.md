# inio

`inio` is a workflow-first, scenario-based project initializer CLI for collaboration and handoff.

**中文说明：** [README.md](./README.md)

## Install

```bash
npm install -g inio
```

## Usage

CLI defaults to **`--lang zh`** (Chinese templates and `list` / `validate` output). Use **`--lang en`** for English.

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

## Built-in Profiles

- `core`: minimal universal workflow baseline (`workflow/` + `src/` boundaries)
- `product-design`: **Product design + AI coding-driven delivery loop**  
  - Discover: research+design merged → **Build: implement, integrate, and iterate in `src/`** → Verify  
  - **TDD** recommended by default—from requirements to runnable code, not “design-only”
- `research-analysis`: industry research, crawling, data analysis, and reporting (evidence-driven three-phase workflow)

## research-analysis Methodology

- Discover: define research questions, evidence tiers, and claim rules before execution
- Build: run a reproducible pipeline from ingest -> clean -> analyze -> write
- Verify: gate release with data quality checks, report review checks, and an evidence traceability matrix
- Key principle: every key claim must trace back to source, chart/table, and method

## Language (CLI)

- **`--lang zh` (default)**: Chinese templates and `list` / `validate` output
- **`--lang en`**: English templates and output

## Migration

- Moves legacy 4-phase folders into the new Discover / Build / Verify layout
- Preserves existing content (conflicts renamed with `.migrated-*`)
- Scaffolds missing inio baseline files without overwriting existing files

## Development

```bash
npm install
npm run build
node dist/cli.js list
```

## Local Smoke Test Convention

- Put temporary verification projects under **`.tmp/`** (e.g. `.tmp/smoke-product`)
- `.tmp/` is gitignored to avoid confusion with product files

```bash
node dist/cli.js init .tmp/smoke-product --profile product-design
node dist/cli.js validate .tmp/smoke-product --profile product-design
# English templates: add --lang en
```
