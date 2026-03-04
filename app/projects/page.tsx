"use client";

import { useState, useMemo } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { ProjectAnalytics } from "@/components/projects/ProjectAnalytics";
import { CollectiveToolbar } from "@/components/projects/CollectiveToolbar";
import { CollectiveCard } from "@/components/projects/CollectiveCard";
import { CollectiveList } from "@/components/projects/CollectiveList";
import useProjects from "@/hooks/useProjects";
import { transformNFTToCollective } from "@/lib/transformNFTToCollective";

export default function CollectivesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { data, loading, error } = useProjects();

  // Transform API data to CollectiveCardData format
  const collectives = useMemo(() => {
    if (!data?.nfts) return [];
    return data.nfts.map(transformNFTToCollective);
  }, [data]);

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

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">Loading projects...</div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            Failed to load projects. Please try again later.
          </div>
        )}

        {/* Projects View */}
        {!loading && !error && collectives.length > 0 && (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {collectives.map((collective) => (
                  <CollectiveCard key={collective.id} collective={collective} />
                ))}
              </div>
            ) : (
              <CollectiveList collectives={collectives} />
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && !error && collectives.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">No projects found</div>
          </div>
        )}
      </main>
    </div>
  );
}
