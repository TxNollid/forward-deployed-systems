"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/starter-kit", label: "Starter Kit" },
  { href: "/musings", label: "Musings" },
  { href: "/services", label: "Services" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#080808]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest text-white hover:text-emerald-400 transition">
          FDS<span className="text-emerald-400 cursor-blink">_</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            if (link.href === "/services") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-4 px-4 py-2 bg-emerald-500 text-black text-sm font-semibold rounded hover:bg-emerald-400 transition"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded transition ${
                  active
                    ? "text-emerald-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile */}
        <button
          className="sm:hidden text-neutral-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-white/5 bg-[#080808] px-6 py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded text-sm transition ${
                pathname === link.href
                  ? "text-emerald-400 bg-emerald-400/5"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
