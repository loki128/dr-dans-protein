"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, Parallax } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    size: "16 oz",
    servings: "~15 servings",
    price: "$34.99",
    image: "/images/hero-product.png",
    popular: false,
  },
  {
    size: "32 oz",
    servings: "~30 servings",
    price: "$54.99",
    image: "/images/hero-product.png",
    popular: true,
  },
];

const highlights = [
  "120 cal / serving",
  "Whey concentrate",
  "No sweeteners",
  "Batch tested",
];

export function Product() {
  return (
    <section id="product" className="relative section-padding bg-void noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blood/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blood/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-8">
          <p className="eyebrow text-blood mb-4">The Product</p>
          <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl text-bone mb-4">
            Strength in Every Scoop
          </h2>
          <p className="text-smoke text-lg max-w-xl mx-auto">
            One product. Done right. No lineup of 47 flavors to distract from
            what matters — what&apos;s actually inside.
          </p>
        </FadeIn>

        {/* Highlights strip */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3 mb-16">
          {highlights.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-smoke border border-ash rounded-sm"
            >
              {item}
            </span>
          ))}
        </FadeIn>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col items-center p-8 md:p-10 rounded-lg border transition-all duration-300 ${
                product.popular
                  ? "bg-steel border-blood/40 shadow-[0_0_40px_rgba(220,38,38,0.1)]"
                  : "bg-steel/50 border-ash/50 hover:border-ash"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blood text-white border-0 rounded-sm px-4 py-1 text-[0.65rem] font-bold tracking-widest uppercase">
                    Best Value
                  </Badge>
                </div>
              )}

              {/* Product image with glow */}
              <div className="relative w-44 h-52 mb-8">
                {product.popular && (
                  <div className="absolute inset-0 bg-blood/10 blur-3xl rounded-full scale-150 pointer-events-none" />
                )}
                <Image
                  src={product.image}
                  alt={`Dr. Dan's Whey Protein - ${product.size}`}
                  fill
                  className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                  sizes="176px"
                />
              </div>

              <p className="eyebrow text-blood/80 mb-1">Whey Protein</p>
              <p className="font-serif text-3xl font-bold text-bone mb-1">
                {product.size}
              </p>
              <p className="text-xs text-smoke mb-6">{product.servings}</p>

              <p className="text-4xl font-bold text-bone mb-8 tabular-nums">
                {product.price}
              </p>

              <button
                className={`w-full rounded-sm py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  product.popular
                    ? "bg-blood text-white hover:bg-flame"
                    : "bg-ash text-bone hover:bg-smoke/20 border border-ash"
                }`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-smoke/50 text-xs mt-10 tracking-wide">
            Secure checkout. Free shipping over $50. 30-day satisfaction guarantee.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
