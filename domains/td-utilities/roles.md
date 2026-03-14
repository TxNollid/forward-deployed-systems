# T&D Utilities — Roles & Organizational Structure

## Typical Org Structure

Large IOUs are organized into a regulated utility operating company (sometimes multiple by state) under a holding company. T&D typically falls under an Operations or Grid Operations division, separate from generation, customer service, and corporate functions.

```
CEO
├── COO / SVP Operations
│   ├── VP Transmission
│   │   ├── Transmission Planning
│   │   ├── Transmission Operations
│   │   └── Substation Engineering
│   ├── VP Distribution
│   │   ├── Distribution Planning & Engineering
│   │   ├── Distribution Operations (regional)
│   │   ├── Vegetation Management
│   │   └── Metering / AMI
│   ├── VP Grid Modernization / Smart Grid
│   ├── VP Asset Management
│   └── VP Field Operations / Construction
├── CIO / VP IT
│   ├── OT Systems (SCADA, OMS, ADMS)
│   ├── IT Infrastructure
│   ├── Enterprise Applications (GIS, ERP)
│   └── Cybersecurity
├── VP Regulatory Affairs
├── CFO
│   └── Rates & Revenue Requirements
└── VP Safety
```

## Executive Level

### Chief Operating Officer (COO) / SVP Operations

**Level:** C-suite / SVP
**Reports to:** CEO
**Oversees:** All T&D operations, field operations, grid modernization
**Responsibilities:**
- Overall grid reliability and performance
- Capital and O&M budget for T&D
- Safety performance
- Storm response leadership
- Regulatory compliance for operations

**KPIs they own:** SAIDI, SAIFI, safety incident rate, capital execution rate, O&M per customer
**Systems they use:** Executive dashboards, occasional OMS during storms
**FDE relevance:** Executive sponsor for large engagements. Cares about outcomes, not technology. Speak in reliability, safety, and cost metrics.

### Chief Information Officer (CIO)

**Level:** C-suite / VP
**Reports to:** CEO
**Oversees:** IT, OT systems, cybersecurity, digital transformation
**Responsibilities:**
- Technology strategy and roadmap
- IT/OT convergence
- Cybersecurity (NERC CIP compliance)
- Enterprise architecture

**KPIs they own:** System uptime, cybersecurity posture, project delivery, IT spend efficiency
**Systems they use:** All (portfolio-level view)
**FDE relevance:** Gate for any technology deployment. Must approve architecture, security, and data access. Often the most skeptical of AI — has seen "transformative" tech come and go.

---

## VP / Director Level

### VP Distribution Operations

**Level:** VP
**Reports to:** COO
**Oversees:** Regional distribution operations, dispatch, outage management
**Responsibilities:**
- Day-to-day grid operations and reliability
- Outage response coordination
- Crew management and productivity
- Regional performance targets

**KPIs they own:** SAIDI/SAIFI by region, crew utilization, ETR accuracy, safety
**Systems they use:** OMS, SCADA/ADMS, workforce management
**FDE relevance:** Key decision-maker for operations-focused AI. Pragmatic — wants to see it work on a circuit before scaling. Your most likely champion if you can save crews time.

### Director of Vegetation Management

**Level:** Director
**Reports to:** VP Distribution or VP Asset Management
**Oversees:** VM planning, inspection, contractor management, environmental compliance
**Responsibilities:**
- Vegetation management program strategy and execution
- $50M-$500M annual VM budget management
- Contractor performance management
- Regulatory compliance (trim cycle, reporting)
- Tree-caused outage reduction

**KPIs they own:** Tree-caused outages, miles trimmed, cost per mile, cycle completion, budget variance
**Systems they use:** VM platforms (Clearion, Arborcross), GIS, analytics
**FDE relevance:** High-value target for AI. Massive budgets with clear optimization potential. These directors are often early adopters — they know their data is underutilized.

### Director of Asset Management

**Level:** Director
**Reports to:** VP Asset Management or COO
**Oversees:** Asset strategy, condition assessment, capital planning
**Responsibilities:**
- Asset health monitoring and lifecycle strategy
- Capital investment prioritization
- Inspection programs
- Risk-based decision-making frameworks

