"use client";

import Image from "next/image";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    size: "16 oz",
    servings: "~15 servings",
    price: "$34.99",
    image: "/images/product-real.jpg",
    popular: false,
  },
  {
    size: "32 oz",
    servings: "~30 servings",
    price: "$54.99",
    image: "/images/product-real.jpg",
    popular: true,
  },
];

const highlights = [
  "120 calories per serving",
  "High protein per scoop",
  "Whey protein concentrate",
  "No artificial sweeteners",
];

export function Product() {
  return (
    <section id="product" className="section-padding bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="eyebrow text-ember mb-4">The Product</p>
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Strength in Every Scoop
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            One product. Done right. Dr. Dan&apos;s Whey Protein in two sizes —
            choose what fits your routine.
          </p>
        </FadeIn>

        {/* Nutrition highlights */}
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
          {highlights.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="px-4 py-2 text-xs font-medium bg-stone/50 text-charcoal/80 border-0 rounded-full"
            >
              {item}
            </Badge>
          ))}
        </FadeIn>

        {/* Product cards */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map((product) => (
            <StaggerItem key={product.size}>
              <div
                className={`relative flex flex-col items-center p-8 rounded-2xl border transition-all hover:shadow-lg ${
                  product.popular
                    ? "bg-charcoal text-cream border-charcoal shadow-md"
                    : "bg-warm-white text-charcoal border-stone/50"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-ember text-cream border-0 rounded-full px-4 py-1 text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="relative w-40 h-48 mb-6">
                  <Image
                    src={product.image}
                    alt={`Dr. Dan's Whey Protein — ${product.size}`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>

                <p
                  className={`eyebrow mb-1 ${product.popular ? "text-ember-light" : "text-sage"}`}
                >
                  Whey Protein
                </p>
                <p className="font-serif text-2xl font-bold mb-1">
                  {product.size}
                </p>
                <p
                  className={`text-sm mb-4 ${product.popular ? "text-cream/60" : "text-charcoal/50"}`}
                >
                  {product.servings}
                </p>

                <p className="text-3xl font-bold mb-6">{product.price}</p>

                <button
                  className={`w-full rounded-full py-3.5 text-sm font-semibold transition-colors ${
                    product.popular
                      ? "bg-cream text-charcoal hover:bg-white"
                      : "bg-charcoal text-cream hover:bg-charcoal/90"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.3}>
          <p className="text-center text-charcoal/40 text-sm mt-8">
            Secure checkout powered by Stripe. Free shipping on orders over $50.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
