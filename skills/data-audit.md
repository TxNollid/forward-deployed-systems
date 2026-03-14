# Skill: Data Audit

## When to Use

During discovery, before making any promises about what AI can do.

## Process

### 1. Inventory Data Sources

For each system identified in the domain's `systems.md`:

| Field | Notes |
|-------|-------|
| System name | |
| Data owner | Who controls access? |
| Access method | API, database, file export, screen scrape |
| Refresh frequency | Real-time, daily, weekly, batch |
| Volume | Row count, time range |
| Format | Structured (SQL), semi-structured (JSON/XML), unstructured (docs/images) |
| Sensitivity | PII, CIP-protected, confidential, public |

### 2. Assess Data Quality

For each key dataset, evaluate:

- **Completeness:** What % of records have the fields you need populated?
- **Accuracy:** Spot-check against ground truth. Ask the domain experts "do you trust this data?"
- **Consistency:** Do the same entities match across systems? (e.g., does the asset in GIS match the asset in Maximo?)
- **Timeliness:** How stale is the data? When was it last updated?
- **Uniqueness:** Are there duplicates? Is there a reliable primary key?

### 3. Map Data to Use Case

For each AI opportunity you're considering:

```
Use Case: [name]
Required data:
  - [dataset] from [system] → quality: [good/fair/poor] → gap: [description]
  - [dataset] from [system] → quality: [good/fair/poor] → gap: [description]
Blocking gaps: [data that doesn't exist or can't be accessed]
Mitigations: [how to work around gaps]
```

### 4. Document Findings

Be honest. If the data isn't there, say so. Don't propose an ML model on data that doesn't exist yet.

## Red Flags

- "We have all the data you need" → they haven't looked. Verify.
- No data dictionary → nobody truly owns the data.
- Data only exists in someone's Excel file → fragile, probably incomplete.
- Can't get access in the first 2 weeks → political blocker, not technical.
- "Our data quality is fine" → it's not. Find the specific issues.

## Output

Data audit summary document with:
- Inventory of available data sources
- Quality assessment per dataset
- Gap analysis per use case
- Recommended data remediation (if needed)
- Access request status tracker
