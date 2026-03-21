import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
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
          <Link href="/musings" className="hover:text-white transition">
            Musings
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Contact
          </Link>
        </div>
        <p className="text-xs text-neutral-600">CC BY-NC-SA 4.0</p>
      </div>
    </footer>
  );
}
