"use client";

import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { ProjectAnalytics } from "@/components/projects/ProjectAnalytics";
import { CollectiveToolbar } from "@/components/projects/CollectiveToolbar";
import { CollectiveCard } from "@/components/projects/CollectiveCard";
import { CollectiveList } from "@/components/projects/CollectiveList";
import { MOCK_COLLECTIVES } from "@/lib/mock-data";

export default function CollectivesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Black accent bar at very top */}
      <div className="h-1.5 bg-black w-full" />
      <TopNavBar />

      <main className="max-w-7xl mx-auto px-6 py-6">
        <ProjectAnalytics />

        {/* Page title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Projects</h1>

        {/* Search + filter toolbar */}
        <CollectiveToolbar viewMode={viewMode} setViewMode={setViewMode} />

        {/* Projects View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_COLLECTIVES.map((collective) => (
              <CollectiveCard key={collective.id} collective={collective} />
            ))}
          </div>
        ) : (
          <CollectiveList collectives={MOCK_COLLECTIVES} />
        )}
      </main>
    </div>
  );
}
