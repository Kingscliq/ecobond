import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-[#faf8f3] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-instrument)] text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Build Together.{" "}
          <span className="block">Invest Together.</span>
          <span className="block">Anywhere.</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Ecobond helps diaspora communities create and join investment
          collectives to fund impactful opportunities across Africa, securely,
          transparently, and together.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#1b3a2d] hover:bg-[#152e24] text-white rounded-lg h-11 px-8 text-sm font-medium"
        >
          <Link href="/collectives">Get started</Link>
        </Button>
      </div>
    </section>
  );
}
