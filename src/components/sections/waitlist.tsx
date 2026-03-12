"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion-wrapper";
import { Input } from "@/components/ui/input";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Connect to email service (Resend, Mailchimp, etc.)
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="eyebrow text-ember-light mb-4">Stay in the Loop</p>
          <h2 className="heading-lg text-3xl md:text-4xl mb-4">
            New Flavors. New Formulas.{" "}
            <span className="text-cream/50">You&apos;ll Know First.</span>
          </h2>
          <p className="text-cream/50 text-lg mb-10 max-w-lg mx-auto">
            Join the list and be the first to hear about new products, restocks,
            and what Dr. Dan is working on next.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {submitted ? (
            <div className="p-6 rounded-2xl border border-sage/30 bg-sage/10">
              <p className="font-semibold text-cream mb-1">You&apos;re in.</p>
              <p className="text-cream/60 text-sm">
                We&apos;ll keep you posted. No spam — that&apos;s a promise.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full bg-cream/10 border-cream/15 text-cream placeholder:text-cream/30 h-12 px-5 focus-visible:ring-ember"
              />
              <button
                type="submit"
                className="rounded-full bg-cream text-charcoal px-8 h-12 text-sm font-semibold hover:bg-white transition-colors shrink-0"
              >
                Join the List
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
