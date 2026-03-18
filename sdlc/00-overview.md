# FDE Engagement SDLC

Every phase follows **Input → Action → Output**. Outputs from one phase are the explicit inputs to the next. Nothing is assumed — if it's not produced upstream, it doesn't exist downstream.

## Phases

```
01 Scoping ─→ 02 Discovery ─→ 03 Requirements ─→ 04 Design ─→ 05 Build ─→ 06 Test ─→ 07 Deploy ─→ 08 Enable ─→ 09 Operate ─→ 10 Handoff
```

## Master I→A→O Chain

| Phase | Key Inputs | Key Outputs |
|-------|-----------|-------------|
| **01 Scoping** | Client request, domain context | Signed SOW, stakeholder map, engagement plan |
| **02 Discovery** | SOW, domain context, stakeholder map | As-is process maps, data inventory, technical landscape, findings doc |
| **03 Requirements** | Findings doc, process maps, domain KPIs | Prioritized use cases, acceptance criteria, success metrics |
| **04 Design** | Requirements, technical landscape, domain systems/regulations | Architecture doc, integration spec, data pipeline design, KPI dashboard spec |
| **05 Build** | Architecture doc, integration spec, data access | Working code, model artifacts, integration endpoints |
| **06 Test** | Working code, acceptance criteria, baseline KPIs | Validation report, test results, known issues, performance benchmarks |
| **07 Deploy** | Validated code, infrastructure access, runbook | Production system, monitoring dashboards, runbook (updated) |
| **08 Enable** | Production system, process maps, domain vocabulary | Trained users, training materials, support documentation |
| **09 Operate** | Production system, monitoring, runbook | Operational metrics, incident log, optimization recommendations |
| **10 Handoff** | Operational metrics, documentation, trained team | Outcomes report, expansion roadmap, retro, archived engagement |

## How to Read Each Phase File

Every phase file follows this structure:

```
## Inputs
What you need before starting. Each links to the phase or artifact that produces it.

## Actions
What you do. Each action references relevant skills/, domains/, or templates/.

## Outputs
What you produce. Each output states which downstream phase consumes it.

## Quality Gate
How you know this phase is done. Must pass before moving to the next phase.

## Reference
Which domain files, skills, and templates are relevant.
```

## Relationship to Domain Knowledge

Domain files provide context at every phase:

| Domain File | Primary Phase(s) | How It's Used |
|------------|-------------------|---------------|
| overview.md | Scoping, Discovery | Orient to the industry, understand landscape |
| vocabulary.md | All phases | Speak the client's language |
| processes.md | Discovery, Requirements | Map current state, identify automation targets |
| roles.md | Scoping, Discovery, Enable | Know who matters, train the right people |
| systems.md | Discovery, Design, Build, Deploy | Understand constraints, plan integrations |
| kpis.md | Requirements, Design, Test, Operate | Define success, measure outcomes |
| reports.md | Requirements, Design, Enable | Understand existing reporting, design AI outputs |
| regulations.md | Design, Build, Deploy | Constrain the solution space |
| ai-opportunities.md | Requirements, Design | Select and scope the use case |
