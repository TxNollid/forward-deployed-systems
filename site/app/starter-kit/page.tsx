"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

type FileNode = {
  name: string;
  type: "file" | "dir";
  desc?: string;
  children?: FileNode[];
};

const tree: FileNode[] = [
  {
    name: "sdlc/",
    type: "dir",
    desc: "10-phase lifecycle with I→A→O traceability",
    children: [
      { name: "00-overview.md", type: "file", desc: "Master chain + phase map" },
      { name: "01-scoping.md", type: "file", desc: "Inputs, actions, outputs, quality gate" },
      { name: "02-discovery.md", type: "file", desc: "Process, data, stakeholder, tech tracks" },
      { name: "03-requirements.md", type: "file", desc: "Use cases, acceptance criteria, metrics" },
      { name: "04-design.md", type: "file", desc: "Architecture, integration, AI/ML approach" },
      { name: "05-build.md", type: "file", desc: "Sprints, pipeline, model, integration" },
      { name: "06-test.md", type: "file", desc: "Functional, model, performance, UAT" },
      { name: "07-deploy.md", type: "file", desc: "Production, monitoring, runbook" },
      { name: "08-enable.md", type: "file", desc: "Training, docs, champions" },
      { name: "09-operate.md", type: "file", desc: "KPI tracking, model health, incidents" },
      { name: "10-handoff.md", type: "file", desc: "Outcomes report, expansion roadmap" },
    ],
  },
  {
    name: "domains/",
    type: "dir",
    desc: "Industry knowledge packages",
    children: [
      {
        name: "_template/",
        type: "dir",
        desc: "Standard 8-file structure for any domain",
        children: [
          { name: "overview.md", type: "file" },
          { name: "processes.md", type: "file" },
          { name: "roles.md", type: "file" },
          { name: "systems.md", type: "file" },
          { name: "kpis.md", type: "file" },
          { name: "reports.md", type: "file" },
          { name: "regulations.md", type: "file" },
          { name: "vocabulary.md", type: "file" },
          { name: "ai-opportunities.md", type: "file" },
        ],
      },
      {
        name: "td-utilities/",
        type: "dir",
        desc: "Full T&D utility domain — live",
        children: [
          { name: "overview.md", type: "file", desc: "IOUs, co-ops, munis, trends" },
          { name: "processes.md", type: "file", desc: "Outage mgmt, vegetation, asset, planning, work mgmt, regulatory" },
          { name: "roles.md", type: "file", desc: "C-suite to field crew, FDE relevance per role" },
          { name: "systems.md", type: "file", desc: "SCADA, OMS, GIS, AMI, EAM, WMS + integration notes" },
          { name: "kpis.md", type: "file", desc: "SAIDI, SAIFI, CAIDI, TCLOF, ETR accuracy + formulas" },
          { name: "reports.md", type: "file", desc: "Reliability, storm, VM, asset, capital, regulatory reports" },
          { name: "regulations.md", type: "file", desc: "NERC CIP, FERC, state PUC, IEEE 1366, OSHA" },
          { name: "vocabulary.md", type: "file", desc: "60+ T&D terms with context" },
          { name: "ai-opportunities.md", type: "file", desc: "10 ranked use cases with complexity + KPI impact" },
        ],
      },
    ],
  },
  {
    name: "skills/",
    type: "dir",
    desc: "Repeatable FDE playbooks",
    children: [
      { name: "stakeholder-mapping.md", type: "file", desc: "Identify, classify, strategize" },
      { name: "data-audit.md", type: "file", desc: "Inventory, assess quality, map to use case" },
      { name: "process-mining.md", type: "file", desc: "Shadow, map as-is, find AI insertion points" },
      { name: "integration-patterns.md", type: "file", desc: "Batch vs API vs embedded vs event-driven" },
      { name: "change-management.md", type: "file", desc: "Resistance patterns, adoption strategy" },
      { name: "escalation.md", type: "file", desc: "Common blockers + escalation paths" },
    ],
  },
  {
    name: "templates/",
    type: "dir",
    desc: "Reusable deliverable formats",
    children: [
      { name: "sow.md", type: "file", desc: "Statement of work with scope, timeline, acceptance" },
      { name: "architecture-doc.md", type: "file", desc: "System design with components, data flow, security" },
      { name: "process-map.md", type: "file", desc: "As-is workflow with pain points + AI insertion" },
      { name: "kpi-dashboard-spec.md", type: "file", desc: "Metrics, baselines, targets, source systems" },
      { name: "status-update.md", type: "file", desc: "Weekly format with blockers + metrics" },
      { name: "retro.md", type: "file", desc: "What worked, what didn't, lessons learned" },
    ],
  },
  {
    name: "diagrams/",
    type: "dir",
    desc: "Mermaid visualizations — render on GitHub",
    children: [
      { name: "01-engagement-lifecycle.md", type: "file" },
      { name: "04-td-outage-management.md", type: "file" },
      { name: "07-td-systems-landscape.md", type: "file" },
      { name: "08-ai-opportunity-matrix.md", type: "file" },
      { name: "11-sdlc-io-chain.md", type: "file" },
    ],
  },
  {
    name: "memory/",
    type: "dir",
    desc: "Per-engagement context (gitignored)",
    children: [{ name: ".gitkeep", type: "file" }],
  },
];

