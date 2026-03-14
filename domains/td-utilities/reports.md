# T&D Utilities — Standard Reports & Dashboards

## Reliability Performance Report

**Purpose:** Track grid reliability performance against targets and regulatory benchmarks.
**Audience:** VP Operations, COO, Board, Regulators (PUC filings)
**Cadence:** Monthly internal, quarterly/annual for regulatory
**Key metrics included:** SAIDI, SAIFI, CAIDI, MAIFI — broken down by region, cause code, circuit. Year-to-date vs. target vs. prior year. Major Event Day exclusions per IEEE 1366.
**Source systems:** OMS, PI Historian
**Format:** Dashboard (Power BI/Tableau) + PDF for regulatory filing
**Pain points:** Cause code accuracy is low (crews code inconsistently). MED exclusion calculations are manual and contentious. Reconciling OMS data with AMI restoration data reveals discrepancies.
**AI opportunity:** Automated cause code validation using crew notes and photos. Automated MED calculations with anomaly flagging. Natural language narrative generation for regulatory filings.

---

## Worst Performing Circuits Report

**Purpose:** Identify the circuits with the worst reliability and prioritize remediation.
**Audience:** VP Distribution, Distribution Engineers, Regulators
**Cadence:** Monthly or quarterly
**Key metrics included:** SAIDI/SAIFI contribution by circuit, outage frequency, repeat causes, customer count, critical customers affected. Top 10/20/50 worst performers ranked.
**Source systems:** OMS, GIS
**Format:** Dashboard + ranked table
**Pain points:** Root cause analysis is manual. Same circuits often reappear because fixes address symptoms, not causes. Correlating with vegetation, asset age, and loading data requires cross-system joins.
**AI opportunity:** Automated root cause clustering. Predictive identification of circuits likely to enter worst-performer list. Recommended remediation actions based on cause patterns.

---

## Storm/Major Event After-Action Report

**Purpose:** Document storm response, assess performance, and capture lessons learned.
**Audience:** COO, VP Operations, Regulators, Emergency Management
**Cadence:** After each major event
**Key metrics included:** Peak outages, total customer-hours interrupted, restoration timeline, mutual aid crews deployed, cost, ETR accuracy, safety incidents. Comparison to similar past events.
**Source systems:** OMS, WMS, financial system, weather data
**Format:** Written report (30-100 pages for major storms) + executive summary
**Pain points:** Compiling this report takes weeks. Data from mutual aid crews is incomplete. Accurate cost tracking during emergency operations is challenging.
**AI opportunity:** Automated data compilation and narrative generation. Real-time storm dashboards that feed the after-action report. Predictive damage assessment for pre-positioning resources.

---

## Vegetation Management Performance Report

**Purpose:** Track VM program execution, spend, and effectiveness.
**Audience:** Director of VM, VP Operations, Regulators
**Cadence:** Monthly
**Key metrics included:** Miles completed vs. planned, cost per mile by region/contractor, tree-caused outages (TCLOF) trend, cycle completion %, budget variance, contractor scorecards.
**Source systems:** VM platform, OMS, financial system
**Format:** Dashboard + monthly summary
**Pain points:** Correlating VM work to reliability improvement has a time lag. Contractor-reported production data may not match utility records. Cost per mile varies so much by terrain/vegetation that benchmarking is difficult.
**AI opportunity:** Predictive VM effectiveness modeling. Risk-adjusted cost benchmarking. Automated contractor performance scoring.

---

## Asset Condition / Health Report

**Purpose:** Summarize asset health across the system and prioritize investment.
**Audience:** Director of Asset Management, VP Engineering, Capital Planning Committee
**Cadence:** Quarterly or annual
**Key metrics included:** Health index distribution by asset class (% in each condition band), failure rates vs. prior years, inspection completion rates, replacement rates vs. aging curves, capital forecast.
**Source systems:** EAM, GIS, inspection databases
**Format:** Dashboard + written report for capital planning cycle
**Pain points:** Health index coverage is incomplete — not all assets have been assessed. Condition data entry by inspectors varies in quality. Translating health scores into capital dollars requires assumptions about failure probability and consequence.
**AI opportunity:** ML-based health scoring from inspection imagery. Automated gap identification in inspection coverage. Optimized capital allocation modeling.

---

## Capital Project Status Report

**Purpose:** Track execution of capital investment portfolio.
**Audience:** VP Engineering, CFO, COO, Board
**Cadence:** Monthly
**Key metrics included:** Projects by phase (design, permitting, construction, closeout), budget vs. actual spend, schedule adherence, resource utilization, forecasted year-end spend.
**Source systems:** Project management (Primavera, MS Project), financial system, EAM
**Format:** Dashboard + executive summary
**Pain points:** Forecasting year-end spend is notoriously inaccurate. Projects slip from one year to the next, creating budget variance. Tracking hundreds of small distribution projects is harder than tracking a few large transmission projects.
**AI opportunity:** Predictive project completion forecasting. Automated schedule risk identification. Resource optimization across project portfolio.

---

## Regulatory Compliance Dashboard

**Purpose:** Track compliance with NERC reliability standards and state PUC requirements.
**Audience:** Compliance Manager, VP Regulatory, Executive team
**Cadence:** Continuous monitoring, monthly summary
**Key metrics included:** NERC standard compliance status, upcoming audit dates, open findings/violations, self-reports, mitigation plan progress, NERC CIP cybersecurity compliance.
**Source systems:** Compliance tracking tool, IT security tools, operational databases
**Format:** Dashboard + compliance matrix
**Pain points:** NERC has 100+ standards — tracking evidence of compliance is a full-time job. CIP compliance requires documenting every change to cyber assets. Standards evolve and interpretations vary by region.
**AI opportunity:** Automated evidence collection and compliance monitoring. NLP for analyzing new/revised standards and mapping to internal controls. Anomaly detection for potential violations.

---

## Distribution Planning Load Forecast Report

**Purpose:** Project future load growth by substation and feeder for infrastructure planning.
**Audience:** Director of Planning, VP Engineering
**Cadence:** Annual (with mid-year updates)
**Key metrics included:** Peak demand forecast by substation/feeder (5-year and 10-year), DER adoption projections, EV load impact, large customer additions, comparison to actuals (forecast accuracy).
**Source systems:** Load data (AMI, SCADA), planning tools (CYME, LoadSEER), economic data
**Format:** Spreadsheet/database + summary report
**Pain points:** Traditional forecast methods miss DER, EV, and electrification impacts. Spatial granularity is limited. Building permits and economic development data is hard to incorporate systematically.
**AI opportunity:** ML-enhanced spatial load forecasting incorporating non-traditional data sources. Scenario modeling for electrification adoption rates. Automated identification of at-risk substations/feeders.

---

## Safety Performance Report

**Purpose:** Track employee and contractor safety metrics.
**Audience:** VP Safety, COO, Board
**Cadence:** Monthly
**Key metrics included:** OSHA recordable incident rate, DART (Days Away, Restricted, Transferred) rate, near-miss reports, vehicle incidents, public safety incidents, safety observation counts.
**Source systems:** Safety management system, HR
**Format:** Dashboard + monthly briefing
**Pain points:** Lagging indicators (incidents) get tracked well; leading indicators (near-misses, observations) are underreported. Root cause analysis of incidents is often superficial.
**AI opportunity:** NLP analysis of near-miss and incident reports for pattern detection. Predictive safety risk scoring for work orders (weather + task type + crew experience). Computer vision for safety compliance in field photos.
