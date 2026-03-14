# T&D Utilities — Core Business Processes

## 1. Outage Management

**Purpose:** Detect, locate, and restore power outages as quickly and safely as possible.

**Trigger:** Customer calls, AMI (smart meter) last-gasp signals, SCADA alarms, or field crew reports.

**Roles Involved:**
- Distribution Dispatcher → coordinates crews and switching operations
- Trouble Crew / Line Worker → performs field restoration
- OMS Operator → manages outage tickets and ETRs
- Storm Manager → leads major event response (MEDs)
- Customer Service Rep → communicates ETRs to customers

**Steps:**
1. **Detection:** OMS receives outage signals (AMI, SCADA, customer calls). System nests individual outages to suspected device level.
2. **Assessment:** Dispatcher reviews outage map, assesses scope. For major events, activates storm plan and mutual aid.
3. **Crew Dispatch:** Assign crews by priority (critical facilities, largest outage, safety hazards). Route optimization is mostly manual.
4. **Switching:** Dispatcher issues switching orders to isolate faulted sections and restore via alternate feeds. Requires safety protocols (clearance tags).
5. **Repair:** Crew arrives, identifies damage, performs repair (splice wire, replace pole, replace transformer, clear vegetation).
6. **Restoration:** Crew restores power, confirms via AMI or customer callback. OMS ticket closed.
7. **Reporting:** Post-event analysis — cause codes, duration, customers affected. Feeds SAIDI/SAIFI calculations.

**Systems Used:** OMS (Oracle NMS, ABB, Schneider ADMS), SCADA/EMS, AMI head-end (Itron, Landis+Gyr), GIS (Esri), Mobile workforce management (ClickSoftware, Oracle FS)

**Key Metrics:** SAIDI, SAIFI, CAIDI, ETR accuracy, crew utilization, customers restored per hour

**Common Pain Points:**
- Outage nesting is often wrong — crews are dispatched to the wrong location
- ETR predictions are educated guesses, eroding customer trust
- Crew routing during storms is ad hoc
- Post-event cause coding is inconsistent and delayed

**AI Opportunity:**
- Predictive outage nesting using AMI, weather, and asset data
- ML-based ETR prediction
- Crew routing optimization during major events
- Automated cause coding from crew notes and photos

---

## 2. Vegetation Management

**Purpose:** Prevent tree-related outages and safety hazards by managing vegetation near power lines.

**Trigger:** Scheduled trim cycle (typically 4-5 year rotation), reliability events, or risk-based prioritization.

**Roles Involved:**
- Vegetation Management Director → strategy, budget, regulatory compliance
- VM Planner → identifies work, creates work orders
- VM Inspector → field assessment of vegetation conditions
- Tree Crew (contractor) → performs trimming and removals
- Arborist → handles complex or sensitive tree situations
- Environmental Compliance → endangered species, wetlands, permits

**Steps:**
1. **Planning:** Identify circuits/spans due for work based on cycle or risk model. Cross-reference with reliability data, species growth rates, and previous work.
2. **Pre-Inspection:** Inspector walks or drives the circuit. Documents trees requiring work with species, size, proximity, recommended action. Increasingly using LiDAR/drone data.
3. **Work Order Creation:** Compile inspection data into work orders for contractor crews. Specify scope (trim, remove, side-trim, overhang).
4. **Notification:** Customer/landowner notification per regulatory requirements. Handle refusals and right-of-way disputes.
5. **Execution:** Contractor crews perform the work. Production tracked by span, circuit, or mile.
6. **Post-Inspection / QA:** Verify work meets standards. Sample-based audits common.
7. **Reporting:** Track spend, miles completed, reliability impact. Report to PUC per requirements.

**Systems Used:** VM-specific platforms (Clearion, Arborcross, PlanIT Geo, ECI Vegetation), GIS, work management, LiDAR processing (varies)

**Key Metrics:** Miles trimmed per year, cost per mile, tree-caused outages (TCLOF), SAIDI-veg, cycle completion %, spend vs. budget

**Common Pain Points:**
- Cycle-based trimming treats all circuits equally regardless of risk
- Pre-inspection is time-consuming and subjective
- LiDAR data is collected but underutilized — too much data for manual review
- Contractor performance tracking is fragmented
- Correlating VM spend to reliability improvement is difficult

