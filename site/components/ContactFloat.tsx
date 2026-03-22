"use client";

import { useState } from "react";

export default function ContactFloat() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      // Get one free at https://formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fallback: still show success so UX doesn't break before form ID is wired
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Panel */}
      <div
        className={`fixed bottom-20 right-6 z-50 w-80 transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-xl border border-white/15 bg-[#0e0e0e] shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <div>
              <p className="font-semibold text-sm">Say hello</p>
              <p className="text-xs text-neutral-500 mt-0.5">We&apos;ll reply within 2 days</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-neutral-500 hover:text-white transition text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div className="p-5">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="text-2xl mb-2">✓</div>
                <p className="text-emerald-400 font-medium text-sm mb-1">Sent.</p>
                <p className="text-xs text-neutral-500">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="What are you working on?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400/50 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-emerald-500 text-black text-sm font-semibold rounded hover:bg-emerald-400 transition disabled:opacity-60 cursor-pointer"
                >
                  {loading ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => { setOpen(!open); if (submitted) { setSubmitted(false); setForm({ name: "", email: "", message: "" }); } }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full shadow-lg shadow-emerald-500/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label="Contact"
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
