# T&D Utilities — Domain Vocabulary

Use the client's language. This glossary maps industry-specific terms to plain English.

## Grid Infrastructure

| Term | Definition | Context |
|------|-----------|---------|
| Feeder | A distribution circuit that carries power from a substation to customers | The primary unit of analysis for reliability and planning |
| Lateral | A branch off the main feeder that serves a smaller group of customers | Often single-phase, serves neighborhoods |
| Span | The section of line between two poles/structures | Unit of work for vegetation management and inspection |
| Recloser | An automatic switch that briefly disconnects and reconnects a faulted section | Prevents momentary faults (e.g., tree branch) from becoming sustained outages |
| Sectionalizer | A device that isolates a faulted section after a recloser operates | Works in sequence with reclosers |
| Capacitor Bank | Equipment that improves voltage and power factor on a feeder | Usually pole-mounted, can be switched or fixed |
| Regulator | A device that maintains voltage within acceptable range along a feeder | Adjusts tap position automatically |
| Pad-mount Transformer | Ground-level transformer in a green box serving underground neighborhoods | Common in newer subdivisions |
| Overhead (OH) | Lines on poles | Older, cheaper, more outage-prone |
| Underground (UG) | Buried lines | Newer, more expensive, fewer outages but harder to repair |
| Right-of-Way (ROW) | The strip of land where the utility has legal right to build/maintain lines | Width varies by voltage. VM work happens here |
| Easement | Legal right to use someone's property for utility infrastructure | Distinct from ROW — source of customer disputes |

## Operations

| Term | Definition | Context |
|------|-----------|---------|
| Switching Order | A formal, documented sequence of operations to change the state of grid devices | Safety-critical — every switch operation is planned and verified |
| Clearance / Tag | A safety process that ensures a de-energized line stays de-energized while crews work on it | "Taking a clearance" means the line is safe to touch |
| Fault | An abnormal current path (short circuit) on the grid | Causes outages. Can be temporary (tree branch) or permanent (broken wire) |
| Sustained Outage | An outage lasting > 5 minutes | Counts toward SAIDI/SAIFI |
| Momentary Outage | An outage lasting < 5 minutes, automatically restored by a recloser | Counts toward MAIFI |
| Nested Outage | When OMS groups individual customer outages to a suspected failed device | Nesting accuracy determines whether crews go to the right location |
| ETR | Estimated Time of Restoration — when the utility expects to restore power | Communicated to customers. Accuracy is a major pain point |
| Mutual Aid | Crews from other utilities who assist during major storms | Coordinated through regional mutual assistance groups |
| Storm Mode / Major Event | When the utility activates emergency operations for widespread outages | Changes operating procedures, staffing, and reporting |
| MED | Major Event Day — a day excluded from reliability metrics per IEEE 1366 | Uses the 2.5-beta statistical method |
| Blue Sky Day | A normal operating day (no storms or unusual events) | Opposite of storm mode |

## Vegetation Management

| Term | Definition | Context |
|------|-----------|---------|
| Trim Cycle | The number of years between scheduled vegetation management on a circuit | Typically 4-5 years for distribution |
| Side Trim | Cutting branches growing laterally toward the lines | Most common type of VM work |
| Overhang | Tree canopy growing above the lines — branches can fall onto conductors | Higher risk than side growth |
| Danger Tree / Hazard Tree | A tree outside the ROW that could strike the lines if it falls | Removal requires landowner permission |
| Growth Rate | How fast a tree species grows toward the lines annually | Determines optimal trim timing |
| Specification Trim | Trimming to specific clearance distances by voltage class | Standards vary by utility and state |
| Refusal | A landowner who refuses to allow vegetation work on their property | Creates reliability risk. Tracked and escalated |
| Circuit Patrol | Walking or driving a circuit to assess vegetation conditions | Pre-inspection step |

## Metering & Data

