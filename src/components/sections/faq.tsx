"use client";

import { FadeIn } from "@/components/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes Dr. Dan's protein different from other brands?",
    a: "Most protein brands prioritize margins over quality — using fillers, artificial sweeteners, and proprietary blends that hide what's actually inside. Dr. Dan's is formulated by a biologist with a PhD who built this protein to the standard he holds for his own body. No shortcuts. No hidden ingredients. Just clean, effective protein.",
  },
  {
    q: "Is this protein safe for people with food sensitivities?",
    a: "Dr. Dan's Whey Protein is made with a simple, transparent ingredient list specifically because many customers are health-sensitive or ingredient-conscious. That said, it does contain whey (a dairy derivative). If you have specific allergies, we always recommend reviewing the full ingredient label or consulting your healthcare provider.",
  },
  {
    q: "What are the exact ingredients?",
    a: "100% whey protein concentrate. That's it. No artificial sweeteners, no artificial flavors, no fillers, no proprietary blends. The full nutrition facts are printed on every bag — we believe in total transparency.",
  },
  {
    q: "Where is the protein sourced?",
    a: "Our whey protein is sourced from trusted, quality-certified suppliers. Every batch is tested for purity and quality in a certified facility before it reaches you.",
  },
  {
    q: "How should I use it?",
    a: "Mix 1 scoop (33g) with 8-10 oz of water, milk, or your preferred liquid and shake well. Use it as a post-workout recovery shake, a protein-rich snack, or blend it into smoothies. It's versatile enough to fit any routine.",
  },
  {
    q: "Do you offer refunds?",
    a: "We stand behind our product. If you're not satisfied with your purchase, reach out to us within 30 days and we'll make it right. Your trust matters more than a single sale.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center mb-12">
          <p className="eyebrow text-ember mb-4">Questions</p>
          <h2 className="heading-lg text-3xl md:text-4xl text-charcoal">
            Frequently Asked
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="border-stone/50"
              >
                <AccordionTrigger className="text-left font-medium text-charcoal hover:text-charcoal/80 py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/60 leading-relaxed text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
