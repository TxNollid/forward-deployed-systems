# T&D Utilities — Key Performance Indicators

## Reliability

### SAIDI — System Average Interruption Duration Index

**Definition:** Total duration of sustained interruptions per customer served per year (in minutes).
**Formula:** Σ(Customer interruption durations) / Total customers served
**Typical range:** 90-200 minutes (top quartile IOUs ~70-90 min, bottom quartile 200+ min)
**Who owns it:** VP Distribution Operations, ultimately the COO
**Measurement cadence:** Monthly tracking, annual reporting
**Data source:** OMS (outage duration × customers affected)
**Why it matters:** The primary reliability metric. Regulators set targets and may penalize/reward based on SAIDI. Directly tied to customer satisfaction and rate case outcomes.
**AI leverage:** Better outage prediction, faster restoration (ETR optimization, crew routing), predictive maintenance to prevent outages.

### SAIFI — System Average Interruption Frequency Index

**Definition:** Average number of sustained interruptions per customer per year.
**Formula:** Total customer interruptions / Total customers served
**Typical range:** 0.9-1.5 (top quartile ~0.8, bottom quartile 1.5+)
**Who owns it:** VP Distribution Operations
**Measurement cadence:** Monthly tracking, annual reporting
**Data source:** OMS
**Why it matters:** Frequency matters as much as duration. Customers notice every blink, even short ones. Drives investment in automation, reclosers, and sectionalizing.
**AI leverage:** Predictive asset failure models, risk-based vegetation management, automated fault location.

### CAIDI — Customer Average Interruption Duration Index

**Definition:** Average outage duration for those customers who experienced an outage.
**Formula:** SAIDI / SAIFI
**Typical range:** 90-180 minutes
**Who owns it:** Distribution Operations
**Measurement cadence:** Monthly
**Data source:** Derived from SAIDI and SAIFI
**Why it matters:** Measures restoration efficiency. If CAIDI is high, the utility is slow to restore — crew dispatch, fault location, or repair processes need improvement.
**AI leverage:** Crew dispatch optimization, fault prediction, ETR accuracy.

### MAIFI — Momentary Average Interruption Frequency Index

**Definition:** Average number of momentary interruptions (< 5 minutes) per customer per year.
**Formula:** Total customer momentary interruptions / Total customers served
**Typical range:** 4-10 (varies widely by geography and tree exposure)
**Who owns it:** Distribution Operations / Vegetation Management
**Measurement cadence:** Monthly
**Data source:** SCADA (recloser operations), AMI (voltage events)
**Why it matters:** Momentary interruptions cause electronics resets, manufacturing disruptions, and customer complaints even though power is quickly restored.
**AI leverage:** Vegetation risk modeling, predictive recloser maintenance, animal contact prevention.

---

## Vegetation Management

### Tree-Caused Line Outages (TCLOF)

**Definition:** Number of outages caused by vegetation contact with power lines.
**Formula:** Count of outages with vegetation cause codes
**Typical range:** 20-40% of all distribution outages
**Who owns it:** Director of Vegetation Management
**Measurement cadence:** Monthly
**Data source:** OMS (cause codes)
**Why it matters:** Largest single cause category for distribution outages. Directly tied to VM program effectiveness.
**AI leverage:** Risk-based trim prioritization, LiDAR analysis, predictive growth modeling.

### Cost Per Mile (Vegetation)

**Definition:** Total VM spend divided by miles of line maintained.
**Formula:** Total VM expenditure / Miles trimmed
**Typical range:** $3,000-$15,000/mile (varies dramatically by terrain, vegetation density, access)
**Who owns it:** Director of Vegetation Management
**Measurement cadence:** Monthly
**Data source:** VM platform, financial system
**Why it matters:** Key efficiency metric. PUCs scrutinize VM spend in rate cases.
**AI leverage:** Optimization of crew routing, work scope precision, contractor performance benchmarking.

### Cycle Completion Rate

**Definition:** Percentage of planned vegetation management miles completed within the scheduled trim cycle.
**Formula:** Miles completed / Miles planned for cycle × 100
**Typical range:** 85-100% (below 90% raises regulatory flags)
**Who owns it:** Director of Vegetation Management
**Measurement cadence:** Quarterly
**Data source:** VM platform
**Why it matters:** Regulators often mandate cycle completion. Falling behind creates compounding reliability risk.
**AI leverage:** Better planning and forecasting, work prioritization when resources are constrained.

