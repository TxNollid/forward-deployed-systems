# Architecture: {Solution Name}

**Client:** {client name}
**Author:** {FDE name}
**Date:** {date}
**Status:** Draft / Reviewed / Approved

---

## 1. Overview

{What this system does in 2-3 sentences. What problem it solves.}

## 2. Context Diagram

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Source System │────→│  AI Solution │────→│    Output     │
│              │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
```

{Describe the high-level data flow: what goes in, what processing happens, what comes out.}

## 3. Components

### {Component Name}
- **Purpose:** {what it does}
- **Technology:** {language, framework, platform}
- **Inputs:** {what data it receives}
- **Outputs:** {what it produces}
- **Dependencies:** {what it needs to function}

### {Component Name}
...

## 4. Data Flow

| Step | Source | Destination | Data | Method | Frequency |
|------|--------|------------|------|--------|-----------|
| 1 | | | | | |
| 2 | | | | | |

## 5. Integration Points

| System | Direction | Method | Auth | Notes |
|--------|-----------|--------|------|-------|
| | In / Out / Both | API / File / DB | | |

## 6. Infrastructure

- **Hosting:** {cloud provider, on-prem, hybrid}
- **Compute:** {instance types, containers, serverless}
- **Storage:** {databases, file storage, data lake}
- **Networking:** {VPN, VPC, firewall rules}

## 7. Security

- **Authentication:** {how users/systems authenticate}
- **Authorization:** {who can access what}
- **Data sensitivity:** {classification of data handled}
- **Compliance:** {relevant regulations — NERC CIP, etc.}
- **Encryption:** {at rest, in transit}

## 8. Monitoring & Operations

- **Health checks:** {what's monitored}
- **Alerting:** {who gets notified and when}
- **Logging:** {what's logged and where}
- **On-call:** {who supports this in production}

## 9. Failure Modes

| Failure | Impact | Detection | Recovery |
|---------|--------|-----------|----------|
| | | | |

## 10. Decisions & Trade-offs

| Decision | Options Considered | Chosen | Rationale |
|----------|-------------------|--------|-----------|
| | | | |
