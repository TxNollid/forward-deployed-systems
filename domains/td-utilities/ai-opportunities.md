# T&D Utilities — AI Opportunities

Ordered by impact and feasibility. Each links back to processes, KPIs, and systems.

---

## 1. Vegetation Risk-Based Prioritization

**Process affected:** Vegetation Management
**Problem today:** Utilities spend $6-10B/year on cycle-based trimming that treats all circuits equally regardless of risk. Some high-risk spans are undertrimmed; low-risk spans are overtrimmed.
**AI approach:** ML model combining LiDAR-derived vegetation proximity, species growth rates, outage history, circuit criticality, and weather exposure to produce a risk score per span.
**Input data:** LiDAR point clouds, GIS (circuit/span data), OMS (tree-caused outages), species databases, weather/wind data, satellite imagery
**Output:** Risk-ranked span list with recommended trim timing, feeding into VM work planning
**KPI impact:** TCLOF reduction 15-30%, cost per mile optimization 10-20%, SAIDI-veg improvement
**Complexity:** Medium-High (LiDAR processing is the bottleneck)
**Time to value:** 3-6 months for initial model, 1 year for full program integration
**Prerequisites:** LiDAR data collected, GIS span data reasonably accurate, outage cause codes somewhat reliable
**Risks:** LiDAR refresh cycle means data can be 1-4 years old. Species identification from LiDAR is imprecise. Requires buy-in from VM director and contractor workforce.

---

## 2. Predictive ETR (Estimated Time of Restoration)

**Process affected:** Outage Management
**Problem today:** ETRs are educated guesses by dispatchers under pressure. Average accuracy is 50-75%. Wrong ETRs erode customer trust and drive complaint volume.
**AI approach:** ML model trained on historical outage data — weather conditions, time of day, asset type, crew availability, damage extent, geographic factors — to predict restoration time.
**Input data:** OMS (historical outages with durations and cause codes), weather data, AMI (outage/restoration signals), WMS (crew availability), GIS (asset data)
**Output:** Predicted restoration time with confidence interval, updated dynamically as conditions change
**KPI impact:** ETR accuracy improvement to 80-90%, JD Power score improvement, call center volume reduction
**Complexity:** Medium
**Time to value:** 2-4 months for initial model
**Prerequisites:** 3+ years of OMS data with reasonable quality, weather data, AMI deployment (helps but not required)
**Risks:** Data quality in historical outage records. Model performance during unprecedented events (major storms are when ETRs matter most but are hardest to predict).

---

## 3. Automated Inspection Image Analysis

**Process affected:** Asset Management & Inspection
**Problem today:** Drone and helicopter inspections generate thousands of images per day. Manual review is slow, inconsistent, and expensive. Many defects are missed.
**AI approach:** Computer vision models trained to detect specific defect types: broken crossarms, cracked insulators, woodpecker damage, corrosion, missing hardware, vegetation encroachment.
**Input data:** Drone/helicopter imagery, asset type labels, historical inspection findings for training data
**Output:** Defect detections with confidence scores, severity ratings, and asset identification. Flagged images for human review.
**KPI impact:** Inspection throughput 5-10x improvement, defect detection rate increase, asset failure rate reduction
**Complexity:** Medium (model training requires labeled data; deployment is straightforward)
**Time to value:** 3-6 months (with sufficient labeled images)
**Prerequisites:** Active drone/aerial inspection program, image storage infrastructure, labeled training data (or willingness to label)
**Risks:** Model generalization across different hardware types, lighting conditions, and geographies. False positives create review fatigue. Integration with EAM for work order generation.

---

## 4. Intelligent Work Scheduling

**Process affected:** Work Management & Field Operations
**Problem today:** Scheduling hundreds of daily work orders across dozens of crews is a complex constraint satisfaction problem done manually with Excel and whiteboards. Crew utilization is 40-60%.
**AI approach:** Constraint optimization + ML for scheduling. Considers crew skills/certifications, equipment, materials availability, outage windows, travel time, priority, weather, and coordination dependencies.
**Input data:** WMS (work orders, crew rosters, skills), GIS (locations), material system (availability), weather forecasts, historical execution data
**Output:** Optimized daily/weekly crew schedules with route plans
**KPI impact:** Crew utilization improvement 5-15%, schedule compliance improvement 10-20%, reduced travel time
**Complexity:** High (constraint space is large; change management is significant)
**Time to value:** 6-12 months for meaningful adoption
**Prerequisites:** Digital work orders (not paper), crew roster data, GPS/location data, willingness to change scheduling workflows
**Risks:** Schedulers have deep institutional knowledge that's hard to encode. Union considerations around work assignment. Resistance to "the computer telling me what to do."

---

## 5. ML-Enhanced Load Forecasting

**Process affected:** Distribution Planning & Engineering
**Problem today:** Traditional regression-based load forecasting misses the impact of DERs, EVs, heat pumps, and electrification. Forecast errors lead to over- or under-investment.
**AI approach:** ML models incorporating non-traditional variables: EV registrations, building permits, rooftop solar installations, economic indicators, demographic shifts, climate projections.
**Input data:** AMI (historical load), SCADA (substation loading), census/economic data, EV/solar adoption data, weather, building permits
**Output:** Feeder and substation peak load forecasts (5-10 year) with uncertainty bands
**KPI impact:** Forecast accuracy improvement, capital efficiency, avoided stranded assets or overloads
**Complexity:** Medium
**Time to value:** 3-6 months
**Prerequisites:** AMI or SCADA load data, access to external data sources (EV registrations, permits)
**Risks:** Electrification is unprecedented — historical patterns may not hold. Spatial granularity requires good GIS data. Planners may not trust ML over their engineering judgment.

