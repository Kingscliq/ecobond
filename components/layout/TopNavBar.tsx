"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings,
  UserPlus,
  DollarSign,
  CalendarDays,
  LayoutGrid,
  HelpCircle,
  Bell,
  Settings2,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leftNav = [
  { href: "/settings", icon: Settings, label: "Settings" },
  { href: "/collectives", icon: UserPlus, label: "Collectives", matchPath: "/collectives" },
  { href: "/payments", icon: DollarSign, label: "Payments" },
  { href: "/calendar", icon: CalendarDays, label: "Calendar" },
  { href: "/overview", icon: LayoutGrid, label: "Overview" },
];

const rightNav = [
  { href: "/help", icon: HelpCircle, label: "Help" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/account", icon: Settings2, label: "Account" },
  { href: "/logout", icon: LogOut, label: "Sign out" },
];

export function TopNavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-12 bg-white border-b border-gray-100">
      {/* Left nav icons */}
      <nav className="flex items-center gap-1">
        {leftNav.map(({ href, icon: Icon, label, matchPath }) => {
          const active = matchPath
            ? pathname.startsWith(matchPath)
            : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                active
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon
                className="w-[18px] h-[18px]"
                strokeWidth={active ? 2 : 1.5}
              />
              {active && (
                <span className="ml-1 text-sm font-medium text-gray-900">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right nav icons + avatar */}
      <nav className="flex items-center gap-1">
        {rightNav.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </Link>
        ))}
        <Avatar className="w-7 h-7 ml-1 cursor-pointer">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-blue-500 text-white text-xs font-semibold">
            JK
          </AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}
