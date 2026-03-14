# T&D Utilities — Systems & Technology

## The Stack at a Glance

T&D utilities run on a complex mix of IT and OT (Operational Technology) systems. OT systems are mission-critical, real-time, and often decades old. IT systems are enterprise-grade but rarely well-integrated with OT.

```
┌─────────────────────────────────────────────────┐
│  Enterprise Layer (IT)                          │
│  ERP · EAM · GIS · BI · Document Management    │
├─────────────────────────────────────────────────┤
│  Operational Layer (IT/OT boundary)             │
│  OMS · WMS · AMI Head-End · VM Platform         │
├─────────────────────────────────────────────────┤
│  Control Layer (OT)                             │
│  SCADA/EMS · ADMS · DMS · Substation Automation │
├─────────────────────────────────────────────────┤
│  Field Layer (OT)                               │
│  RTUs · Sensors · Smart Meters · Reclosers      │
└─────────────────────────────────────────────────┘
```

---

## SCADA / EMS / ADMS

### What it does
Supervisory Control and Data Acquisition. Real-time monitoring and control of the transmission and distribution grid. EMS (Energy Management System) for transmission; DMS/ADMS (Advanced Distribution Management System) for distribution.

### Key Vendors
- **GE (formerly Alstom):** e-terra / GridOS ADMS — strong in large IOUs
- **Schneider Electric:** ADMS (AO, DMS, OMS integrated) — growing market share
- **Oracle (formerly OSI):** Monarch — traditional EMS/SCADA
- **ABB (now Hitachi Energy):** Network Manager — global presence
- **Survalent:** Strong in munis and co-ops (lower cost)
- **Open Systems International (OSI):** EMS/SCADA, especially transmission

### Integration Notes
- SCADA uses legacy protocols: DNP3, IEC 61850, Modbus, ICCP
- Data historian (OSIsoft PI / AVEVA PI) typically sits alongside SCADA for time-series storage
- NERC CIP governs cybersecurity — strict access controls, change management, and network segmentation
- Real-time data is available but requires careful security review to expose to analytics

**FDE Notes:** You will not get direct SCADA access. Work through the PI Historian or request data exports. Don't even ask for write access — it's a regulatory non-starter.

---

## Outage Management System (OMS)

### What it does
Manages outage lifecycle: detection → crew dispatch → restoration → reporting. Uses the GIS network model to predict which device failed based on outage reports.

### Key Vendors
- **Oracle NMS (Network Management System):** Dominant in large IOUs
- **Schneider Electric:** Integrated with their ADMS
- **ABB/Hitachi:** Network Manager OMS
- **Milsoft:** Strong in co-ops and small munis
- **NISC:** Co-op market

### Integration Notes
- Heavily integrated with GIS (network connectivity model), AMI (outage detection), SCADA (device status), and WMS (crew dispatch)
- Outage data is gold for reliability analytics — but data quality varies wildly
- Major Event Day (MED) exclusions per IEEE 1366 require careful handling

**FDE Notes:** The OMS is where reliability data lives. The reliability engineer is your contact. Expect data quality issues in cause codes, outage duration, and customer counts. Always validate against AMI data when available.

---

## Geographic Information System (GIS)

### What it does
The spatial backbone. Contains the electric network model — every pole, line, transformer, switch, and their connectivity. Used by nearly every other system.

### Key Vendors
- **Esri ArcGIS:** Near-universal in U.S. utilities. ArcGIS Utility Network model is the new standard.
- **GE Smallworld:** Legacy in some large IOUs, declining
- **Schneider ArcFM:** Extension to Esri for utility-specific workflows

### Integration Notes
- GIS feeds OMS, planning tools, asset management, mobile workforce, and vegetation management
- The Esri Utility Network model (replacing Geometric Network) is a major migration for many utilities
- Data quality in GIS is the #1 issue — incomplete connectivity, wrong attributes, missing assets
- GIS data is typically in a versioned enterprise geodatabase (SDE)

**FDE Notes:** GIS is the foundation. If GIS data is bad, everything downstream is bad. Understand the utility's GIS maturity before promising anything that depends on network connectivity or asset location data. The GIS team is usually understaffed and protective of their data.

---

## Advanced Metering Infrastructure (AMI)

### What it does
Smart meters that provide interval usage data, voltage readings, outage/restoration signals, and remote connect/disconnect. Two-way communication between the utility and every meter.

### Key Vendors
- **Itron (OpenWay Riva):** Major market share, especially in large IOUs
- **Landis+Gyr (Gridstream):** Strong competitor, large installed base
- **Sensus (Xylem):** FlexNet RF network
- **Aclara (Hubbell):** TWACS and RF solutions
- **Honeywell (Elster):** Legacy in some territories

### Integration Notes
- AMI head-end system communicates with meters via RF mesh, cellular, or power line
- Data volumes are massive — 15-minute interval data × millions of meters
- Meter Data Management System (MDMS) sits between AMI head-end and billing/analytics
- Last-gasp and restoration signals feed into OMS for outage detection
- Voltage data from AMI enables conservation voltage reduction (CVR) programs

