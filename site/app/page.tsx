"use client";

import { useState } from "react";

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm tracking-wider text-white">
          FDS<span className="text-emerald-400">_</span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-neutral-400">
          <a href="#premise" className="hover:text-white transition">
            Premise
          </a>
          <a href="#framework" className="hover:text-white transition">
            Framework
          </a>
          <a href="#sdlc" className="hover:text-white transition">
            SDLC
          </a>
          <a href="#domains" className="hover:text-white transition">
            Domains
          </a>
          <a
            href="#demo"
            className="px-4 py-2 bg-emerald-500 text-black font-medium rounded hover:bg-emerald-400 transition"
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-4 tracking-wider">
          OPEN SOURCE
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Forward Deployed
          <br />
          <span className="text-emerald-400">Systems</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
          An operating system for Forward Deployed Engineers shipping AI in
          enterprises. Domain knowledge, structured SDLC, and AI-native tooling
          — so your team is effective from day one.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#demo"
            className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition"
          >
            Request a Demo
          </a>
          <a
            href="https://github.com/TxNollid/forward-deployed-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-white rounded hover:border-white/40 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Premise() {
  return (
    <section id="premise" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          THE PREMISE
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Airdrop a capable team.
          <br />
          Let them cook.
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
          Inspired by Palantir&apos;s Forward Deployed Engineer strategy — drop
          a small, dense, capable team into a client environment where
          they&apos;re behind and let them build with modern tooling. FDS treats
          this as a way of operating: the approach to the problem + the toolbox
          of mature solutions to help.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="font-mono text-emerald-400 text-sm mb-3">
              OBSERVE &rarr; ORIENT
            </div>
            <h3 className="font-semibold mb-2">Domain-First Intelligence</h3>
            <p className="text-sm text-neutral-400">
              Industry processes, roles, systems, KPIs, and regulations — loaded
              before you walk in the door. Speak the client&apos;s language from
              day one.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="font-mono text-emerald-400 text-sm mb-3">
              DECIDE &rarr; ACT
            </div>
            <h3 className="font-semibold mb-2">Structured SDLC</h3>
            <p className="text-sm text-neutral-400">
              10 phases with explicit Input &rarr; Action &rarr; Output at every
              level. Outputs from one phase chain directly into the next. Nothing
              assumed.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="font-mono text-emerald-400 text-sm mb-3">
              ITERATE &rarr; COMPOUND
            </div>
            <h3 className="font-semibold mb-2">AI-Native Tooling</h3>
            <p className="text-sm text-neutral-400">
              Built for AI coding assistants. Point Claude Code or Cursor at the
              repo and get a co-pilot that understands the engagement framework
              and domain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const layers = [
    {
      name: "SDLC",
      path: "sdlc/",
      desc: "10-phase lifecycle with I\u2192A\u2192O traceability",
      files: [
        "Scoping",
        "Discovery",
        "Requirements",
        "Design",
        "Build",
        "Test",
        "Deploy",
        "Enable",
        "Operate",
        "Handoff",
      ],
    },
    {
      name: "Domains",
      path: "domains/",
      desc: "Industry-specific knowledge packages",
      files: [
        "Processes",
        "Roles",
        "Systems",
        "KPIs",
        "Reports",
        "Regulations",
        "Vocabulary",
        "AI Opportunities",
      ],
    },
    {
      name: "Skills",
      path: "skills/",
      desc: "Repeatable FDE playbooks",
      files: [
        "Stakeholder Mapping",
        "Data Audit",
        "Process Mining",
        "Integration Patterns",
        "Change Management",
        "Escalation",
      ],
    },
    {
      name: "Templates",
      path: "templates/",
      desc: "Reusable deliverables",
      files: [
        "SOW",
        "Architecture Doc",
        "Process Map",
        "KPI Dashboard",
        "Status Update",
        "Retro",
      ],
    },
  ];

  return (
    <section id="framework" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          THE FRAMEWORK
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          A network of code and markdown
        </h2>
        <p className="text-neutral-400 text-lg mb-10">
          Structured content that primes an FDE to be successful. Every file has
          a purpose. Every output feeds a downstream input.
        </p>

        <div className="space-y-6">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="p-6 rounded-lg border border-white/10 bg-white/[0.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{layer.name}</h3>
                  <p className="text-sm text-neutral-500 font-mono">
                    {layer.path}
                  </p>
                </div>
                <p className="text-sm text-neutral-400 text-right max-w-xs">
                  {layer.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {layer.files.map((file) => (
                  <span
                    key={file}
                    className="px-3 py-1 text-xs font-mono bg-white/5 rounded text-neutral-300 border border-white/5"
                  >
                    {file}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SDLCSection() {
  const phases = [
    {
      num: "01",
      name: "Scoping",
      input: "Client request, domain context",
      output: "Signed SOW, stakeholder map",
    },
    {
      num: "02",
      name: "Discovery",
      input: "SOW, stakeholder map",
      output: "Process maps, data inventory, findings",
    },
    {
      num: "03",
      name: "Requirements",
      input: "Findings, process maps, KPIs",
      output: "Use cases, acceptance criteria, metrics",
    },
    {
      num: "04",
      name: "Design",
      input: "Requirements, tech landscape",
      output: "Architecture, integration spec, pipeline",
    },
    {
      num: "05",
      name: "Build",
      input: "Architecture, specs, data access",
      output: "Working code, model artifacts",
    },
    {
      num: "06",
      name: "Test",
      input: "Code, acceptance criteria, baselines",
      output: "Validation report, known issues",
    },
    {
      num: "07",
      name: "Deploy",
      input: "Validated code, infra access",
      output: "Production system, monitoring, runbook",
    },
    {
      num: "08",
      name: "Enable",
      input: "Production system, process maps",
      output: "Trained users, documentation",
    },
    {
      num: "09",
      name: "Operate",
      input: "Production system, monitoring",
      output: "KPI tracking, optimizations",
    },
    {
      num: "10",
      name: "Handoff",
      input: "Operational metrics, documentation",
      output: "Outcomes report, expansion roadmap",
    },
  ];

  return (
    <section id="sdlc" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          THE SDLC
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Input &rarr; Action &rarr; Output
        </h2>
        <p className="text-neutral-400 text-lg mb-10">
          Every phase defines explicit inputs, actions, outputs, and quality
          gates. Outputs chain into downstream inputs. OODA loops at every
          level.
        </p>

        <div className="space-y-3">
          {phases.map((phase, i) => (
            <div key={phase.num} className="flex items-stretch">
              <div className="w-20 flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-emerald-400/40 bg-emerald-400/10 flex items-center justify-center font-mono text-emerald-400 text-sm">
                  {phase.num}
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 my-1" />
                )}
              </div>
              <div className="flex-1 pb-3">
                <h3 className="font-semibold mb-2">{phase.name}</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-600 font-mono text-xs mt-0.5 flex-shrink-0">
                      IN
                    </span>
                    <span className="text-neutral-400">{phase.input}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400/60 font-mono text-xs mt-0.5 flex-shrink-0">
                      OUT
                    </span>
                    <span className="text-neutral-400">{phase.output}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Domains() {
  const domainFiles = [
    {
      name: "processes.md",
      desc: "Core business workflows with swim lanes, decision points, handoffs, and AI insertion points",
    },
    {
      name: "roles.md",
      desc: "Org chart patterns, titles, responsibilities, KPIs owned, and FDE engagement relevance",
    },
    {
      name: "systems.md",
      desc: "Common tech stacks, vendors, APIs, integration patterns, and FDE-specific gotchas",
    },
    {
      name: "kpis.md",
      desc: "Metrics that matter — definitions, formulas, typical ranges, and AI leverage points",
    },
    {
      name: "reports.md",
      desc: "Standard reports and dashboards with cadence, audience, pain points, and automation opportunity",
    },
    {
      name: "regulations.md",
      desc: "Compliance landscape, constraints on AI deployment, and what to watch for",
    },
    {
      name: "vocabulary.md",
      desc: "Domain terminology so your team speaks the client\u2019s language from day one",
    },
    {
      name: "ai-opportunities.md",
      desc: "Ranked use cases with complexity, time to value, KPI impact, and prerequisites",
    },
  ];

  return (
    <section id="domains" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          DOMAIN KNOWLEDGE
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Industry intelligence, pre-loaded
        </h2>
        <p className="text-neutral-400 text-lg mb-4">
          Each domain package contains 8 structured files that cover every
          dimension an FDE needs. Starting with T&amp;D Utilities — more domains
          coming.
        </p>
        <p className="text-neutral-500 text-sm mb-10">
          These are starting points refined for the specific client during
          discovery. The FDE brings the base; the engagement sharpens it.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {domainFiles.map((file) => (
            <div
              key={file.name}
              className="p-5 rounded-lg border border-white/10 bg-white/[0.02]"
            >
              <p className="font-mono text-sm text-emerald-400 mb-2">
                {file.name}
              </p>
              <p className="text-sm text-neutral-400">{file.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          HOW IT WORKS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          The FDE operating model
        </h2>

        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="font-mono text-2xl text-emerald-400/30 flex-shrink-0 w-8 text-right">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Clone and load the domain
              </h3>
              <p className="text-neutral-400">
                Identify the client&apos;s industry. Read the domain package —
                overview, vocabulary, and roles first. You&apos;re oriented
                before the kickoff call.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="font-mono text-2xl text-emerald-400/30 flex-shrink-0 w-8 text-right">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Follow the SDLC phases
              </h3>
              <p className="text-neutral-400">
                Each phase tells you what you need (inputs), what to do
                (actions), and what to produce (outputs). Quality gates tell you
                when to move on. Skills and templates are linked at every step.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="font-mono text-2xl text-emerald-400/30 flex-shrink-0 w-8 text-right">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Augment with AI agents
              </h3>
              <p className="text-neutral-400">
                Point your AI coding assistant at the repo. The CLAUDE.md
                orchestration file routes the agent to the right domain, phase,
                and skills based on the current task. The agent becomes your
                co-pilot.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="font-mono text-2xl text-emerald-400/30 flex-shrink-0 w-8 text-right">
              4
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Compound knowledge over time
              </h3>
              <p className="text-neutral-400">
                Every engagement sharpens the skills, rules of engagement, and
                domain knowledge. The system gets smarter with each deployment.
                Personal and cumulative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="demo"
      className="py-20 px-6 border-t border-white/5 bg-white/[0.02]"
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wider">
          GET STARTED
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Request a demo
        </h2>
        <p className="text-neutral-400 text-lg mb-10">
          See how Forward Deployed Systems can accelerate your AI deployment
          engagements. We&apos;ll walk through the framework, domain knowledge,
          and AI-augmented workflows.
        </p>

        {submitted ? (
          <div className="p-8 rounded-lg border border-emerald-400/20 bg-emerald-400/5 text-center">
            <p className="text-emerald-400 font-semibold text-lg mb-2">
              Request received.
            </p>
            <p className="text-neutral-400">
              We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  value={form.industry}
                  onChange={(e) =>
                    setForm({ ...form, industry: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  placeholder="e.g. T&D Utilities, Healthcare"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                What are you looking to solve?
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition resize-none"
                placeholder="Tell us about your use case..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition cursor-pointer"
            >
              Request Demo
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p className="font-mono">
          FDS<span className="text-emerald-400">_</span> &copy; 2026
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/TxNollid/forward-deployed-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a href="#demo" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <p className="text-xs text-neutral-600">CC BY-NC-SA 4.0</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Premise />
      <Framework />
      <SDLCSection />
      <Domains />
      <HowItWorks />
      <DemoForm />
      <Footer />
    </main>
  );
}
