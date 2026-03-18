# Phase 05: Build

Write the code. Build in short cycles with client visibility.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Architecture document | 04 Design | System components and their interactions |
| Integration specification | 04 Design | API contracts, data schemas |
| Data pipeline design | 04 Design | Source → transform → store → serve |
| AI/ML approach document | 04 Design | Model type, training plan |
| KPI dashboard specification | 04 Design | What to visualize and how |
| Security/compliance review | 04 Design | Constraints on implementation |
| Acceptance criteria | 03 Requirements | What "done" looks like per feature |

## Actions

### 1. Set Up Development Environment
- Provision infrastructure (dev/staging)
- Establish code repository, CI/CD pipeline, branching strategy
- Configure data access per security review
- Set up monitoring and logging from the start

### 2. Build Data Pipeline
- Implement extraction from source systems
- Build transformation and feature engineering
- Validate data quality at each stage
- Confirm output matches expected schema from design

### 3. Build AI/ML Components
- Prepare training data per approach document
- Train and evaluate model(s)
- Iterate on feature engineering and model selection
- Document model performance against evaluation criteria

### 4. Build Integration Layer
- Implement connections to client systems per integration spec
- Handle authentication, error handling, retry logic
- Build to the API contract — test against real endpoints when available

### 5. Build User-Facing Components
- Dashboard, UI, or output format per KPI dashboard spec
- Optimize for the end user's workflow (minimize new steps)
- Include override/feedback mechanisms where applicable

### 6. Sprint Demos
- Demo to stakeholders at end of each cycle (1-2 weeks)
- Collect feedback, adjust priorities
- Keep the client's POC informed daily

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Working code (source + tests) | Code repository | 06 Test |
| Trained model artifacts | Model files, training logs, evaluation results | 06 Test |
| Integration endpoints | Running services or batch jobs | 06 Test |
| Data pipeline (running) | ETL/ELT jobs producing expected output | 06 Test |
| Dashboard / UI (functional) | Deployed to staging | 06 Test |
| Build log | Sprint summaries, decisions, known issues | 06 Test, 09 Operate |

## Quality Gate

- [ ] All functional requirements implemented
- [ ] Unit tests passing
- [ ] Data pipeline producing expected output from real data
- [ ] Model evaluation meets minimum thresholds from approach document
- [ ] Integration tested against client systems (staging or sandbox)
- [ ] Client POC has seen a demo and provided feedback
- [ ] No critical security findings from code review

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/systems.md` | System-specific integration gotchas |
| `domains/{industry}/regulations.md` | Implementation constraints |
| `extensions/` | Reusable integration code and config |