**FDE Notes:** AMI data is the richest dataset most utilities have. But it's often siloed in the MDMS and underutilized outside of billing. If you can get access to interval data, voltage data, and events (last gasp, tamper, etc.), you can power a wide range of analytics. Data is typically in 15- or 60-minute intervals. Ask about data latency — some utilities have near-real-time, others have 24-hour delays.

---

## Enterprise Asset Management (EAM) / CMMS

### What it does
Tracks assets through their lifecycle — procurement, installation, maintenance, inspection, retirement. Generates and tracks work orders for maintenance and repair.

### Key Vendors
- **IBM Maximo:** Dominant in utilities. Complex, powerful, and often poorly configured.
- **SAP PM (Plant Maintenance):** Common at SAP shops. Integrated with financials.
- **Oracle EAM:** Less common but present in Oracle-heavy utilities.
- **Infor EAM:** Smaller utilities.

### Integration Notes
- Should integrate with GIS (spatial location of assets) but often doesn't well
- Work orders generated here flow to workforce management for scheduling
- Asset data quality is the perennial challenge — install dates, condition data, specifications
- Financial asset records (for depreciation) may be in a separate system from operational asset records

**FDE Notes:** Maximo is the most common. Expect a custom configuration unique to each utility. Asset data in Maximo may not match GIS. Condition data is often sparse. The EAM is where maintenance history lives — valuable for predictive maintenance models.

---

## Work Management / Workforce Management

### What it does
Schedules and dispatches field crews to work orders. Manages the daily execution of planned and unplanned work.

### Key Vendors
- **Oracle Field Service (OFS):** Formerly ClickSoftware (acquired). Strong in utilities.
- **SAP Work Manager:** SAP-integrated field execution.
- **IFS:** Growing in utilities.
- **Custom/Legacy:** Many utilities have homegrown scheduling tools.

### Integration Notes
- Pulls work orders from EAM
- Dispatches to mobile devices (tablets, ruggedized laptops)
- Crew GPS tracking, time reporting, material usage
- Integration with OMS for emergency work dispatch

**FDE Notes:** Scheduling optimization is one of the highest-value AI targets. Current scheduling is often manual (planner with Excel/whiteboard). The constraint space is complex: crew certifications, equipment, materials, outage windows, travel time, priority, weather.

---

## Vegetation Management Platforms

### Key Vendors
- **Clearion:** Purpose-built for utility VM. Growing adoption.
- **Arborcross:** Mature VM workflow platform.
- **PlanIT Geo:** TreePlotter with utility-specific modules.
- **ECI Vegetation:** Inspection and work management for VM.
- **SAP/Maximo:** Some utilities run VM through their general EAM.
- **Custom/Spreadsheets:** Still common, unfortunately.

### Integration Notes
- Should integrate with GIS for circuit/span data
- Contractor portals for work reporting
- LiDAR data integration is the frontier — most platforms handle it poorly

**FDE Notes:** This space is fragmented. Many utilities are on spreadsheets or legacy tools and actively looking to modernize. If your AI solution needs to integrate with VM, expect to work with raw GIS data and flat files as much as formal APIs.

---

## Planning & Analysis Tools

### Key Vendors
- **CYME (Eaton):** Distribution analysis. Very common.
- **Synergi Electric (DNV):** Distribution planning and analysis.
- **ETAP:** Integrated power system analysis.
- **OpenDSS (EPRI):** Open-source distribution simulation. Growing for DER analysis.
- **PowerWorld:** Transmission planning.
- **PSS/E (Siemens):** Transmission planning standard.
- **LoadSEER (Integral Analytics):** Spatial load forecasting.

**FDE Notes:** Planning engineers are power systems experts. They trust tools that respect the physics. If you're building AI that touches planning, ensure your models align with power flow results or you'll lose credibility immediately.

---

## Data & Analytics Infrastructure

### Common Patterns
- **Data Historian:** OSIsoft PI (AVEVA PI) — nearly universal for time-series data from SCADA and sensors
- **Data Warehouse:** Oracle, SQL Server, or Snowflake. Maturity varies enormously.
- **BI Tools:** Power BI (growing), Tableau, Oracle BI, SAP BO
- **Cloud:** Most IOUs are early in cloud migration. AWS and Azure are most common. OT data stays on-prem per NERC CIP.
- **Data Lake:** Present at forward-looking utilities, often underutilized

### FDE Notes
Data maturity ranges from "everything is in Excel" to "we have a governed data lake with ML pipelines." Assess quickly and set expectations accordingly. The IT/OT boundary is real — getting OT data into analytics environments requires navigating security, network architecture, and politics.

---

## Integration Patterns

| Pattern | When Used | Example |
|---------|-----------|---------|
| Batch / ETL | Nightly data loads | GIS → OMS model updates |
| API / REST | Modern integrations | AMI head-end → analytics |
| Message Bus | Event-driven | SCADA alarms → OMS |
| File Transfer | Legacy systems | Flat file drops between systems |
| Database Links | Tightly coupled systems | EAM ↔ Financial system |

Most utility integrations are batch-based. Real-time integrations exist in the OT layer but are rare in the IT layer. Middleware (MuleSoft, IBM Integration Bus, Oracle SOA) is common at large IOUs.
