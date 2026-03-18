# Phase 03: Requirements

Translate discovery findings into specific, measurable requirements that define what we're building.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Discovery findings document | 02 Discovery | Prioritized opportunities and current state |
| As-is process maps | 02 Discovery | Where automation/augmentation fits |
| Data inventory & quality assessment | 02 Discovery | What's feasible given available data |
| Stakeholder map (refined) | 02 Discovery | Who defines success, who uses the output |
| Domain KPIs | `domains/{industry}/kpis.md` | Metrics that matter to this client |
| Domain AI opportunities | `domains/{industry}/ai-opportunities.md` | Proven patterns for this industry |

## Actions

### 1. Select & Prioritize Use Cases
- Map discovery findings to domain AI opportunities
- Score by: impact (KPI movement), feasibility (data readiness), complexity, time to value
- Select use case(s) for this engagement — fewer is better
- Get stakeholder alignment on selection

### 2. Define Functional Requirements
- For each use case: what does the system do?
- Specify inputs, processing logic, and outputs
- Define user interactions — who does what, when
- Map to the as-is process — where does the AI insert?

### 3. Define Non-Functional Requirements
- Performance: latency, throughput, availability
- Security: authentication, authorization, data classification
- Compliance: regulatory constraints from `domains/{industry}/regulations.md`
- Integration: which systems, which direction, which protocol
- Scalability: expected growth in data/users

### 4. Set Success Metrics
- For each KPI affected: define baseline, target, and measurement method
- Reference `domains/{industry}/kpis.md` for definitions and formulas
- Agree on measurement cadence and data source
- Define minimum viable outcome (what's the smallest win that proves value?)

### 5. Write Acceptance Criteria
- For each requirement: specific, testable conditions for "done"
- Include happy path, edge cases, and failure scenarios
- Get sign-off from the stakeholder who will validate

## Outputs

| Output | Template/Format | Consumed By |
|--------|----------------|-------------|
| Prioritized use case list | Ranked with scoring rationale | 04 Design |
| Functional requirements | Use case → requirement → acceptance criteria | 04 Design, 06 Test |
| Non-functional requirements | Categorized constraints | 04 Design, 06 Test |
| Success metrics with baselines | `templates/kpi-dashboard-spec.md` | 04 Design, 06 Test, 09 Operate |
| Acceptance criteria | Per-requirement testable conditions | 06 Test |

## Quality Gate

- [ ] Use case(s) selected with explicit rationale and stakeholder alignment
- [ ] Every functional requirement has acceptance criteria
- [ ] Non-functional requirements documented (performance, security, compliance)
- [ ] Baseline KPI measurements captured
- [ ] Target KPIs agreed with client sponsor
- [ ] Requirements reviewed by technical stakeholders (feasibility check)

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/kpis.md` | Metric definitions and measurement |
| `domains/{industry}/ai-opportunities.md` | Proven use case patterns |
| `domains/{industry}/regulations.md` | Compliance requirements |
| `domains/{industry}/reports.md` | Existing reporting context |
| `templates/kpi-dashboard-spec.md` | Success metrics format |
