# Skill: Integration Patterns

## When to Use

During solution design when you need to connect your AI solution to the client's systems.

## Common Patterns

### 1. Read-Only Analytics (Lowest Risk)

```
Client Systems → ETL/API → Your Analytics Layer → Dashboard/Report
```

- Extract data from source systems, transform, load into your environment
- No write-back to client systems
- Easiest to get approved (security, compliance)
- Start here. Prove value before requesting write access.

### 2. Human-in-the-Loop Recommendations

```
Client Systems → Data → AI Model → Recommendations → Human Review → Action in Client System
```

- AI suggests, human decides
- Output displayed in a UI or pushed to existing tools (email, Teams, dashboard)
- Good for building trust before full automation
- Document the review/override process

### 3. Embedded AI (Write-Back)

```
Client System → Triggers AI → AI Returns Result → Written Back to Client System
```

- AI is integrated into the client's workflow tools
- Requires API access or custom integration
- Higher bar for accuracy, latency, and reliability
- Needs rollback/override capability

### 4. Batch Processing

```
Scheduled Job → Pull Data → Run Model → Output File/Report → Delivered to Client
```

- Simplest to deploy and maintain
- Good for periodic analysis (daily risk scores, weekly reports)
- No real-time requirements
- Often the right v1 even if the vision is real-time

### 5. Event-Driven

```
Event (sensor, alarm, meter) → Stream Processing → AI Model → Alert/Action
```

- Real-time or near-real-time
- Complex to build and monitor
- Highest value for time-sensitive decisions (outage detection, safety)
- Only build this when batch won't meet the requirement

## Decision Framework

| Factor | Batch | API | Embedded | Event-Driven |
|--------|-------|-----|----------|--------------|
| Time to deploy | Fast | Medium | Slow | Slow |
| Client IT effort | Low | Medium | High | High |
| Security approval | Easy | Medium | Hard | Hard |
| User behavior change | Low | Low | Medium | Low |
| Latency tolerance | Hours-days | Seconds | Seconds | Milliseconds |

## Tips

- Always ask: "What's the simplest integration that proves value?"
- Get IT/security involved early — they can kill your timeline
- Document the data contract (schema, frequency, SLA) formally
- Build monitoring from day 1 — silent failures are the worst failures
- Plan for the client's change management windows (utilities often have monthly or quarterly release cycles)
