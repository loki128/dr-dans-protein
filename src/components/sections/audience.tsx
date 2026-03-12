"use client";

import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-wrapper";

const personas = [
  {
    statement: "You check ingredients before you check reviews.",
    detail: "For the label readers who want to know exactly what they're consuming.",
  },
  {
    statement: "You want performance without compromise.",
    detail: "Clean fuel for your body — no junk, no shortcuts, no asterisks.",
  },
  {
    statement: "You've been burned by supplements that promise everything.",
    detail: "Tired of proprietary blends and ingredient lists that need a translator.",
  },
  {
    statement: "You believe what goes in your body matters.",
    detail: "Health-sensitive, wellness-minded, and unwilling to settle for less.",
  },
];

export function Audience() {
  return (
    <section className="section-padding bg-stone/30">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="eyebrow text-sage mb-4">Who This Is For</p>
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Built for People Who Read Labels
          </h2>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {personas.map((persona, i) => (
            <StaggerItem key={i}>
              <div className="p-8 rounded-2xl bg-warm-white border border-stone/50 hover:border-stone transition-colors h-full">
                <p className="font-serif text-lg font-semibold text-charcoal mb-3 leading-snug">
                  &ldquo;{persona.statement}&rdquo;
                </p>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {persona.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
