# Phase 06: Test

Validate the solution against requirements, data, and real-world conditions.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Working code | 05 Build | All components built and unit-tested |
| Trained model artifacts | 05 Build | Model files with evaluation results |
| Integration endpoints | 05 Build | Connected to client systems |
| Acceptance criteria | 03 Requirements | Testable conditions per requirement |
| Success metrics with baselines | 03 Requirements | KPI targets to validate against |
| Non-functional requirements | 03 Requirements | Performance, security, compliance constraints |
| Build log | 05 Build | Known issues and decisions |

## Actions

### 1. Functional Testing
- Test each acceptance criterion explicitly
- Cover happy path, edge cases, and failure scenarios
- Test with real client data, not synthetic
- Document pass/fail with evidence

### 2. Model Validation
- Evaluate model on held-out test data
- Compare model output to human expert judgment
- Run parallel testing: AI output vs. current process (where feasible)
- Test model behavior on edge cases and adversarial inputs
- Document precision, recall, accuracy, or domain-relevant metrics

### 3. Integration Testing
- End-to-end data flow: source → pipeline → model → output → destination
- Test failure modes: what happens when a source is unavailable?
- Test data quality degradation: what happens when input data quality drops?
- Validate output format matches consumer expectations

### 4. Performance Testing
- Test under realistic load
- Measure latency, throughput, resource utilization
- Compare against non-functional requirements
- Identify bottlenecks

### 5. Security & Compliance Testing
- Validate authentication and authorization
- Verify data handling meets regulatory requirements
- Review logging and audit trails
- Engage client security team for sign-off

### 6. User Acceptance Testing (UAT)
- Real users perform real tasks with the system
- Observe, don't guide — note where they struggle
- Collect structured feedback
- Identify training needs for enablement

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Validation report | Test results with evidence per acceptance criterion | 07 Deploy (go/no-go) |
| Model performance report | Metrics, confusion matrices, example outputs | 07 Deploy, 09 Operate |
| Known issues & limitations | Prioritized list with severity and workarounds | 07 Deploy, 08 Enable, 09 Operate |
| Performance benchmarks | Latency, throughput, resource usage | 07 Deploy, 09 Operate |
| UAT feedback | Structured user feedback | 08 Enable |
| Security sign-off | Client security team approval | 07 Deploy |

## Quality Gate

- [ ] All acceptance criteria tested with documented pass/fail
- [ ] Model performance meets minimum thresholds
- [ ] No critical or high-severity bugs open
- [ ] Performance meets non-functional requirements
- [ ] Security/compliance sign-off obtained
- [ ] UAT completed with representative users
- [ ] Client sponsor approves go-live

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/kpis.md` | Validate metrics align with definitions |
| `domains/{industry}/regulations.md` | Compliance validation checklist |
