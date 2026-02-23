"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount } from "@reown/appkit/react";

export function HeroSection() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  return (
    <section className="bg-[#faf8f3] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-instrument)] text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Build Together. <span className="block">Invest Together.</span>
          <span className="block">Anywhere.</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Ecobond helps diaspora communities create and join investment
          collectives to fund impactful opportunities across Africa, securely,
          transparently, and together.
        </p>
        <Button
          size="sm"
          onClick={() => {
            open();
          }}
          className="group w-fit mx-auto bg-[#1b3a2d] hover:bg-[#152e24] text-white rounded-lg h-9 px-5 
          text-sm font-medium inline-flex items-center gap-2"
        >
          {isConnected && address ? (
            <span className="truncate max-w-[9.5rem]">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>
          ) : (
            "Get Started"
          )}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </section>
  );
}
