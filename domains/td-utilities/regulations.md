# T&D Utilities — Regulatory & Compliance Landscape

## NERC Reliability Standards

**Full name:** North American Electric Reliability Corporation Standards
**Governing body:** NERC (enforced by Regional Entities: SERC, RF, WECC, etc.), authorized by FERC
**Scope:** Bulk Electric System (BES) — primarily transmission, but increasingly touching distribution (DERs)
**Key requirements:**
- Transmission Planning (TPL): System must withstand contingencies
- Facility Ratings (FAC): Accurate thermal, voltage, and stability ratings
- Protection and Control (PRC): Relay settings, system protection coordination
- Emergency Preparedness (EOP): Operating procedures for emergencies
- Vegetation Management (FAC-003): Transmission vegetation clearance requirements

**Penalties for non-compliance:** Up to $1M per violation per day. NERC publishes violation records publicly — reputational risk is significant.
**Impact on AI deployment:** Any AI system that influences transmission operations or planning must be explainable and auditable. Models used for compliance reporting must be validated. Data handling must respect NERC requirements.

---

## NERC CIP (Critical Infrastructure Protection)

**Full name:** NERC Critical Infrastructure Protection Standards (CIP-002 through CIP-014)
**Governing body:** NERC / FERC
**Scope:** Cybersecurity for the Bulk Electric System. Covers all cyber assets that can impact grid reliability.
**Key requirements:**
- CIP-002: BES Cyber System categorization (High, Medium, Low impact)
- CIP-003: Security management controls
- CIP-004: Personnel and training
- CIP-005: Electronic Security Perimeters (network segmentation)
- CIP-006: Physical security of cyber assets
- CIP-007: System security management (patching, ports, malware)
- CIP-008: Incident response
- CIP-009: Recovery plans
- CIP-010: Configuration change management and vulnerability assessment
- CIP-011: Information protection (BES Cyber System Information)
- CIP-013: Supply chain risk management
- CIP-014: Physical security of transmission stations

**Penalties for non-compliance:** Same as NERC — up to $1M/day/violation. CIP violations are taken very seriously.
**Impact on AI deployment:** This is the biggest technical hurdle for AI in T&D. Any system that touches OT data or cyber assets must comply with CIP. Cloud deployments for BES data require careful architecture. Access to SCADA data for analytics requires navigating Electronic Security Perimeters. Vendor software (including AI tools) falls under supply chain requirements (CIP-013).

**FDE Notes:** Do NOT underestimate CIP. It will gate your timeline. Engage the cybersecurity/compliance team in week 1. Understand which data is BES Cyber System Information (BCSI) and which is not. Design your architecture to minimize CIP scope where possible.

---

## State PUC / PSC Regulation

**Full name:** Public Utility Commission / Public Service Commission (varies by state)
**Governing body:** Each state has its own (e.g., CPUC in California, NYPSC in New York, PUCO in Ohio)
**Scope:** Rate setting, reliability standards, service quality, resource planning, renewable mandates
**Key requirements:**
- Rate cases: Utility must justify revenue requirements and rate design
- Reliability standards: State-specific SAIDI/SAIFI targets with potential penalties/rewards
- Integrated Resource Plans (IRPs): Long-term generation and delivery planning
- Vegetation management: Many states mandate specific trim cycles
- Wildfire mitigation plans: Required in fire-prone states (CA, OR, CO)
- Grid modernization proceedings: States increasingly directing smart grid investments

**Penalties for non-compliance:** Fines, disallowed costs (utility eats the expense, shareholders lose), or mandated corrective action plans.
**Impact on AI deployment:** PUCs are increasingly interested in AI but want transparency. AI-driven decisions that affect customers (service quality, reliability) may need to be explainable in regulatory proceedings. Some PUCs require pre-approval for AI/analytics investments above certain thresholds. Rate recovery for AI tools may require demonstrating measurable benefits.

**FDE Notes:** Understand which state(s) your client operates in and the current PUC stance on technology investment. Some PUCs are innovation-friendly (NY, CA, IL); others are cost-focused and skeptical. If your AI solution will be part of a rate case, start building the benefits case early.

---

## FERC (Federal Energy Regulatory Commission)

**Full name:** Federal Energy Regulatory Commission
**Governing body:** Independent federal agency
**Scope:** Interstate electricity transmission, wholesale electricity markets, hydroelectric licensing
**Key requirements:**
- Open Access Transmission Tariff (OATT)
- Transmission planning (Order 1000 — competitive transmission)
- Interconnection standards (LGIP, SGIP for generators)
- Market manipulation enforcement
- Reliability oversight (delegates to NERC)

**Penalties for non-compliance:** Civil penalties up to $1M/day, disgorgement of profits
**Impact on AI deployment:** Less direct impact on distribution-level AI. For transmission: any AI influencing market operations or transmission planning must be compliant. FERC increasingly interested in advanced analytics for market monitoring.

---

## IEEE 1366

**Full name:** IEEE Guide for Electric Power Distribution Reliability Indices
**Governing body:** IEEE (industry standard, adopted by most PUCs)
**Scope:** Defines how to calculate reliability indices (SAIDI, SAIFI, CAIDI, MAIFI) and Major Event Day (MED) exclusions
**Key requirements:**
- Standard calculation methodology for reliability metrics
- 2.5-beta method for identifying Major Event Days
- Rules for what counts as a sustained vs. momentary interruption
- Guidance on data collection and reporting

**Impact on AI deployment:** Any AI that touches reliability data or reporting must align with IEEE 1366 definitions. MED exclusion calculations are a common pain point — automating them is a quick win but must be done precisely.

---

## OSHA (Occupational Safety and Health Administration)

**Governing body:** U.S. Department of Labor
**Scope:** Worker safety across all industries, with specific standards for electric utility work
**Key requirements:**
- 29 CFR 1910.269: Electric power generation, transmission, and distribution (general industry)
- 29 CFR 1926 Subpart V: Power transmission and distribution (construction)
- Minimum approach distances for energized work
- Fall protection, PPE requirements
- Lockout/tagout procedures

**Impact on AI deployment:** AI systems used in work planning or crew dispatch should respect safety constraints (e.g., minimum crew sizes, qualification requirements, approach distances). AI-generated work plans must not circumvent safety protocols.

---

## Environmental Regulations

**Key regulations:**
- **NEPA (National Environmental Policy Act):** Environmental review for transmission projects
- **ESA (Endangered Species Act):** Vegetation management in habitats
- **Clean Water Act:** Construction near waterways
- **State environmental laws:** Vary widely, often more stringent than federal

**Impact on AI deployment:** Vegetation management AI must account for environmental constraints (no-trim zones, seasonal restrictions, protected species). Routing optimization for new construction must incorporate environmental data.

---

## Emerging: AI-Specific Regulation

**Status:** Evolving rapidly. No utility-specific AI regulation yet, but:
- NIST AI Risk Management Framework gaining traction
- Some PUCs beginning to address AI in grid modernization proceedings
- EU AI Act may influence multinational utilities
- IEEE working on standards for AI in power systems

**FDE Notes:** The regulatory landscape for AI in utilities is still forming. Position your solutions as transparent, auditable, and human-in-the-loop. Regulators will eventually ask "how does the AI make decisions?" — be ready with an answer.
