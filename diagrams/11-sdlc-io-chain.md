# SDLC Input → Action → Output Chain

Full traceability of artifacts across all 10 phases.

## Phase Flow

```mermaid
flowchart LR
    S[01\nScoping] --> D[02\nDiscovery]
    D --> R[03\nRequirements]
    R --> DE[04\nDesign]
    DE --> B[05\nBuild]
    B --> T[06\nTest]
    T --> DP[07\nDeploy]
    DP --> E[08\nEnable]
    E --> O[09\nOperate]
    O --> H[10\nHandoff]
```

## Artifact Flow

Shows what each phase produces and where it goes.

```mermaid
flowchart TD
    subgraph "01 Scoping"
        S_OUT1[Signed SOW]
        S_OUT2[Stakeholder Map]
        S_OUT3[Engagement Plan]
    end

    subgraph "02 Discovery"
        D_OUT1[As-Is Process Maps]
        D_OUT2[Data Inventory]
        D_OUT3[Technical Landscape]
        D_OUT4[Findings Document]
    end

    subgraph "03 Requirements"
        R_OUT1[Prioritized Use Cases]
        R_OUT2[Functional Requirements]
        R_OUT3[Non-Functional Requirements]
        R_OUT4[Success Metrics + Baselines]
        R_OUT5[Acceptance Criteria]
    end

    subgraph "04 Design"
        DE_OUT1[Architecture Document]
        DE_OUT2[Integration Spec]
        DE_OUT3[Data Pipeline Design]
        DE_OUT4[AI/ML Approach Doc]
        DE_OUT5[KPI Dashboard Spec]
        DE_OUT6[Security Review]
    end

    subgraph "05 Build"
        B_OUT1[Working Code]
        B_OUT2[Model Artifacts]
        B_OUT3[Integration Endpoints]
    end

    subgraph "06 Test"
        T_OUT1[Validation Report]
        T_OUT2[Known Issues]
        T_OUT3[Performance Benchmarks]
        T_OUT4[UAT Feedback]
        T_OUT5[Security Sign-off]
    end

    subgraph "07 Deploy"
        DP_OUT1[Production System]
        DP_OUT2[Monitoring Dashboards]
        DP_OUT3[Runbook]
    end

    subgraph "08 Enable"
        E_OUT1[Training Materials]
        E_OUT2[Documentation]
        E_OUT3[Champions]
    end

    subgraph "09 Operate"
        O_OUT1[KPI Tracking Report]
        O_OUT2[Incident Log]
        O_OUT3[Optimization Recs]
    end

    subgraph "10 Handoff"
        H_OUT1[Outcomes Report]
        H_OUT2[Expansion Roadmap]
        H_OUT3[Retrospective]
    end

    S_OUT1 --> D_OUT1
    S_OUT2 --> D_OUT1
    S_OUT3 --> D_OUT1

    D_OUT1 --> R_OUT1
    D_OUT2 --> R_OUT1
    D_OUT4 --> R_OUT1

    R_OUT1 --> DE_OUT1
    R_OUT2 --> DE_OUT1
    R_OUT3 --> DE_OUT1
    D_OUT3 --> DE_OUT1
    D_OUT2 --> DE_OUT3

    DE_OUT1 --> B_OUT1
    DE_OUT2 --> B_OUT3
    DE_OUT3 --> B_OUT1
    DE_OUT4 --> B_OUT2

    B_OUT1 --> T_OUT1
    B_OUT2 --> T_OUT1
    R_OUT5 --> T_OUT1
    R_OUT4 --> T_OUT1

    T_OUT1 --> DP_OUT1
    T_OUT5 --> DP_OUT1
    DE_OUT1 --> DP_OUT1

    DP_OUT1 --> E_OUT1
    DP_OUT3 --> E_OUT2
    T_OUT4 --> E_OUT1
    D_OUT1 --> E_OUT1

    DP_OUT1 --> O_OUT1
    DP_OUT2 --> O_OUT1
    DP_OUT3 --> O_OUT1
    R_OUT4 --> O_OUT1

    O_OUT1 --> H_OUT1
    O_OUT2 --> H_OUT1
    O_OUT3 --> H_OUT2
    S_OUT1 --> H_OUT1
```

## Domain Knowledge Touchpoints

```mermaid
flowchart LR
    subgraph Domain Files
        OV[overview]
        VOC[vocabulary]
        PROC[processes]
        ROLES[roles]
        SYS[systems]
        KPI[kpis]
        RPT[reports]
        REG[regulations]
        AIO[ai-opportunities]
    end

    subgraph SDLC Phases
        S[01 Scope]
        D[02 Discover]
        R[03 Require]
        DE[04 Design]
        B[05 Build]
        T[06 Test]
        DP[07 Deploy]
        E[08 Enable]
        O[09 Operate]
        H[10 Handoff]
    end

    OV --> S
    OV --> D
    VOC --> S
    VOC --> D
    VOC --> E
    PROC --> D
    PROC --> R
    PROC --> E
    ROLES --> S
    ROLES --> D
    ROLES --> E
    SYS --> D
    SYS --> DE
    SYS --> B
    SYS --> DP
    KPI --> R
    KPI --> DE
    KPI --> T
    KPI --> O
    RPT --> R
    RPT --> DE
    RPT --> E
    REG --> DE
    REG --> B
    REG --> DP
    REG --> T
    AIO --> S
    AIO --> R
    AIO --> H
```