**AI Opportunity:**
- Risk-based prioritization using LiDAR, satellite imagery, species data, and outage history
- Automated LiDAR analysis for vegetation encroachment detection
- Predictive growth modeling to optimize trim timing
- Computer vision for post-work QA from drone imagery

---

## 3. Asset Management & Inspection

**Purpose:** Maintain grid assets (poles, transformers, conductors, switches, etc.) to maximize reliability and lifespan while optimizing capital investment.

**Trigger:** Scheduled inspection cycles, failure events, age-based replacement programs, regulatory mandates.

**Roles Involved:**
- Asset Manager → strategy, lifecycle planning, capital budgeting
- Distribution Engineer → designs replacements and upgrades
- Inspector → field condition assessment
- Field Crew → performs maintenance and replacement
- GIS Analyst → maintains asset spatial data
- Capital Planning Manager → prioritizes investment portfolio

**Steps:**
1. **Inventory Management:** Maintain accurate records of all assets — type, age, location, condition, configuration. (This is harder than it sounds — legacy data is a mess.)
2. **Inspection:** Scheduled and ad-hoc field inspections. Increasingly supplemented by drones, helicopters, and sensor data. Assess condition on a grading scale.
3. **Condition Assessment:** Aggregate inspection data, failure history, age, loading, and environment to determine asset health. Many utilities are moving toward health index models.
4. **Risk Scoring:** Combine probability of failure (condition) with consequence of failure (load served, critical customers, safety) to prioritize action.
5. **Work Planning:** Generate maintenance or replacement work orders. Feed into capital budget process.
6. **Execution:** Crews perform maintenance, replacement, or upgrade.
7. **Data Update:** As-built data captured and updated in GIS/asset management systems. (This step is often delayed or incomplete.)

**Systems Used:** EAM/CMMS (IBM Maximo, SAP PM, Oracle EAM), GIS (Esri), Inspection apps (various mobile), Analytics platforms, Drone/imagery management

**Key Metrics:** Asset health index, failure rate by asset class, replacement rate vs. aging rate, inspection completion %, capital efficiency ($/avoided failure)

**Common Pain Points:**
- Asset data quality is poor — missing install dates, wrong asset types, duplicate records
- Inspection data is captured inconsistently across inspectors
- Health index models exist but are simplistic (weighted scoring, not ML)
- Capital planning is political — risk scores compete with system planning needs and regulatory commitments
- As-built data capture is a persistent gap

**AI Opportunity:**
- Computer vision for automated defect detection from drone/inspection imagery
- ML-based health index and failure prediction models
- NLP for extracting structured data from historical inspection notes
- Optimized replacement prioritization using risk, cost, and constraint data

---

## 4. Distribution Planning & Engineering

**Purpose:** Plan and design grid infrastructure to serve current and future load while maintaining reliability and power quality.

**Trigger:** New development (subdivisions, commercial), load growth forecasts, reliability issues, interconnection requests (solar, storage, EV).

**Roles Involved:**
- Distribution Planner → load forecasting, capacity analysis, system studies
- Distribution Engineer → designs solutions (new feeders, reconductoring, automation)
- Standards Engineer → maintains construction standards and material specs
- Land/ROW Agent → acquires rights-of-way and easements
- GIS Analyst → maintains circuit models

**Steps:**
1. **Load Forecasting:** Project future demand by feeder/substation using historical trends, economic development data, and DER adoption models.
2. **Capacity Analysis:** Compare forecasted load to existing infrastructure capacity. Identify thermal, voltage, and protection constraints.
3. **Alternatives Analysis:** Evaluate options — traditional (wire) solutions vs. non-wire alternatives (NWAs) like demand response, storage, DERs.
4. **Design:** Engineer the selected solution. Create construction drawings, material lists, cost estimates.
5. **Approval:** Get regulatory/internal approval. Major projects may require PUC filings.
6. **Construction:** Build or contract the work. Coordinate outages and switching.
7. **Energization:** Test, energize, and update system models.

**Systems Used:** Load forecasting tools (CYME, Synergi, custom), power flow analysis (CYME, Synergi, OpenDSS, ETAP), GIS, design tools (AutoCAD, MicroStation), project management, financial systems

**Key Metrics:** Load growth vs. forecast accuracy, projects on time/on budget, feeder utilization, hosting capacity (for DER), voltage compliance

**Common Pain Points:**
- Load forecasting models don't account well for DERs, EVs, and electrification
- Engineering design is manual and repetitive — same analysis patterns on different feeders
- Construction standards are in PDFs — not machine-readable
- Coordination between planning, engineering, and construction is loosely coupled
- Hosting capacity analysis is computationally expensive and done infrequently

