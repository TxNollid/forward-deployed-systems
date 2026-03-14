# Phase 4: Deployment

Weeks 3-8+. Goal: build, ship, and validate the solution in the client's environment.

## Objectives

1. Build the solution iteratively with client feedback
2. Deploy into the client's infrastructure
3. Validate against the agreed KPIs
4. Harden for production use

## Activities

### Build
- Work in short cycles (1-2 week sprints)
- Demo to stakeholders at the end of each cycle
- Keep the client's POC in the loop daily
- Use `extensions/` for common integration patterns

### Integration
- Connect to client systems identified in discovery
- Handle auth (extensions/auth/), data pipelines (extensions/data/)
- Respect compliance constraints (domains/{industry}/regulations.md)
- Test with real client data as early as possible

### Validation
- Measure against baseline KPIs established in solution design
- Run parallel testing (AI output vs. current process) where possible
- Collect user feedback from the people who will actually use it
- Document edge cases and failure modes

### Production Hardening
- Error handling, logging, monitoring
- Performance under realistic load
- Fallback behavior when the AI is wrong or unavailable
- Security review against client requirements

## Anti-Patterns

- Big bang launch — deploy incrementally, not all at once
- Building in isolation — if the client hasn't seen it in 2 weeks, you're off track
- Ignoring ops — who monitors this at 2am? Build for the client's ops reality
- Skipping validation — "it works in dev" is not a deployment

## Outputs

- Deployed, working solution in client environment
- Validation report with KPI measurements
- Known issues and limitations document
- Runbook for operations team

## Next → [05-enablement.md](./05-enablement.md)