| Term | Definition | Context |
|------|-----------|---------|
| AMI | Advanced Metering Infrastructure — smart meters with two-way communication | Enables interval data, outage detection, remote disconnect |
| AMR | Automated Meter Reading — one-way communication (drive-by or fixed network) | Older than AMI, limited functionality |
| Interval Data | Energy usage recorded at regular intervals (typically 15 or 60 minutes) | Foundation for analytics, demand response, rate design |
| Last Gasp | A signal sent by a smart meter when it loses power | Used for outage detection in OMS |
| Restoration Signal | A signal sent by a smart meter when power returns | Confirms outage restoration |
| Head-End | The central system that communicates with smart meters | Vendor-specific (Itron, Landis+Gyr, etc.) |
| MDMS | Meter Data Management System — processes and stores meter data | Sits between head-end and billing/analytics |

## Planning & Engineering

| Term | Definition | Context |
|------|-----------|---------|
| Load | The amount of power being consumed at a point in the grid | Measured in MW (megawatts) or kVA |
| Peak Load | Maximum demand, usually on the hottest summer day | Drives infrastructure sizing |
| Hosting Capacity | How much DER (solar, storage) a feeder can accommodate without upgrades | Increasingly important metric |
| DER | Distributed Energy Resources — solar, storage, EVs, demand response at customer level | Changing the grid from one-way to bidirectional |
| NWA | Non-Wire Alternative — solving a grid capacity problem without building new lines | Demand response, storage, DER instead of traditional infrastructure |
| Power Flow | Computer simulation of how electricity flows through the grid | Used to identify voltage, thermal, and protection issues |
| Contingency Analysis | What happens if a piece of equipment fails? | "N-1" means the system can lose one element and still operate |
| Backfeed | Providing power to customers through an alternate path when the normal path is out | Key restoration strategy |

## Financial & Regulatory

| Term | Definition | Context |
|------|-----------|---------|
| Rate Case | The regulatory proceeding where a utility requests to change customer rates | Multi-year process involving extensive data and testimony |
| Rate Base | The total value of utility assets on which the utility earns a regulated return | Growing rate base is how IOUs grow earnings |
| Capital (Capex) | Investment in new or replacement infrastructure | Earns a regulated return — utilities prefer capex to opex |
| O&M (Opex) | Operating and maintenance expenses — day-to-day costs | Recovered through rates but doesn't earn a return |
| Rider / Surcharge | An additional charge on customer bills for specific programs | Used for storm cost recovery, grid modernization, vegetation management |
| PUC / PSC | Public Utility Commission / Public Service Commission — the state regulator | Approves rates, sets reliability standards, reviews utility plans |
| IRP | Integrated Resource Plan — long-term plan for meeting customer energy needs | 10-20 year planning horizon |
| FERC | Federal Energy Regulatory Commission — regulates interstate transmission and wholesale markets | Distinct from state-level regulation |
| NERC | North American Electric Reliability Corporation — sets reliability and cybersecurity standards | Mandatory standards with enforcement authority |

## Acronyms (Quick Reference)

| Acronym | Full Name |
|---------|-----------|
| ADMS | Advanced Distribution Management System |
| BES | Bulk Electric System |
| CAIDI | Customer Average Interruption Duration Index |
| CIP | Critical Infrastructure Protection (NERC) |
| CVR | Conservation Voltage Reduction |
| DMS | Distribution Management System |
| EAM | Enterprise Asset Management |
| EMS | Energy Management System |
| GIS | Geographic Information System |
| IOU | Investor-Owned Utility |
| LiDAR | Light Detection and Ranging |
| MAIFI | Momentary Average Interruption Frequency Index |
| OMS | Outage Management System |
| SAIDI | System Average Interruption Duration Index |
| SAIFI | System Average Interruption Frequency Index |
| SCADA | Supervisory Control and Data Acquisition |
| TCLOF | Tree-Caused Line Outage Frequency |
