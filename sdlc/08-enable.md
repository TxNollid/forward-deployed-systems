# Phase 08: Enable

Transfer knowledge. If users can't operate without you, this phase failed.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Production system (live) | 07 Deploy | Working system to train on |
| Runbook | 07 Deploy | Operational procedures |
| As-is process maps | 02 Discovery | Context for how workflows changed |
| UAT feedback | 06 Test | Where users struggled |
| Known issues & limitations | 06 Test | What users need to know |
| Domain vocabulary | `domains/{industry}/vocabulary.md` | Use client's language in training |
| Domain roles | `domains/{industry}/roles.md` | Who needs what type of training |

## Actions

### 1. Design Training by Role
- Reference `domains/{industry}/roles.md` for who needs training
- End users: how to use the system in their daily workflow
- Power users: advanced features, how to interpret AI output
- Technical staff: system operations, monitoring, troubleshooting
- Managers: how to read dashboards and KPIs

### 2. Deliver User Training
- Hands-on workshops with real workflows (not slides)
- Walk through the before/after: old process vs. new process
- Explicitly cover: what to do when the AI is wrong
- Create quick-reference guides for daily use
- Use `skills/change-management.md` for adoption strategy

### 3. Deliver Technical Training
- Architecture walkthrough with client engineering team
- Runbook review: monitoring, alerting, common issues, escalation
- Code walkthrough if client will maintain or extend
- Infrastructure management: scaling, updates, cost management

### 4. Create Documentation
- User guide for end users
- Technical operations guide
- FAQ based on UAT feedback and training questions
- Known limitations with workarounds

### 5. Build Champions
- Identify 2-3 internal advocates at different levels
- Equip them with success metrics to share upward
- Set them up to train future users
- Reference `skills/change-management.md`

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Training materials | Guides, reference cards, recorded walkthroughs | 10 Handoff (archived) |
| User documentation | Written guides + FAQ | 09 Operate, 10 Handoff |
| Technical documentation | Ops guide + architecture docs | 09 Operate, 10 Handoff |
| Identified champions | Named people with action plans | 09 Operate, 10 Handoff |
| Support escalation path | Who to contact for what | 09 Operate |

## Quality Gate

- [ ] All user groups trained (end users, power users, technical, managers)
- [ ] Training materials delivered and accessible
- [ ] Documentation reviewed by client team for accuracy
- [ ] At least 2 internal champions identified and equipped
- [ ] Support escalation path defined and communicated
- [ ] Client team demonstrates ability to operate independently

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/roles.md` | Training audience identification |
| `domains/{industry}/vocabulary.md` | Use client's language |
| `skills/change-management.md` | Adoption strategy |
| `templates/process-map.md` | Before/after process comparison |
