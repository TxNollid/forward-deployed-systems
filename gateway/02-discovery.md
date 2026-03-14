# Phase 2: Discovery

Weeks 1-3. Goal: deeply understand the client's current state — processes, pain, data, and politics.

## Objectives

1. Map the actual workflows (not the documented ones)
2. Identify data sources, quality, and accessibility
3. Understand the org's decision-making structure
4. Surface the real blockers to AI adoption
5. Quantify the opportunity (tie to KPIs the client already tracks)

## Activities

### Process Discovery
- Shadow end users performing the workflows you'll be automating
- Document as-is process flows (use templates/process-map.md)
- Note workarounds, manual steps, and tribal knowledge
- Reference `domains/{industry}/processes.md` for expected patterns

### Data Discovery
- Inventory data sources relevant to the use case
- Assess data quality, completeness, freshness
- Map data lineage — where does it originate, how does it flow
- Identify access constraints (see skills/data-audit.md)

### Stakeholder Discovery
- Map influence and interest (skills/stakeholder-mapping.md)
- Identify champions and resistors
- Understand each stakeholder's definition of success
- Reference `domains/{industry}/roles.md` for typical org patterns

### Technical Discovery
- Inventory current systems and integrations
- Identify API availability and constraints
- Assess infrastructure readiness for AI workloads
- Reference `domains/{industry}/systems.md` for common stacks

## Key Questions

- What does success look like in 90 days? In 1 year?
- What has been tried before? What failed and why?
- Who will use the AI output? How will it fit into their existing workflow?
- What data do you trust? What data do you not trust?
- What are the compliance/regulatory constraints? (see domains/{industry}/regulations.md)

## Anti-Patterns

- Analysis paralysis — discovery is timeboxed, not open-ended
- Only talking to leadership — the people doing the work know where the pain is
- Treating discovery as a report — it's a foundation for solution design

## Outputs

- As-is process maps for target workflows
- Data inventory and quality assessment
- Stakeholder map with influence/interest ratings
- Technical architecture diagram of current state
- Discovery findings document with prioritized opportunities

## Next → [03-solution-design.md](./03-solution-design.md)
