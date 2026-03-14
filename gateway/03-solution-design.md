# Phase 3: Solution Design

Weeks 2-4. Goal: translate discovery findings into a concrete, buildable solution that maps to client KPIs.

## Objectives

1. Define the target-state architecture
2. Select AI approach (model, integration pattern, deployment model)
3. Map solution to measurable business outcomes
4. Get stakeholder buy-in before building

## Activities

### Architecture Design
- Define system components and their interactions
- Choose integration pattern (API, embedded, batch, streaming)
- Plan for auth, data flow, monitoring, and failure modes
- Reference `domains/{industry}/systems.md` for integration constraints
- Use templates/architecture-doc.md as the deliverable format

### AI Approach Selection
- Match the problem to the right AI technique (don't force LLMs on everything)
- Reference `domains/{industry}/ai-opportunities.md` for proven patterns
- Define input data, model behavior, output format, and feedback loop
- Plan for evaluation — how will you know it's working?

### KPI Mapping
- Tie every feature to a measurable outcome from `domains/{industry}/kpis.md`
- Define baseline metrics (current state) and target metrics
- Agree on measurement methodology with the client
- Use templates/kpi-dashboard-spec.md to formalize

### Stakeholder Alignment
- Present solution design to sponsors and key users
- Walk through the "day in the life" with the new system
- Address concerns about change, job impact, reliability
- Get explicit sign-off before proceeding to build

## Anti-Patterns

- Building before aligning — code is cheap, trust is expensive
- Over-engineering v1 — ship the smallest thing that proves value
- Ignoring the human workflow — AI that doesn't fit the workflow won't get used
- Promising accuracy numbers before you've seen the data

## Outputs

- Solution architecture document
- KPI dashboard specification with baselines and targets
- Signed-off scope for build phase
- Technical spike results (if needed to de-risk)

## Next → [04-deployment.md](./04-deployment.md)
