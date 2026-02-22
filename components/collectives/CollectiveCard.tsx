"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users } from "lucide-react";
import Link from "next/link";

export interface CollectiveCardData {
  id: string;
  name: string;
  logo?: string;
  logoColor?: string;
  logoInitials?: string;
  type: string;
  locations: string[];
  memberCount: number;
  visibility: "Public" | "Private";
  paymentModel: "Free" | "Paid";
  managers: { name: string; avatar?: string; initials: string }[];
}

function VisibilityPill({ value }: { value: "Public" | "Private" }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-gray-100 text-gray-600 text-[11px] font-medium">
      {value}
    </span>
  );
}

function PaymentPill({ value }: { value: "Free" | "Paid" }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-gray-100 text-gray-600 text-[11px] font-medium">
      {value}
    </span>
  );
}

export function CollectiveCard({ collective }: { collective: CollectiveCardData }) {
  return (
    <Link href={`/collectives/${collective.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer h-full">
        {/* Logo */}
        <div className="flex items-start justify-between">
          {collective.logo ? (
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-100 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={collective.logo} alt={collective.name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ backgroundColor: collective.logoColor || "#1b3a2d" }}
            >
              {collective.logoInitials || collective.name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
            {collective.name}
          </h3>
        </div>

        {/* Type badge */}
        <div>
          <Badge
            variant="outline"
            className="text-[11px] px-2 py-0.5 border-gray-300 text-gray-600 rounded-sm font-normal gap-1"
          >
            <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
            {collective.type}
          </Badge>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-1">
          {collective.locations.map((loc) => (
            <div key={loc} className="flex items-center gap-1.5 text-[12px] text-gray-500">
              <MapPin className="w-3 h-3 shrink-0 text-gray-400" />
              <span className="truncate">{loc}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <Users className="w-3 h-3 text-gray-400" />
            <span>
              {collective.memberCount.toLocaleString()}{" "}
              {collective.memberCount === 1 ? "member" : "members"}
            </span>
          </div>
          <VisibilityPill value={collective.visibility} />
          <PaymentPill value={collective.paymentModel} />
        </div>

        {/* Managers row */}
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1.5">
            {collective.managers.slice(0, 3).map((manager) => (
              <Avatar
                key={manager.initials}
                className="w-5 h-5 border border-white ring-0"
              >
                <AvatarImage src={manager.avatar} alt={manager.name} />
                <AvatarFallback className="text-[8px] bg-gray-200 text-gray-600 font-medium">
                  {manager.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-[11px] text-gray-400 truncate">
            Managed by{" "}
            {collective.managers
              .slice(0, 2)
              .map((m) => m.name.split(" ")[0])
              .join(", ")}
            {collective.managers.length > 2 ? ", ..." : ""}
          </span>
        </div>
      </div>
    </Link>
  );
}
