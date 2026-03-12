"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "The Standard", href: "#purity" },
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-stone/50">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold tracking-tight text-charcoal">
          Dr. Dan&apos;s
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-5 py-2 text-sm font-medium hover:bg-charcoal/90 transition-colors"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-cream border-b border-stone/50"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-charcoal/70 hover:text-charcoal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#product"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-5 py-3 text-sm font-medium"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
