"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal text-cream overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="eyebrow text-sage-light"
            >
              Clean Protein. Real Science. No Compromises.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-xl text-4xl md:text-5xl lg:text-6xl"
            >
              Protein Built on{" "}
              <span className="text-ember-light">Principle</span>,{" "}
              Not Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-cream/70 max-w-lg leading-relaxed"
            >
              Created by a biologist, firefighter, and cancer survivor who
              refused to put anything in his body he couldn&apos;t trust.
              100% clean. Zero compromises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full bg-cream text-charcoal px-8 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
              >
                Shop Now
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 text-cream px-8 py-3.5 text-sm font-medium hover:border-cream/60 transition-colors"
              >
                The Story Behind It
              </a>
            </motion.div>
          </div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-ember/10 blur-3xl rounded-full scale-75" />
              <Image
                src="/images/product-real.jpg"
                alt="Dr. Dan's No BS Whey Protein — 16oz and 32oz sizes"
                width={600}
                height={700}
                priority
                className="relative z-10 drop-shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