**KPIs they own:** Asset failure rates, health index coverage, capital efficiency, inspection completion
**Systems they use:** EAM (Maximo, SAP), GIS, analytics platforms, inspection tools
**FDE relevance:** Strategic thinker who wants data-driven decisions. Will champion AI for predictive maintenance and capital prioritization. Potential blocker if AI threatens their existing health index models.

### Director of Distribution Planning

**Level:** Director
**Reports to:** VP Distribution or VP Engineering
**Oversees:** Load forecasting, system studies, capacity planning, DER interconnection
**Responsibilities:**
- Grid capacity planning and forecasting
- DER/interconnection program management
- Engineering standards
- Grid modernization technical strategy

**KPIs they own:** Forecast accuracy, hosting capacity, interconnection processing time, project delivery
**Systems they use:** CYME, Synergi, OpenDSS, GIS, load data systems
**FDE relevance:** Highly technical. Will push back hard on AI that doesn't respect power systems physics. Win them over with accurate technical demos, not slides.

---

## Manager / Supervisor Level

### Distribution Operations Manager (Regional)

**Level:** Manager
**Reports to:** VP Distribution Operations
**Oversees:** 50-200 field workers in a geographic region
**Responsibilities:**
- Daily crew dispatch and work execution
- Local reliability performance
- Customer complaint resolution
- First-level storm response

**KPIs they own:** Regional SAIDI/SAIFI, crew productivity, schedule adherence, safety
**Systems they use:** WMS, mobile workforce, OMS
**FDE relevance:** The person who knows how work actually gets done (vs. how it's supposed to). Essential for understanding ground truth. Will tell you what doesn't work — listen to them.

### Reliability Engineer

**Level:** Individual contributor / Senior
**Reports to:** Director of Distribution or VP Operations
**Responsibilities:**
- SAIDI/SAIFI tracking and analysis
- Worst-performing circuit programs
- Major event day analysis (IEEE 1366)
- Root cause analysis for outages
- Regulatory reliability reporting

**KPIs they own:** They calculate the KPIs others own
**Systems they use:** OMS, PI Historian, Excel/BI tools, custom databases
**FDE relevance:** Your data ally. They know where the reliability data lives, what it means, and where it's wrong. Build your relationship here early — they'll be your sanity check for any analytics work.

### GIS Analyst / Manager

**Level:** IC / Manager
**Reports to:** IT or Engineering
**Responsibilities:**
- Maintaining the electric network model in GIS
- Connectivity model accuracy
- Supporting operations, planning, and engineering with spatial data
- Data governance for asset spatial records

**KPIs they own:** GIS data accuracy, model currency, support ticket resolution
**Systems they use:** Esri ArcGIS (nearly universal), sometimes Smallworld
**FDE relevance:** GIS is the foundation for almost everything — outage management, planning, asset management, vegetation management. The GIS team knows where data quality problems live. They're also often overworked and understaffed — AI that reduces their burden will get enthusiastic support.

---

## Field Level

### Line Worker / Journeyman Lineman

**Level:** Individual contributor (skilled trade)
**Reports to:** Field Supervisor
**Responsibilities:**
- Construct, maintain, and repair distribution and transmission lines
- Perform switching operations in the field
- Storm restoration
- Equipment testing and inspection

**FDE relevance:** End users of mobile tools and workflows. Their adoption determines whether your AI solution succeeds. They're skeptical of technology that adds steps. Make their day easier, not harder. Respect the craft — these folks work on energized lines in storms.

### Field Inspector

**Level:** Individual contributor
**Reports to:** Various (asset management, vegetation, compliance)
**Responsibilities:**
- Perform scheduled inspections on infrastructure
- Document conditions via forms, photos, notes
- Identify defects and recommend maintenance

**FDE relevance:** Primary source of condition data. The quality and consistency of their input directly impacts any AI model you build. Understand their workflow — many still use paper forms or clunky mobile apps.
