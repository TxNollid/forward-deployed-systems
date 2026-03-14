# KPI Dashboard Specification: {Dashboard Name}

**Client:** {client name}
**Author:** {FDE name}
**Date:** {date}

---

## Purpose

{What business question does this dashboard answer? Who will use it and how often?}

## Audience

| Role | How They'll Use It | Cadence |
|------|-------------------|---------|
| | | |

## Metrics

### {Metric Name}

- **Definition:** {precise definition — reference domains/{industry}/kpis.md}
- **Baseline:** {current value, measured on {date}}
- **Target:** {goal value by {date}}
- **Source system:** {where the raw data lives}
- **Calculation:** {formula or logic}
- **Visualization:** {chart type, axis labels, comparisons}
- **Drill-down:** {what dimensions can the user filter by?}

---

## Layout

{Describe or sketch the dashboard layout. Which metrics are prominent? What's the visual hierarchy?}

## Filters / Controls

| Filter | Options | Default |
|--------|---------|---------|
| Date range | | Last 30 days |
| Region | | All |
| | | |

## Data Refresh

- **Frequency:** {real-time, hourly, daily, weekly}
- **Source pipeline:** {ETL job, API call, manual upload}
- **Data latency:** {how old is the data when displayed}

## Access

- **Who can view:** {roles/groups}
- **Who can edit:** {roles/groups}
- **Platform:** {Power BI, Tableau, custom, etc.}
