"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount } from "@reown/appkit/react";

const navLinks = [
  { label: "Circles", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  // { label: "Pricing", href: "/pricing" },
  // { label: "Blog", href: "/blog" },
  // { label: "Raise", href: "/raise", isNew: true },
];

export function PublicNavBar() {
  const { open } = useAppKit();
  const { address, isConnected } =
    useAppKitAccount();
  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf8f3] border-b border-transparent">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-900"
          >
            <path
              d="M12 22V12M12 12C12 7 16 3 21 3C21 8 18 12 12 12ZM12 12C12 7 8 3 3 3C3 8 6 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Ecobond
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* CTA — onClick will trigger wallet connection */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => {
              open();
            }}
            className="group text-xs font-medium bg-[#1b3a2d] hover:bg-[#152e24] text-white rounded-md h-8 px-4 flex items-center gap-1.5 transition-all"
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
          {/* <Button
            variant="outline"
            size="sm"
            className="text-xs font-medium border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md h-8"
          >
            Join Collective (Member)
          </Button> */}
        </div>
      </div>
    </header>
  );
}
