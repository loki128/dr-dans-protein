"use client";

import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-wrapper";

const standards = [
  {
    label: "100% Clean Whey",
    detail: "Premium whey protein concentrate with no hidden ingredients.",
  },
  {
    label: "No Fillers",
    detail: "No artificial sweeteners, no proprietary blends, no cheap bulking agents.",
  },
  {
    label: "Batch Tested",
    detail: "Every batch is tested for purity and quality in a certified facility.",
  },
  {
    label: "Simple Label",
    detail: "Short enough to read. Clean enough to trust. Nothing to hide.",
  },
];

export function Purity() {
  return (
    <section id="purity" className="section-padding bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — messaging */}
          <div>
            <FadeIn>
              <p className="eyebrow text-ember-light mb-4">The Standard</p>
              <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl mb-6">
                What&apos;s in the bag is everything.{" "}
                <span className="text-cream/50">
                  What&apos;s not in the bag is the point.
                </span>
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed max-w-lg">
                Most protein brands hide behind proprietary blends, artificial
                sweeteners, and ingredients you can&apos;t pronounce. Dr.
                Dan&apos;s is different. A biologist formulated this protein to
                meet the standard he holds for his own body — after cancer,
                after years of service, with zero tolerance for shortcuts.
              </p>
            </FadeIn>
          </div>

          {/* Right — standards grid */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((item) => (
              <StaggerItem key={item.label}>
                <div className="p-6 rounded-xl border border-cream/10 bg-cream/[0.03] hover:bg-cream/[0.06] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-ember mb-4" />
                  <h3 className="font-semibold text-cream mb-2 text-sm">
                    {item.label}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
