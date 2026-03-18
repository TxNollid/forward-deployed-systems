# Phase 07: Deploy

Ship to production. Make it real.

---

## Inputs

| Input | Source | Notes |
|-------|--------|-------|
| Validation report | 06 Test | Confirmed all criteria met |
| Known issues & limitations | 06 Test | What to communicate and monitor |
| Security sign-off | 06 Test | Approved for production |
| Architecture document | 04 Design | Production infrastructure plan |
| Working code | 05 Build | Release candidate |
| Performance benchmarks | 06 Test | Baseline for production monitoring |

## Actions

### 1. Prepare Production Environment
- Provision production infrastructure per architecture doc
- Configure networking, security groups, access controls
- Set up monitoring, alerting, and logging
- Validate environment matches staging configuration

### 2. Deploy
- Execute deployment plan (incremental, not big bang)
- Run smoke tests post-deployment
- Verify data pipeline is flowing in production
- Confirm model is serving predictions
- Validate integrations with production systems

### 3. Configure Monitoring
- Set up dashboards for system health (uptime, latency, error rates)
- Set up dashboards for model health (prediction volume, drift, accuracy)
- Set up dashboards for business KPIs per dashboard spec
- Configure alerts for anomalies and failures

### 4. Write Runbook
- Document common operational tasks
- Document failure modes and recovery procedures
- Document escalation paths
- Document maintenance windows and update procedures

### 5. Controlled Rollout
- Start with subset of users/circuits/regions (if applicable)
- Monitor closely for first 48-72 hours
- Expand incrementally as confidence builds
- Have rollback plan ready

## Outputs

| Output | Format | Consumed By |
|--------|--------|-------------|
| Production system (live) | Running services, pipelines, dashboards | 08 Enable, 09 Operate |
| Monitoring dashboards | System health + model health + KPIs | 09 Operate |
| Runbook | Operational procedures document | 08 Enable, 09 Operate, 10 Handoff |
| Deployment log | What was deployed, when, by whom, any issues | 09 Operate |
| Rollback plan | How to revert if critical issues emerge | 09 Operate |

## Quality Gate

- [ ] Production system is live and serving users
- [ ] Monitoring dashboards operational and showing healthy metrics
- [ ] Runbook reviewed by client's operations team
- [ ] No critical issues in first 48 hours post-deploy
- [ ] Rollback plan tested or verified
- [ ] Client POC confirms system is functioning as expected

## Reference

| Resource | Purpose |
|----------|---------|
| `domains/{industry}/regulations.md` | Production compliance requirements |
| `domains/{industry}/systems.md` | Production integration constraints |
| `extensions/infra/` | Infrastructure configuration patterns |