---

## Asset Performance

### Asset Failure Rate

**Definition:** Number of failures per unit of asset population per year, by asset class.
**Formula:** Failures in period / Total asset count for that class
**Typical range:** Varies by asset type (transformers ~0.5-2% annually, poles ~0.1-0.5%)
**Who owns it:** Director of Asset Management
**Measurement cadence:** Annual
**Data source:** OMS (failure events), EAM (asset population)
**Why it matters:** Drives replacement investment decisions. Rising failure rates signal aging infrastructure.
**AI leverage:** Predictive failure models using age, condition, loading, weather, and failure history.

### Asset Health Index

**Definition:** Composite score representing an asset's current condition and remaining useful life, typically on a 1-5 or 0-100 scale.
**Formula:** Weighted combination of age, condition, loading, failure history, environment, maintenance history
**Typical range:** Utility-specific scales
**Who owns it:** Asset Management
**Measurement cadence:** Updated after inspections or annually
**Data source:** EAM, GIS, inspection data
**Why it matters:** Foundation for risk-based capital planning. Utilities with mature health indices make better investment decisions.
**AI leverage:** ML-based health indices using inspection images, sensor data, and maintenance records outperform simple weighted scoring.

---

## Operational Efficiency

### Crew Utilization

**Definition:** Percentage of crew time spent on productive work (wrench time) vs. travel, waiting, admin.
**Formula:** Direct work hours / Total available hours × 100
**Typical range:** 40-60% (best-in-class ~65%)
**Who owns it:** VP Field Operations, Regional Managers
**Measurement cadence:** Weekly/monthly
**Data source:** WMS, time tracking, GPS
**Why it matters:** Crew labor is the largest single O&M cost. A 5% improvement in utilization at a large utility saves millions annually.
**AI leverage:** Schedule optimization, route optimization, predictive material staging.

### Schedule Compliance

**Definition:** Percentage of planned work completed as scheduled.
**Formula:** Work orders completed on schedule / Total planned work orders × 100
**Typical range:** 60-80%
**Who owns it:** Work Planning/Scheduling Manager
**Measurement cadence:** Weekly
**Data source:** WMS
**Why it matters:** Low schedule compliance means reactive work is dominating, planned maintenance is deferred, and backlogs grow.
**AI leverage:** Better forecasting of emergency work volumes, smarter scheduling with buffers.

### O&M Cost Per Customer

**Definition:** Total operations and maintenance spend divided by customers served.
**Formula:** Total O&M / Customer count
**Typical range:** $300-$600/customer (varies by density, geography, infrastructure age)
**Who owns it:** CFO / COO
**Measurement cadence:** Annual (tracked monthly)
**Data source:** Financial system
**Why it matters:** Benchmark metric used by regulators and investors. Drives efficiency mandates.
**AI leverage:** Nearly all AI applications in T&D ultimately ladder up to O&M efficiency.

---

## Customer & Regulatory

### ETR Accuracy

**Definition:** Percentage of Estimated Time of Restoration predictions that are accurate (customer power restored within the ETR window).
**Formula:** Outages restored within ETR / Total outages with ETRs × 100
**Typical range:** 50-75% (it's bad — this is a major pain point)
**Who owns it:** Distribution Operations, Customer Service
**Measurement cadence:** Per-event and monthly
**Data source:** OMS
**Why it matters:** Inaccurate ETRs destroy customer trust. JD Power scores are heavily influenced by communication during outages.
**AI leverage:** ML-based ETR prediction using weather, crew availability, damage assessment, and historical restoration times. One of the highest-impact, most visible AI use cases.

### JD Power Utility Customer Satisfaction

**Definition:** Industry benchmark for residential customer satisfaction, scored on a 1,000-point scale.
**Typical range:** 680-780
**Who owns it:** VP Customer Service (but T&D reliability is a major driver)
**Measurement cadence:** Annual survey
**Why it matters:** Regulators and boards track this. Directly influences rate case outcomes in some jurisdictions.
**AI leverage:** Indirectly — better reliability, faster restoration, and accurate ETRs all drive satisfaction.
