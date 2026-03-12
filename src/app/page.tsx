import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Purity } from "@/components/sections/purity";
import { Product } from "@/components/sections/product";
import { Audience } from "@/components/sections/audience";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Purity />
        <Product />
        <Audience />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
