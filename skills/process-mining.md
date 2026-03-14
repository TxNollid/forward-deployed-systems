# Skill: Process Mining

## When to Use

During discovery when you need to understand how work actually gets done (not how the org chart says it should).

## Process

### 1. Start with the Domain

Read `domains/{industry}/processes.md` for the expected process. This is your hypothesis — reality will differ.

### 2. Shadow & Interview

- Shadow 2-3 people who actually perform the workflow
- Watch, don't suggest. Note every step, including workarounds.
- Ask: "Why do you do it that way?" — the answer reveals system gaps and tribal knowledge.
- Ask: "What's the most frustrating part of your day?"
- Ask: "What information do you wish you had?"

### 3. Map As-Is

Document the actual process:

```
Trigger: [what initiates]
   ↓
Step 1: [actor] does [action] in [system]
   ↓ (decision point: if X → step 2a, if Y → step 2b)
Step 2a: [actor] does [action] — MANUAL WORKAROUND
Step 2b: [actor] does [action] in [system]
   ↓
...
   ↓
Outcome: [result]
```

Annotate:
- **Manual steps** — no system, tribal knowledge, or workaround
- **Handoff points** — where work passes between people/systems
- **Wait times** — where work sits in a queue
- **Decision points** — where judgment is applied
- **Data entry points** — where data is created or modified
- **Pain points** — where errors, delays, or frustration occur

### 4. Quantify

- How long does each step take?
- How often does the process run?
- What's the error/rework rate?
- What's the cost of the current process?

### 5. Identify AI Insertion Points

Look for:
- Manual steps that follow patterns → automation
- Decision points that use data → ML-assisted decisions
- Handoffs where information is lost → NLP extraction
- Wait times caused by information gathering → LLM-assisted research
- Quality checks that are inconsistent → computer vision or ML scoring

## Output

- As-is process map (use templates/process-map.md)
- Annotated with pain points, volumes, and AI insertion points
- Comparison with expected process from domain docs
- Prioritized list of improvement opportunities
