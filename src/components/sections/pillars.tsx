"use client";

import { StaggerGroup, StaggerItem } from "@/components/motion-wrapper";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 12v6m0 12v6m-9-15h6m12 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "The Scientist",
    credential: "PhD in Biology",
    description:
      "Dr. Dan understands what goes into your body at a molecular level. Every ingredient was chosen with scientific rigor, not marketing appeal.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 14l-8 12h16l-8-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 26v8h8v-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "The First Responder",
    credential: "10 Years as a Firefighter",
    description:
      "A decade of running toward danger built the discipline and integrity behind everything this brand stands for.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 16c-4 0-7 3-7 6.5S20 29 24 33c4-4 7-7 7-10.5S28 16 24 16z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "The Survivor",
    credential: "Cancer Survivor",
    description:
      "Facing his own health crisis transformed how Dr. Dan thinks about what we put in our bodies. Purity isn't a marketing angle. It's personal.",
  },
];

export function Pillars() {
  return (
    <section id="story" className="section-padding bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="eyebrow text-ember mb-4">The Man Behind the Brand</p>
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Three lives. One mission.
          </h2>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-warm-white border border-stone/50 hover:border-stone transition-colors">
                <div className="text-ember">{pillar.icon}</div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
                    {pillar.title}
                  </h3>
                  <p className="eyebrow text-sage text-[0.65rem] mb-3">
                    {pillar.credential}
                  </p>
                </div>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
