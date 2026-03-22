"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const solutions = [
  {
    tag: "FRAMEWORK",
    title: "Forward Deployed Systems",
    desc: "An open-source operating system for FDEs shipping AI in enterprises. Domain knowledge packages, a 10-phase SDLC with I→A→O traceability, skills playbooks, and AI co-pilot wiring.",
    status: "Live",
    statusColor: "emerald",
    links: [
      { label: "GitHub", href: "https://github.com/TxNollid/forward-deployed-systems" },
      { label: "Starter Kit", href: "/starter-kit" },
    ],
    highlights: ["T&D Utilities domain", "10-phase SDLC", "6 skills playbooks", "11 Mermaid diagrams"],
  },
  {
    tag: "DOMAIN",
    title: "T&D Utilities Intelligence Package",
    desc: "A complete domain knowledge package for Transmission & Distribution utility engagements. Covers the 6 core processes, 12 key roles, full systems landscape (OMS, SCADA, GIS, AMI), KPIs, standard reports, NERC/PUC regulations, and 10 ranked AI opportunities.",
    status: "Live",
    statusColor: "emerald",
    links: [
      { label: "View Domain", href: "https://github.com/TxNollid/forward-deployed-systems/tree/main/domains/td-utilities" },
    ],
    highlights: ["6 core processes", "NERC CIP guidance", "10 AI opportunities ranked", "SAIDI/SAIFI/CAIDI definitions"],
  },
  {
    tag: "TOOLING",
    title: "CIAC Calculator",
    desc: "A 7-step web app that replaces spreadsheet-based CIAC estimating at Massachusetts utilities. Upload a cost file from WAM, bucket line items into included / excluded / donated property, enter revenue justification assumptions, and get a fully audited calculation with PDF report and customer letter — all in one workflow.",
    status: "V1 Prototype",
    statusColor: "amber",
    links: [],
    highlights: ["Electric CIAC + tax gross-up", "Donated property treatment", "PDF + DOCX output", "Full audit trail"],
  },
  {
    tag: "TOOLING",
    title: "Agent Orchestration Layer",
    desc: "CLAUDE.md and agent routing infrastructure that routes AI coding assistants to the right domain, SDLC phase, and skills based on the current task and role.",
    status: "In Progress",
    statusColor: "amber",
    links: [],
    highlights: ["Role-based routing", "Phase-aware context loading", "Skills + rules integration"],
  },
  {
    tag: "TOOLING",
    title: "Tracker System",
    desc: "Three-tier engagement tracker: high-level task tracker, item-level iteration log, and async Q&A queue for agent-human handoff. Designed to keep AI agents unblocked while surfacing decisions for human review.",
    status: "Planned",
    statusColor: "neutral",
    links: [],
    highlights: ["Task tracker", "Iteration log", "Agent Q&A queue"],
  },
  {
    tag: "DOMAIN",
    title: "Additional Industry Domains",
    desc: "Domain packages following the same 8-file structure for Healthcare, Financial Services, Manufacturing, and Logistics. Each with processes, roles, systems, KPIs, reports, regulations, vocabulary, and AI opportunities.",
    status: "Planned",
    statusColor: "neutral",
    links: [
      { label: "Domain Template", href: "https://github.com/TxNollid/forward-deployed-systems/tree/main/domains/_template" },
    ],
    highlights: ["Healthcare", "Financial Services", "Manufacturing", "Logistics"],
  },
];

const statusConfig: Record<string, { dot: string; text: string }> = {
  emerald: { dot: "bg-accent", text: "text-accent" },
  amber: { dot: "bg-amber-400", text: "text-amber-400" },
  neutral: { dot: "bg-neutral-500", text: "text-neutral-500" },
};

export default function Solutions() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            SOLUTIONS
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            What we&apos;ve shipped
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mb-14">
            Products and tools built to accelerate AI deployment in complex enterprise environments.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {solutions.map((s, i) => {
            const sc = statusConfig[s.statusColor];
            return (
              <FadeIn key={s.title} delay={i * 60}>
                <div className="glow-card p-8 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-neutral-500 border border-white/10 px-2 py-0.5 rounded">
                          {s.tag}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                          <span className={`font-mono text-xs ${sc.text}`}>{s.status}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold">{s.title}</h2>
                    </div>
                    {s.links.length > 0 && (
                      <div className="flex gap-3 flex-shrink-0">
                        {s.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target={l.href.startsWith("http") ? "_blank" : undefined}
                            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="px-4 py-2 text-sm border border-white/15 rounded hover:border-accent/40 hover:text-accent transition"
                          >
                            {l.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-neutral-400 mb-5 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/5 rounded text-neutral-400"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={400}>
          <div className="mt-14 p-8 rounded-xl border border-accent/15 bg-accent/5 text-center">
            <p className="text-neutral-300 mb-4">
              Have a use case we haven&apos;t built for yet?
            </p>
            <Link
              href="/services"
              className="px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-accent transition inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
