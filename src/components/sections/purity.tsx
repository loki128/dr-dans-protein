"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-wrapper";

const standards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "100% Clean Whey",
    detail: "Premium whey protein concentrate. No mystery blends.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Zero Fillers",
    detail: "No artificial sweeteners. No bulking agents. No junk.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Batch Tested",
    detail: "Every production run tested in a certified facility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Transparency",
    detail: "Read the label. That's all that's in it. Nothing to hide.",
  },
];

export function Purity() {
  return (
    <section id="purity" className="relative section-padding bg-iron noise overflow-hidden">
      {/* Diagonal red accent */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blood/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — big statement */}
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <p className="eyebrow text-blood mb-4">The Standard</p>
              <h2 className="heading-xl text-4xl md:text-5xl text-bone mb-6">
                What&apos;s in the bag is everything.
              </h2>
              <p className="text-smoke text-lg leading-relaxed mb-8">
                After cancer, Dan stopped tolerating &ldquo;good enough.&rdquo; Every
                ingredient was chosen with the same rigor he&apos;d apply in a
                biology lab — because it has to be. This isn&apos;t a marketing
                angle. It&apos;s a personal standard forged through hardship.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-blood/50 to-transparent" />
            </FadeIn>

            {/* Gym product shot */}
            <FadeIn delay={0.3} className="mt-10 hidden lg:block">
              <div className="relative rounded-lg overflow-hidden border border-ash/30">
                <Image
                  src="/images/product-gym.png"
                  alt="Dr. Dan's No BS Whey Protein — front and back packaging in industrial setting"
                  width={600}
                  height={450}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron/60 to-transparent" />
              </div>
            </FadeIn>
          </div>

          {/* Right — standards cards */}
          <StaggerGroup className="space-y-4">
            {standards.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-start gap-5 p-6 rounded-lg bg-steel/50 border border-ash/50 hover:border-blood/30 transition-colors duration-300"
                >
                  <div className="shrink-0 mt-0.5 text-blood group-hover:text-flame transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-bone text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-smoke text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
