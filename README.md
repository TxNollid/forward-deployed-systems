# Forward Deployed Systems

An open-source operating system for Forward Deployed Engineers shipping AI in enterprises.

## What This Is

A structured framework of playbooks, domain knowledge, templates, and tooling that primes an FDE to be effective from day one at any enterprise engagement. Clone it, load the relevant domain, and go.

## How It Works

```
sdlc/           → 10-phase engagement lifecycle with Input → Action → Output traceability
domains/        → Industry-specific knowledge (processes, roles, systems, KPIs)
skills/         → Repeatable FDE playbooks (discovery, stakeholder mapping, etc.)
templates/      → Reusable deliverables (SOWs, architecture docs, status updates)
diagrams/       → Mermaid visualizations of workflows and systems
extensions/     → Technical connectors and config templates
scripts/        → Automation tools (env scanning, health checks, demo builders)
gateway/        → Legacy engagement lifecycle (see sdlc/ for the current version)
memory/         → Per-engagement context (gitignored)
```

## SDLC

The engagement follows 10 phases. Every phase defines its **Inputs**, **Actions**, **Outputs**, and **Quality Gate**. Outputs from one phase are the explicit inputs to the next — nothing is assumed.

```
01 Scoping → 02 Discovery → 03 Requirements → 04 Design → 05 Build → 06 Test → 07 Deploy → 08 Enable → 09 Operate → 10 Handoff
```

Start at [`sdlc/00-overview.md`](sdlc/00-overview.md) for the master I→A→O chain.

## Quick Start

1. Clone this repo
2. Read [`sdlc/00-overview.md`](sdlc/00-overview.md) for the full lifecycle
3. Identify your client's industry → read the relevant `domains/` folder
4. Start at [`sdlc/01-scoping.md`](sdlc/01-scoping.md) and follow the phases
5. Each phase links to relevant `skills/`, `templates/`, and `domains/` files

## AI-Augmented Usage

This repo is designed to work with AI coding assistants. Point Claude Code, Cursor, or similar at this repo and ask:

> "I'm starting a T&D utilities engagement with a large IOU. Walk me through discovery."

The `CLAUDE.md` file wires up the context so the AI pulls from the right domain, SDLC phase, and skills.

## Domains

| Domain | Status |
|--------|--------|
| [T&D Utilities](domains/td-utilities/) | Complete |
| _Your industry_ | [Use the template](domains/_template/) |

## Contributing

### Adding a New Domain

1. Copy `domains/_template/` to `domains/your-industry/`
2. Fill in each file following the template structure
3. Be specific — the value is in the detail, not the abstraction

### Adding Skills

Skills are repeatable playbooks that work across industries. If you find yourself doing the same thing at multiple clients, write it up as a skill.

## License

CC BY-NC-SA 4.0 — see [LICENSE](LICENSE)