function FileTree({ nodes, depth = 0 }: { nodes: FileNode[]; depth?: number }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "sdlc/": true,
    "domains/": true,
    "td-utilities/": true,
  });

  return (
    <div className="font-mono text-sm">
      {nodes.map((node) => {
        const isDir = node.type === "dir";
        const isOpen = expanded[node.name];

        return (
          <div key={node.name}>
            <div
              className={`flex items-start gap-2 py-1 px-2 rounded group hover:bg-white/5 transition ${
                isDir ? "cursor-pointer" : ""
              }`}
              style={{ paddingLeft: `${8 + depth * 16}px` }}
              onClick={() => isDir && setExpanded((e) => ({ ...e, [node.name]: !e[node.name] }))}
            >
              <span className="text-neutral-600 flex-shrink-0 mt-0.5">
                {isDir ? (isOpen ? "▾" : "▸") : "·"}
              </span>
              <span className={isDir ? "text-accent" : "text-neutral-300"}>
                {node.name}
              </span>
              {node.desc && (
                <span className="text-neutral-600 text-xs ml-2 hidden sm:block">
                  — {node.desc}
                </span>
              )}
            </div>
            {isDir && isOpen && node.children && (
              <FileTree nodes={node.children} depth={depth + 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}

const phases = [
  { num: "01", name: "Scoping", input: "Client request, domain context", output: "Signed SOW, stakeholder map" },
  { num: "02", name: "Discovery", input: "SOW, stakeholder map", output: "Process maps, data inventory" },
  { num: "03", name: "Requirements", input: "Findings, KPIs", output: "Use cases, acceptance criteria" },
  { num: "04", name: "Design", input: "Requirements, tech landscape", output: "Architecture, integration spec" },
  { num: "05", name: "Build", input: "Architecture, data access", output: "Code, model artifacts" },
  { num: "06", name: "Test", input: "Code, acceptance criteria", output: "Validation report" },
  { num: "07", name: "Deploy", input: "Validated code, infra", output: "Production system, runbook" },
  { num: "08", name: "Enable", input: "Production system", output: "Trained users, documentation" },
  { num: "09", name: "Operate", input: "System, monitoring", output: "KPI tracking, optimizations" },
  { num: "10", name: "Handoff", input: "Metrics, documentation", output: "Outcomes report, roadmap" },
];

export default function StarterKit() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            STARTER KIT
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            The repo
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mb-4">
            Clone it. Load the domain. Follow the phases. Augment with AI.
          </p>
          <div className="flex gap-4 mb-14">
            <a
              href="https://github.com/TxNollid/forward-deployed-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-black font-semibold text-sm rounded hover:bg-accent transition"
            >
              Clone on GitHub →
            </a>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* File tree */}
          <FadeIn>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                </div>
                <span className="font-mono text-xs text-neutral-500 ml-2">
                  forward-deployed-systems/
                </span>
              </div>
              <div className="p-3 max-h-[480px] overflow-y-auto">
                <FileTree nodes={tree} />
              </div>
            </div>
          </FadeIn>

          {/* SDLC phases */}
          <FadeIn delay={100}>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="px-5 py-4 border-b border-white/5">
                <p className="font-mono text-xs text-neutral-500">sdlc/ — 10 phases</p>
              </div>
              <div className="p-5 space-y-3 max-h-[480px] overflow-y-auto">
                {phases.map((p) => (
                  <div key={p.num} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent flex-shrink-0 mt-0.5 w-6">
                      {p.num}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-neutral-600 font-mono mt-0.5">
                        {p.input} → {p.output}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Quick start */}
        <FadeIn>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 mb-8">
            <p className="font-mono text-accent text-xs tracking-widest mb-4">QUICK START</p>
            <div className="font-mono text-sm space-y-2">
              <p><span className="text-neutral-600"># 1. Clone</span></p>
              <p className="text-accent">git clone https://github.com/TxNollid/forward-deployed-systems</p>
              <p className="mt-4"><span className="text-neutral-600"># 2. Load your domain</span></p>
              <p className="text-neutral-300">cat domains/td-utilities/overview.md</p>
              <p className="mt-4"><span className="text-neutral-600"># 3. Start the SDLC</span></p>
              <p className="text-neutral-300">cat sdlc/01-scoping.md</p>
              <p className="mt-4"><span className="text-neutral-600"># 4. Point your AI at the repo</span></p>
              <p className="text-neutral-300">claude  <span className="text-neutral-600"># reads CLAUDE.md for full context</span></p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-xl border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium mb-1">Want to contribute a domain?</p>
              <p className="text-sm text-neutral-400">
                Copy the template, fill in 8 files, submit a PR.
              </p>
            </div>
            <a
              href="https://github.com/TxNollid/forward-deployed-systems/tree/main/domains/_template"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/15 text-sm rounded hover:border-accent/40 hover:text-accent transition flex-shrink-0"
            >
              View Template →
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
