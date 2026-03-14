# FDE Systems Package

An open-source operating system for Forward Deployed Engineers shipping AI in enterprises.

## What This Is

A structured framework of playbooks, domain knowledge, templates, and tooling that primes an FDE to be effective from day one at any enterprise engagement. Clone it, load the relevant domain, and go.

## How It Works

```
gateway/        → Engagement lifecycle (kickoff → handoff)
domains/        → Industry-specific knowledge (processes, roles, systems, KPIs)
skills/         → Repeatable FDE playbooks (discovery, stakeholder mapping, etc.)
extensions/     → Technical connectors and config templates
templates/      → Reusable deliverables (SOWs, architecture docs, status updates)
scripts/        → Automation tools (env scanning, health checks, demo builders)
memory/         → Per-engagement context (gitignored)
```

## Quick Start

1. Clone this repo
2. Identify your client's industry → read the relevant `domains/` folder
3. Start at `gateway/01-kickoff.md` and follow the engagement lifecycle
4. Use `skills/` and `templates/` as needed at each phase

## AI-Augmented Usage

This repo is designed to work with AI coding assistants. Point Claude Code, Cursor, or similar at this repo and ask:

> "I'm starting a T&D utilities engagement with a large IOU. Walk me through discovery."

The `CLAUDE.md` file wires up the context so the AI pulls from the right domain, gateway phase, and skills.

## Contributing

### Adding a New Domain

1. Copy `domains/_template/` to `domains/your-industry/`
2. Fill in each file following the template structure
3. Be specific — the value is in the detail, not the abstraction

### Adding Skills

Skills are repeatable playbooks that work across industries. If you find yourself doing the same thing at multiple clients, write it up as a skill.

## License

MIT
