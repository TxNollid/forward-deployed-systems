"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      // Get one free at https://formspree.io
      const res = await fetch("https://formspree.io/f/maqpgndj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-lg mx-auto w-full">
        {submitted ? (
          <FadeIn>
            <div className="text-center py-16">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Sent.</h2>
              <p className="text-neutral-400">We&apos;ll reply within 2 business days.</p>
            </div>
          </FadeIn>
        ) : (
          <>
            <FadeIn>
              <p className="font-mono text-accent text-xs tracking-widest mb-3">GET IN TOUCH</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Say hello.</h1>
              <p className="text-neutral-400 mb-8">
                Tell us what you&apos;re working on. We always want to see how teams are reorganizing with AI.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent/50 transition"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent/50 transition"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent/50 transition"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you working on?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent/50 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-accent text-black font-semibold rounded hover:bg-accent transition disabled:opacity-60 cursor-pointer"
                >
                  {loading ? "Sending…" : "Send"}
                </button>
              </form>
            </FadeIn>
          </>
        )}
      </div>
    </main>
  );
}
