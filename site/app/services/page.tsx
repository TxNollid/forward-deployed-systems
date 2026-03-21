"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const offerings = [
  {
    title: "Engagement Support",
    desc: "Bring us in as a force multiplier on an active FDE engagement. We'll operate within your team's structure using the FDS framework to accelerate delivery.",
    items: [
      "Domain knowledge loading and orientation",
      "SDLC facilitation across all 10 phases",
      "AI agent setup and orchestration",
      "Stakeholder mapping and change management",
    ],
  },
  {
    title: "Domain Build-Out",
    desc: "Need an industry domain package that doesn't exist yet? We'll research and build a complete 8-file domain package for your target vertical.",
    items: [
      "Processes, roles, systems, KPIs",
      "Regulatory landscape",
      "Ranked AI opportunities",
      "Industry vocabulary",
    ],
  },
  {
    title: "Framework Customization",
    desc: "Adapt the FDS framework to your team's specific workflow, tooling, and client base. We'll tune the skills, rules, and templates to your context.",
    items: [
      "Skills and playbook customization",
      "Rules of engagement library",
      "CLAUDE.md orchestration setup",
      "Tracker system configuration",
    ],
  },
];

export default function Services() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    interest: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-emerald-400 text-xs tracking-widest mb-3">
            SERVICES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Work with us
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mb-14">
            The framework is open source. The expertise isn&apos;t.
            Get in touch if you want support deploying AI in your environment.
          </p>
        </FadeIn>

        {/* Offerings */}
        <div className="grid sm:grid-cols-3 gap-5 mb-20">
          {offerings.map((o, i) => (
            <FadeIn key={o.title} delay={i * 80}>
              <div className="glow-card p-6 rounded-xl border border-white/10 bg-white/[0.02] h-full">
                <h3 className="font-semibold text-lg mb-3">{o.title}</h3>
                <p className="text-neutral-400 text-sm mb-5 leading-relaxed">{o.desc}</p>
                <ul className="space-y-2">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-emerald-400 flex-shrink-0 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="font-mono text-emerald-400 text-xs tracking-widest mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl font-bold mb-4">Request a demo</h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              We&apos;ll walk through the framework, show you the T&D domain
              package in action, and talk through how this maps to your
              engagement pipeline.
            </p>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-mono">01</span>
                <span>We review your submission and respond within 2 business days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-mono">02</span>
                <span>30-minute call to understand your use case</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-mono">03</span>
                <span>Live demo tailored to your industry and engagement type</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            {submitted ? (
              <div className="p-10 rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-center">
                <p className="text-emerald-400 font-semibold text-xl mb-2">
                  Request received.
                </p>
                <p className="text-neutral-400">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-700 focus:outline-none focus:border-emerald-400/50 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-700 focus:outline-none focus:border-emerald-400/50 transition"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-700 focus:outline-none focus:border-emerald-400/50 transition"
                      placeholder="Company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                      INDUSTRY
                    </label>
                    <input
                      type="text"
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-700 focus:outline-none focus:border-emerald-400/50 transition"
                      placeholder="e.g. T&D Utilities"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                    INTEREST
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-emerald-400/50 transition text-neutral-300"
                  >
                    <option value="" className="bg-[#080808]">Select one...</option>
                    <option value="demo" className="bg-[#080808]">Demo of the framework</option>
                    <option value="engagement" className="bg-[#080808]">Engagement support</option>
                    <option value="domain" className="bg-[#080808]">Domain build-out</option>
                    <option value="customization" className="bg-[#080808]">Framework customization</option>
                    <option value="other" className="bg-[#080808]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1.5 font-mono">
                    WHAT ARE YOU LOOKING TO SOLVE?
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-700 focus:outline-none focus:border-emerald-400/50 transition resize-none"
                    placeholder="Tell us about your use case..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition cursor-pointer"
                >
                  Send Request
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
