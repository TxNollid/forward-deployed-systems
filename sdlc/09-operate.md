# Phase 09: Operate

Monitor, measure, and optimize the running system. Prove the value.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Production system (live) | 07 Deploy | The running system |
| Monitoring dashboards | 07 Deploy | System health, model health, KPIs |
| Runbook | 07 Deploy | Operational procedures |
| Success metrics with baselines | 03 Requirements | What we're measuring against |
| Known issues & limitations | 06 Test | What to watch for |
| Support escalation path | 08 Enable | Who handles what |

## Actions

### 1. Monitor System Health
- Track uptime, latency, error rates, resource utilization
- Respond to alerts per runbook
- Log incidents with root cause and resolution

### 2. Monitor Model Health
- Track prediction volume, distribution, and quality
- Detect model drift (input data changing, performance degrading)
- Compare ongoing accuracy to test phase benchmarks
- Schedule model retraining if performance degrades

### 3. Measure Business KPIs
- Track success metrics against baselines and targets
- Calculate ROI where applicable
- Capture qualitative feedback from users
- Report progress to client sponsor (use `templates/status-update.md`)

### 4. Optimize
- Identify and resolve performance bottlenecks
- Tune model based on production feedback
- Adjust thresholds, rules, or configurations based on real-world behavior
- Prioritize improvements based on KPI impact

### 5. Manage Incidents
- Follow runbook for known issues
- Document new issues and update runbook
- Escalate per defined path
- Conduct post-incident reviews for significant events

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Operational metrics log | System health, model health over time | 10 Handoff |
| KPI tracking report | Progress against baselines and targets | 10 Handoff |
| Incident log | Issues, root causes, resolutions | 10 Handoff |
| Optimization recommendations | Prioritized improvements | 10 Handoff |
| Updated runbook | New procedures from operational learnings | 10 Handoff |
| Status updates | `templates/status-update.md` | Client sponsor (ongoing) |

## Quality Gate

- [ ] System has been operating stably for agreed period (typically 2-4 weeks)
- [ ] KPIs trending toward targets (or reasons documented if not)
- [ ] No unresolved critical incidents
- [ ] Runbook updated with operational learnings
- [ ] Client team handling routine operations independently
- [ ] Sponsor satisfied with progress and outcomes

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/kpis.md` | KPI definitions for accurate reporting |
| `templates/status-update.md` | Status report format |
| `skills/escalation.md` | Escalation methodology |
