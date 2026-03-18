# Phase 04: Design

Architect the technical solution. Every design decision should trace back to a requirement.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Prioritized use case list | 03 Requirements | What we're building |
| Functional requirements | 03 Requirements | What the system does |
| Non-functional requirements | 03 Requirements | Constraints on how it works |
| Success metrics with baselines | 03 Requirements | What we're optimizing for |
| Technical landscape doc | 02 Discovery | Client systems, APIs, infrastructure |
| Data inventory & quality assessment | 02 Discovery | What data is available and its condition |
| Domain systems | `domains/{industry}/systems.md` | Vendor-specific integration notes |
| Domain regulations | `domains/{industry}/regulations.md` | Compliance constraints on architecture |

## Actions

### 1. Select Integration Pattern
- Choose approach: batch, API, embedded, event-driven
- Reference `skills/integration-patterns.md` for decision framework
- Match pattern to non-functional requirements (latency, complexity, security approval effort)
- Document trade-offs and rationale

### 2. Design System Architecture
- Define components, their responsibilities, and interactions
- Map data flow: source → ingestion → processing → model → output → destination
- Specify technology choices for each component
- Use `templates/architecture-doc.md` for output format

### 3. Design Data Pipeline
- Source extraction: what, how, when, how much
- Transformation: cleaning, feature engineering, normalization
- Storage: where processed data lives, retention policy
- Map to data inventory from discovery — confirm access is granted

### 4. Design AI/ML Approach
- Model selection: what type of AI for this problem
- Training data strategy: what data, how much, how labeled
- Evaluation plan: metrics, test sets, human review
- Feedback loop: how the model improves over time

### 5. Design KPI Dashboard
- Use `templates/kpi-dashboard-spec.md`
- Map each success metric to a visualization
- Define data refresh cadence and source
- Align with existing reports from `domains/{industry}/reports.md`

### 6. Security & Compliance Review
- Map architecture against regulatory constraints
- Identify what data crosses security boundaries (e.g., NERC CIP perimeters)
- Plan authentication, authorization, encryption
- Get early review from client's security/compliance team

## Outputs

| Output | Template/Format | Consumed By |
|--------|----------------|-------------|
| Architecture document | `templates/architecture-doc.md` | 05 Build, 07 Deploy |
| Integration specification | API contracts, data schemas, protocols | 05 Build |
| Data pipeline design | Source → transform → store → serve | 05 Build |
| AI/ML approach document | Model type, training plan, evaluation plan | 05 Build, 06 Test |
| KPI dashboard specification | `templates/kpi-dashboard-spec.md` | 05 Build, 09 Operate |
| Security/compliance review | Constraints, approvals needed, architecture adjustments | 05 Build, 07 Deploy |

## Quality Gate

- [ ] Architecture traces to requirements — every component serves a requirement
- [ ] Integration pattern selected with trade-off rationale
- [ ] Data pipeline design confirmed against actual data access (not assumed)
- [ ] Security/compliance review initiated with client team
- [ ] Architecture reviewed by client's technical stakeholders
- [ ] No requirement is unaddressed in the design

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/systems.md` | Vendor-specific integration details |
| `domains/{industry}/regulations.md` | Compliance constraints |
| `domains/{industry}/reports.md` | Existing reporting to align with |
| `skills/integration-patterns.md` | Integration decision framework |
| `templates/architecture-doc.md` | Architecture document format |
| `templates/kpi-dashboard-spec.md` | Dashboard specification format |