**AI Opportunity:**
- ML-enhanced load forecasting incorporating non-traditional variables (EV registrations, building permits, weather)
- Automated screening of DER interconnection applications
- LLM-assisted engineering design (query standards, generate preliminary designs)
- Accelerated hosting capacity analysis

---

## 5. Work Management & Field Operations

**Purpose:** Schedule, dispatch, and track all field work — maintenance, construction, inspections, emergency response.

**Trigger:** Work orders from asset management, planning, outage management, or customer requests.

**Roles Involved:**
- Work Planner/Scheduler → sequences and schedules work orders
- Dispatcher → assigns crews to daily work
- Field Supervisor → manages crews in the field
- Line Worker / Crew → performs the work
- Materials/Logistics → ensures materials are available
- Safety Coordinator → enforces safety protocols

**Steps:**
1. **Work Order Creation:** Generated from various sources (asset mgmt, planning, customer request, emergency).
2. **Planning:** Estimate resources, materials, equipment, and outage requirements. Sequence dependencies.
3. **Scheduling:** Assign to a time window. Balance crew availability, material readiness, outage windows, and priority.
4. **Dispatch:** Daily crew assignments. Morning briefings include job packets with maps, procedures, switching orders.
5. **Execution:** Crew travels to site, performs work, documents completion.
6. **Closeout:** Update work order status, record actuals (time, materials), capture as-built data.
7. **Analysis:** Compare planned vs. actual. Track productivity, backlog, and crew utilization.

**Systems Used:** WMS/ERP (SAP, Oracle, IBM Maximo), Mobile workforce (ClickSoftware, Oracle Field Service), GIS, Fleet management, Material management

**Key Metrics:** Backlog (weeks of work), schedule compliance, crew utilization, cost per work order, travel time ratio, units completed per day

**Common Pain Points:**
- Scheduling is a complex constraint optimization problem done manually
- Crew utilization varies widely — travel time, material delays, weather
- Work order data quality is inconsistent — closeout is often delayed
- Coordinating multi-craft work and outage windows is error-prone
- Reactive work (emergencies) constantly disrupts planned work schedules

**AI Opportunity:**
- Intelligent scheduling optimization (constraint satisfaction + ML)
- Predictive material demand
- NLP for work order categorization and triage
- Crew route optimization
- Automated work order closeout from field data capture

---

## 6. Regulatory Compliance & Reporting

**Purpose:** Meet all federal (FERC/NERC) and state (PUC/PSC) regulatory requirements, including reliability reporting, rate cases, and compliance filings.

**Trigger:** Regulatory calendar (annual, quarterly filings), rate case proceedings, compliance audits, incidents.

**Roles Involved:**
- Regulatory Affairs Director → strategy, filings, commission relationships
- Compliance Manager → NERC CIP, reliability standards, internal audits
- Rates Analyst → cost-of-service studies, rate design
- Reliability Engineer → SAIDI/SAIFI tracking, exclusion analysis
- Data Analyst → pulls and validates data for filings

**Steps:**
1. **Data Collection:** Aggregate data from OMS, financial systems, asset databases, work management.
2. **Validation:** Clean, reconcile, and validate data. Identify and resolve discrepancies.
3. **Analysis:** Calculate metrics, prepare exhibits, write narrative sections.
4. **Review:** Internal review chain (engineering → legal → executive).
5. **Filing:** Submit to regulatory body per format and deadline requirements.
6. **Response:** Handle data requests, interrogatories, and hearing testimony.

**Systems Used:** PI Historian, financial/ERP systems, OMS, custom reporting tools, document management

**Key Metrics:** Filing accuracy, filing timeliness, audit findings, rate case outcomes

**Common Pain Points:**
- Data aggregation from disparate systems is manual and error-prone
- Reliability exclusion analysis (major event days, IEEE 1366) is tedious
- Rate case preparation takes months and involves massive data compilation
- Regulatory data requests during proceedings are time-pressured
- Keeping up with evolving NERC CIP standards requires constant vigilance

**AI Opportunity:**
- Automated reliability metric calculation and exclusion analysis
- LLM-assisted regulatory filing drafting and data request response
- Anomaly detection in compliance data before filing
- Knowledge management for precedent research (past filings, orders, testimony)
