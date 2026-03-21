"use client";

import FadeIn from "@/components/FadeIn";

const posts = [
  {
    date: "Coming soon",
    tag: "FRAMEWORK",
    title: "Why the gap isn't technical",
    excerpt:
      "The hardest part of deploying AI in enterprises isn't the model. It's the processes, the politics, and the institutional knowledge that nobody has written down.",
    readTime: null,
    draft: true,
  },
  {
    date: "Coming soon",
    tag: "T&D UTILITIES",
    title: "What SAIDI actually tells you",
    excerpt:
      "Reliability metrics get quoted in every utility conversation. Most people misread them. Here's what SAIDI, SAIFI, and CAIDI actually mean — and where AI can move the needle.",
    readTime: null,
    draft: true,
  },
  {
    date: "Coming soon",
    tag: "SDLC",
    title: "OODA loops in enterprise AI deployments",
    excerpt:
      "Why linear project management fails for AI engagements and how structuring work as nested OODA loops changes what you prioritize and when.",
    readTime: null,
    draft: true,
  },
  {
    date: "Coming soon",
    tag: "FIELD NOTES",
    title: "The tribal knowledge problem",
    excerpt:
      "Every enterprise has knowledge that lives in people's heads and nowhere else. Here's how to find it, extract it, and make it machine-readable before the person retires.",
    readTime: null,
    draft: true,
  },
];

const topics = [
  "Forward Deployed Engineering",
  "AI in Enterprises",
  "T&D Utilities",
  "SDLC Design",
  "Domain Knowledge",
  "OODA Loops",
  "Field Notes",
  "Open Source",
];

export default function Musings() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-emerald-400 text-xs tracking-widest mb-3">
            MUSINGS
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Writings & ideas
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mb-14">
            Notes from building, deploying, and thinking about AI in complex
            environments. Unfiltered and ongoing.
          </p>
        </FadeIn>

        {/* Topics */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {topics.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono border border-white/10 rounded text-neutral-400 bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Posts */}
        <div className="space-y-px">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 60}>
              <div className="group py-7 border-t border-white/5 cursor-default">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-neutral-600 border border-white/5 px-2 py-0.5 rounded">
                        {post.tag}
                      </span>
                      <span className="font-mono text-xs text-neutral-600">{post.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {post.draft ? (
                      <span className="font-mono text-xs text-neutral-700 border border-white/5 px-2 py-1 rounded">
                        Draft
                      </span>
                    ) : (
                      <span className="text-emerald-400 text-lg">→</span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-16 p-8 rounded-xl border border-white/10 bg-white/[0.02] text-center">
            <p className="font-mono text-xs text-neutral-500 mb-3 tracking-wider">
              STAY IN THE LOOP
            </p>
            <p className="text-neutral-300 mb-2">
              Posts ship when ideas are ready. No cadence, no fluff.
            </p>
            <p className="text-sm text-neutral-500">
              Follow{" "}
              <a
                href="https://github.com/TxNollid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                @TxNollid on GitHub
              </a>{" "}
              to get notified.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
