"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const ROTATING_WORDS = [
  "enterprises.",
  "utilities.",
  "manufacturers.",
  "logistics.",
];

function DotGrid() {
  return (
    <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
  );
}

function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent scan-line" />
    </div>
  );
}

function OODALoop() {
  const nodes = [
    { label: "OBSERVE", angle: -90 },
    { label: "ORIENT", angle: 0 },
    { label: "DECIDE", angle: 90 },
    { label: "ACT", angle: 180 },
  ];
  const r = 80;
  const cx = 140;
  const cy = 140;

  return (
    <svg width="280" height="280" className="opacity-80">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <circle r="4" fill="#34d399" opacity="0.8">
        <animateMotion dur="6s" repeatCount="indefinite"
          path={`M ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx + r - 0.001} ${cy}`} />
      </circle>
      {nodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={node.label}>
            <circle cx={x} cy={y} r="6" fill="#34d399" opacity="0.2" />
            <circle cx={x} cy={y} r="3" fill="#34d399" />
            <text
              x={x}
              y={y + (node.angle === -90 ? -14 : node.angle === 90 ? 18 : 0)}
              dx={node.angle === 0 ? 14 : node.angle === 180 ? -14 : 0}
              textAnchor={node.angle === 0 ? "start" : node.angle === 180 ? "end" : "middle"}
              fill="#34d399" fontSize="9" fontFamily="monospace" letterSpacing="1"
            >
              {node.label}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="20" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="1" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="rgba(52,211,153,0.5)" fontSize="7" fontFamily="monospace" letterSpacing="0.5">
        LOOP
      </text>
    </svg>
  );
}

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROTATING_WORDS[idx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-emerald-400">
      {displayed}
      <span className="cursor-blink text-emerald-400">|</span>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      <DotGrid />
      <ScanLine />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <FadeIn delay={0}>
            <p className="font-mono text-emerald-400 text-xs tracking-widest mb-5">OPEN SOURCE</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Deploy AI into{" "}
              <br className="hidden sm:block" />
              <Typewriter />
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-8">
              An open-source operating approach for scaling AI in enterprises.
              Industry knowledge, structured SDLC, and AI-native tooling.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition">
                Request a Demo
              </Link>
              <Link href="/starter-kit" className="px-6 py-3 border border-white/15 text-white rounded hover:border-emerald-400/40 hover:text-emerald-400 transition">
                Explore the Kit
              </Link>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={400} className="hidden lg:flex justify-center">
          <OODALoop />
        </FadeIn>
      </div>
    </section>
  );
}

function Thesis() {
  const pillars = [
    {
      icon: "◈",
      title: "Industry Context",
      body: "Use base industry processes, roles, KPIs, and systems to create context-aware systems.",
    },
    {
      icon: "⟳",
      title: "Adaptable AI Kernels",
      body: "Process kernels specialized to various tasks with explicit Input → Action → Outputs and customizable integrations.",
    },
    {
      icon: "⌁",
      title: "AI-Native Harness",
      body: "Grow with your models. Use Claude, Codex, or open source AI with FDS to get the most of AI now.",
    },
    {
      icon: "↗",
      title: "A Mindset",
      body: "FDS is a way of operating for your organization that maximizes small, dense teams to achieve new heights.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-emerald-400 text-xs tracking-widest mb-3">THE THESIS</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl">
            Build systems, not software.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-14 leading-relaxed">
            The hardest part of deploying AI in enterprises isn&apos;t the model —
            it&apos;s the context. The processes, the people, the legacy systems,
            the regulations. FDS solves for that.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div className="glow-card p-6 rounded-lg border border-white/10 bg-white/[0.02] h-full">
                <div className="text-emerald-400 text-2xl mb-4 font-mono">{p.icon}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function IOChain() {
  const steps = [
    { label: "Scoping", sub: "SOW + stakeholders" },
    { label: "Discovery", sub: "processes + data" },
    { label: "Requirements", sub: "use cases + KPIs" },
    { label: "Design", sub: "architecture + spec" },
    { label: "Build", sub: "code + models" },
    { label: "Ship", sub: "production system" },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-emerald-400 text-xs tracking-widest mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Input &rarr; Action &rarr; Output,
            <br />
            the AI kernel of processes.
          </h2>
        </FadeIn>
        <div className="relative">
          <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-emerald-400/20 via-emerald-400/40 to-emerald-400/20 hidden sm:block" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <FadeIn key={step.label} delay={i * 80}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border border-emerald-400/30 bg-emerald-400/10 flex items-center justify-center font-mono text-emerald-400 text-sm mb-3 relative z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-medium text-sm mb-1">{step.label}</p>
                  <p className="text-xs text-neutral-500 font-mono">{step.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={500}>
          <div className="mt-12 text-center">
            <Link href="/starter-kit" className="text-sm text-emerald-400 hover:text-emerald-300 transition font-mono">
              Explore the full SDLC →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="relative rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <p className="font-mono text-emerald-400 text-xs tracking-widest mb-4">OPEN SOURCE + SERVICES</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Use and contribute to the FDS tool kit.
                <br />
                Scale with us.
              </h2>
              <p className="text-neutral-400 text-lg max-w-lg mx-auto mb-8">
                Get in touch! We always want to see how teams are reorganizing with AI.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition">
                  Get in Touch
                </Link>
                <Link href="/solutions" className="px-6 py-3 border border-white/15 text-white rounded hover:border-emerald-400/40 transition">
                  See What We Build
                </Link>
                <Link href="/starter-kit" className="px-6 py-3 border border-white/15 text-white rounded hover:border-emerald-400/40 transition">
                  View the Starter Kit
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Thesis />
      <IOChain />
      <CTA />
    </main>
  );
}
