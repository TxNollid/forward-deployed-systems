# Phase 10: Handoff

Transfer ownership cleanly. Close the engagement.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Operational metrics log | 09 Operate | System performance over time |
| KPI tracking report | 09 Operate | Outcomes vs. baselines |
| Incident log | 09 Operate | Issues encountered and resolved |
| Optimization recommendations | 09 Operate | Future improvements |
| Updated runbook | 09 Operate | Current operational procedures |
| Training materials | 08 Enable | All enablement artifacts |
| User & technical documentation | 08 Enable | All documentation |
| Identified champions | 08 Enable | Internal advocates |
| Signed SOW | 01 Scoping | Original scope for outcomes comparison |

## Actions

### 1. Validate Independent Operation
- Client team runs the system without FDE for 1-2 weeks
- FDE available on standby but not actively operating
- Monitor for questions — each question reveals a gap in documentation or training
- Fill gaps in real time

### 2. Compile Outcomes Report
- Compare final KPIs to baselines from requirements
- Calculate ROI if applicable
- Include qualitative feedback from users and sponsors
- Executive summary for the sponsor to share upward

### 3. Define Expansion Roadmap
- Identify adjacent use cases surfaced during the engagement
- Prioritize by impact and feasibility
- Reference `domains/{industry}/ai-opportunities.md` for additional opportunities
- Deliver as a roadmap, not a sales pitch

### 4. Conduct Retrospective
- With client team: what worked, what didn't, what to improve
- Internal: what would you do differently
- Use `templates/retro.md`

### 5. Archive & Close
- Archive all engagement artifacts in `memory/`
- Ensure all documentation is in the client's systems (not just yours)
- Confirm all access and credentials are properly transitioned
- Formal close communication to all stakeholders

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Outcomes report | KPIs, ROI, executive summary | Client sponsor, future engagements |
| Expansion roadmap | Prioritized opportunities with estimates | Client, future FDE |
| Client retrospective | `templates/retro.md` | Client team |
| Internal retrospective | `templates/retro.md` | FDE team, `memory/` |
| Archived engagement | All artifacts organized | `memory/` |

## Quality Gate

- [ ] Client operated independently for minimum 1 week with no critical issues
- [ ] Outcomes report delivered and reviewed with sponsor
- [ ] All documentation transferred to client's systems
- [ ] Retrospective completed with client team
- [ ] Internal retrospective completed and lessons captured in `memory/`
- [ ] Formal close communicated to all stakeholders
- [ ] No open items without an assigned owner on the client side

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/ai-opportunities.md` | Expansion roadmap input |
| `templates/retro.md` | Retrospective format |
| `templates/status-update.md` | Final status communication |
