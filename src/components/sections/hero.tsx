"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal, LineReveal } from "@/components/text-reveal";
import { Marquee } from "@/components/marquee";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-void overflow-hidden noise">
      {/* Ember background image */}
      <Image
        src="/images/ember-bg.png"
        alt=""
        fill
        className="object-cover opacity-30 pointer-events-none"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-8 md:pt-36 md:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6 md:gap-8">
            <LineReveal delay={0.3}>
              <p className="eyebrow text-blood">
                Biologist. Firefighter. Survivor.
              </p>
            </LineReveal>

            <h1 className="heading-xl text-5xl md:text-6xl lg:text-7xl text-bone">
              <TextReveal text="Protein Built" delay={0.4} />
              <br />
              <TextReveal text="on Principle," delay={0.6} />
              <br />
              <span className="text-blood">
                <TextReveal text="Not Marketing." delay={0.8} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-smoke max-w-lg leading-relaxed"
            >
              Created by a man who holds a PhD in biology, served 10 years
              as a firefighter, and beat cancer. He refused to put anything
              in his body he couldn&apos;t trust. So he made his own.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-blood text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-flame transition-all duration-300"
              >
                Shop Now
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-sm border border-ash text-smoke px-8 py-4 text-sm font-bold tracking-wider uppercase hover:border-smoke hover:text-bone transition-all duration-300"
              >
                His Story
              </a>
            </motion.div>
          </div>

          {/* Product hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blood/20 rounded-full blur-[100px]" />
            </div>
            <div className="relative w-full max-w-sm mx-auto">
              <Image
                src="/images/hero-product.png"
                alt="Dr. Dan's No BS Whey Protein — dramatic studio shot"
                width={500}
                height={667}
                priority
                className="relative z-10 drop-shadow-[0_20px_60px_rgba(220,38,38,0.3)] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="relative z-10 border-t border-b border-ash/50 py-4 mt-8 bg-iron/50"
      >
        <Marquee
          items={[
            "NO FILLERS",
            "NO ARTIFICIAL SWEETENERS",
            "NO PROPRIETARY BLENDS",
            "100% CLEAN WHEY",
            "BATCH TESTED",
            "SCIENCE-BACKED",
            "NO BS",
          ]}
          speed={30}
          className="text-smoke/60"
        />
      </motion.div>
    </section>
  );
}