---

## 6. Automated Reliability Reporting

**Process affected:** Regulatory Compliance & Reporting
**Problem today:** Monthly and annual reliability reports require aggregating data from OMS, applying IEEE 1366 MED exclusions, reconciling discrepancies, and writing narratives. Takes days of analyst time.
**AI approach:** Automated pipeline for data extraction, calculation, validation, and narrative generation. LLM for writing the narrative sections. Anomaly detection for data quality issues.
**Input data:** OMS, AMI, weather data, IEEE 1366 parameters
**Output:** Draft reliability report with metrics, charts, MED analysis, and narrative — ready for human review
**KPI impact:** Analyst time reduced 60-80%, filing accuracy improvement, faster turnaround
**Complexity:** Low-Medium
**Time to value:** 1-3 months
**Prerequisites:** Programmatic access to OMS data, defined report templates
**Risks:** Low risk — this is a clear automation win. Main concern is regulatory acceptance of AI-assisted filings (keep human review in the loop).

---

## 7. NLP for Work Order Triage & Extraction

**Process affected:** Work Management, Asset Management
**Problem today:** Work orders contain free-text descriptions with valuable information locked in unstructured language. Categorization is inconsistent. Historical inspection notes are untapped.
**AI approach:** NLP/LLM for extracting structured data from work order descriptions, inspection notes, and crew comments. Auto-categorization, severity assessment, and routing.
**Input data:** Work order text fields, inspection notes, crew completion comments
**Output:** Structured fields (equipment type, failure mode, severity, root cause), auto-categorization, suggested routing
**KPI impact:** Data quality improvement, faster triage, better root cause analysis, enables downstream analytics
**Complexity:** Low-Medium
**Time to value:** 1-3 months
**Prerequisites:** Digital work orders with text fields, sufficient historical volume for patterns
**Risks:** Utility jargon and abbreviations require domain-specific fine-tuning. Crews use highly variable language.

---

## 8. Predictive Asset Failure

**Process affected:** Asset Management & Inspection
**Problem today:** Health index models are simplistic weighted scoring. Utilities are reactive — replacing assets after failure rather than before.
**AI approach:** ML survival models predicting probability of failure by asset, incorporating age, condition assessments, loading history, weather exposure, manufacturer, maintenance history, and similar-asset failure patterns.
**Input data:** EAM (asset attributes, maintenance history), OMS (failure events), GIS (location, environment), AMI (loading data), inspection records
**Output:** Failure probability by asset with time horizon, ranked replacement lists, optimized replacement timing
**KPI impact:** Failure rate reduction 10-25%, capital efficiency improvement, SAIDI/SAIFI reduction
**Complexity:** High (data integration from multiple systems, model validation against actual failures)
**Time to value:** 6-12 months
**Prerequisites:** Mature asset data in EAM, historical failure records, inspection data with condition scores
**Risks:** Asset data quality is the #1 blocker. Missing install dates, incomplete records. Small failure populations make ML challenging for some asset classes. Competing with existing health index programs.

---

## 9. Storm Damage Prediction & Resource Pre-Positioning

**Process affected:** Outage Management
**Problem today:** Storm preparation relies on experience and rough weather forecasts. Mutual aid requests are often too late or too early. Crew pre-positioning is gut-feel.
**AI approach:** ML model predicting outage volumes and locations using weather forecasts, vegetation data, asset vulnerability, historical storm performance, and terrain.
**Input data:** Weather model output (wind, ice, precipitation), GIS (infrastructure exposure), historical storm damage, vegetation data, asset condition
**Output:** Predicted outage counts by region/circuit, recommended crew pre-positioning, mutual aid request timing
**KPI impact:** Faster restoration (reduced CAIDI during storms), optimized mutual aid costs, improved customer communication
**Complexity:** Medium-High
**Time to value:** 6-12 months (need to validate across multiple storm events)
**Prerequisites:** Historical storm data, weather model access, GIS data
**Risks:** Storm events are high-stakes. Model errors during actual storms have real consequences. Limited training data for rare event types (ice storms, derechos).

---

## 10. LLM-Powered Engineering Assistant

**Process affected:** Distribution Planning & Engineering
**Problem today:** Engineers spend significant time looking up construction standards, material specs, and precedent designs. Standards are in PDFs. Institutional knowledge is in people's heads.
**AI approach:** RAG-based LLM system trained on construction standards, engineering guidelines, material catalogs, and historical designs. Engineers query it conversationally.
**Input data:** Construction standards documents, material specifications, engineering guidelines, historical project designs
**Output:** Answers to engineering questions with source citations, preliminary design suggestions, standards compliance checks
**KPI impact:** Engineering productivity improvement 15-30%, reduced errors from incorrect standard application, faster onboarding of new engineers
**Complexity:** Medium
**Time to value:** 2-4 months for initial deployment
**Prerequisites:** Digitized standards documents, engineering team willing to pilot
**Risks:** Engineers must verify answers — wrong standard application has safety implications. PDF extraction quality affects answer quality. Must clearly distinguish between "the standard says" and "the model suggests."
