"use client";

import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { CollectiveTabs } from "@/components/collectives/CollectiveTabs";
import { CollectiveToolbar } from "@/components/collectives/CollectiveToolbar";
import { CollectiveCard } from "@/components/collectives/CollectiveCard";
import { MOCK_COLLECTIVES } from "@/lib/mock-data";

export default function CollectivesPage() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Black accent bar at very top */}
      <div className="h-1.5 bg-black w-full" />
      <TopNavBar />

      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Tab nav */}
        <CollectiveTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Page title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Collectives</h1>

        {/* Search + filter toolbar */}
        <CollectiveToolbar />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_COLLECTIVES.map((collective) => (
            <CollectiveCard key={collective.id} collective={collective} />
          ))}
        </div>
      </main>
    </div>
  );
}
