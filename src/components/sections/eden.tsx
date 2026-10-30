import Image from "next/image";
import { FadeIn } from "@/components/motion-wrapper";

const AMAZON_URL = "https://www.amazon.com/dp/B0HGZM9X6S";

export function Eden() {
  return (
    <section id="eating-from-eden" className="section-padding bg-warm-white border-y border-stone/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-center">
          <FadeIn className="mx-auto w-full max-w-[320px] md:max-w-[400px]">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eating from Eden on Amazon"
              className="block rounded-md shadow-2xl shadow-charcoal/25 hover:-translate-y-1 transition-transform"
            >
              <Image
                src="/images/eating-from-eden-cover.png"
                alt="Eating from Eden: Harnessing the Power of Nature's Phytochemicals for Optimal Health and Longevity, by Joseph D. Husband, PhD"
                width={892}
                height={1151}
                sizes="(min-width: 768px) 400px, 320px"
                className="h-auto w-full rounded-md"
                priority
              />
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="eyebrow text-ember mb-4">The Book</p>
            <h2 className="heading-lg text-4xl md:text-5xl lg:text-6xl text-charcoal mb-3">
              Eating from Eden
            </h2>
            <p className="font-serif text-lg md:text-xl text-charcoal/70 mb-2">
              Harnessing the Power of Nature&apos;s Phytochemicals for Optimal Health and Longevity
            </p>
            <p className="eyebrow text-sage mb-8">By Joseph D. Husband, PhD</p>

            <div className="space-y-4 text-charcoal/75 leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                What if healthier aging begins not with expensive supplements or restrictive diets, but with the
                remarkable biological diversity of the foods we eat?
              </p>
              <p>
                In <em>Eating from Eden</em>, Dr. Husband explores the science connecting nutrition, phytochemicals,
                cellular biology, the gut microbiome, and healthy aging.
              </p>
              <p className="font-semibold text-charcoal">No miracle foods. No fad diets. Just biology.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-8 py-3.5 text-sm font-medium hover:bg-charcoal/90 transition-colors"
              >
                Get the Book on Amazon
              </a>
              <span className="text-charcoal/40 text-xs tracking-wide">ISBN 9798193497073</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
