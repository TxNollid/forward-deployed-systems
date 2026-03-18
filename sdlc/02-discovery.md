# Phase 02: Discovery

Deeply understand the client's current state — processes, data, systems, and people.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Signed SOW | 01 Scoping | Defines scope and objectives |
| Stakeholder map (initial) | 01 Scoping | Who to interview and shadow |
| Engagement plan | 01 Scoping | Timeline for discovery activities |
| Domain processes | `domains/{industry}/processes.md` | Expected process patterns |
| Domain systems | `domains/{industry}/systems.md` | Expected tech stack |
| Domain vocabulary | `domains/{industry}/vocabulary.md` | Speak the client's language |

## Actions

### 1. Process Discovery
- Shadow end users performing target workflows
- Map as-is processes (actual, not documented)
- Compare against expected patterns from domain processes
- Annotate pain points, manual steps, handoffs, decision points
- Use `skills/process-mining.md` for methodology
- Use `templates/process-map.md` for output format

### 2. Data Discovery
- Inventory all data sources relevant to the use case
- Assess quality: completeness, accuracy, consistency, timeliness
- Map data to potential use cases
- Identify gaps and blockers
- Use `skills/data-audit.md` for methodology

### 3. Stakeholder Discovery
- Expand and refine the stakeholder map from scoping
- Interview key stakeholders: what does success look like to them?
- Identify champions and resistors
- Map informal influence (not just org chart)
- Use `skills/stakeholder-mapping.md`

### 4. Technical Discovery
- Inventory current systems and their versions
- Map integrations and data flows between systems
- Assess API availability and access constraints
- Identify infrastructure for AI workloads (compute, storage, network)
- Reference `domains/{industry}/systems.md` for vendor-specific notes
- Evaluate compliance constraints from `domains/{industry}/regulations.md`

## Outputs

| Output | Template/Format | Consumed By |
|--------|----------------|-------------|
| As-is process maps | `templates/process-map.md` | 03 Requirements, 08 Enable |
| Data inventory & quality assessment | `skills/data-audit.md` output format | 03 Requirements, 04 Design |
| Stakeholder map (refined) | `skills/stakeholder-mapping.md` | 03 Requirements, 08 Enable |
| Technical landscape doc | Systems, integrations, constraints | 04 Design |
| Discovery findings document | Summary with prioritized opportunities | 03 Requirements |

## Quality Gate

- [ ] All target workflows mapped with at least 2 sources (interview + observation)
- [ ] Data inventory complete with quality ratings for each source
- [ ] Stakeholder map updated with influence/interest/stance for all key players
- [ ] Technical landscape documented with integration points and constraints
- [ ] Findings presented to client sponsor — no major surprises

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/processes.md` | Expected process patterns |
| `domains/{industry}/systems.md` | System-specific integration notes |
| `domains/{industry}/vocabulary.md` | Domain terminology |
| `domains/{industry}/regulations.md` | Compliance constraints |
| `skills/process-mining.md` | Process mapping methodology |
| `skills/data-audit.md` | Data assessment methodology |
| `skills/stakeholder-mapping.md` | Stakeholder analysis |
| `templates/process-map.md` | Process map format |
