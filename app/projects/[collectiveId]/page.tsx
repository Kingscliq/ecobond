import { TopNavBar } from "@/components/layout/TopNavBar";
import { MOCK_COLLECTIVES } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ collectiveId: string }> }) {
  const { collectiveId } = await params;
  const project = MOCK_COLLECTIVES.find((c) => c.id === collectiveId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Black accent bar at very top */}
      <div className="h-1.5 bg-black w-full" />
      <TopNavBar />

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 -ml-4 text-gray-500 hover:text-gray-900">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-8 items-start">
          <div
            className="w-32 h-32 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shrink-0 shadow-sm"
            style={{ backgroundColor: project.logoColor || "#1b3a2d" }}
          >
            {project.logoInitials || project.name.slice(0, 2).toUpperCase()}
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{project.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <Badge variant="secondary" className="font-normal text-sm bg-gray-100 hover:bg-gray-200 text-gray-700">
                  {project.type}
                </Badge>
                <Badge variant="outline" className="font-normal text-sm border-gray-200 text-gray-600 bg-white">
                  {project.visibility}
                </Badge>
                <Badge variant="outline" className="font-normal text-sm border-gray-200 text-gray-600 bg-white">
                  {project.paymentModel}
                </Badge>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {project.description || "No description available for this project."}
            </p>
          </div>
        </div>

        {/* Two Column Layout for Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Impact Metric */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Global Climate Sustainability Impact</h2>
              <div className="flex items-end justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Current Effort Level</span>
                <span className="text-3xl font-bold text-gray-900">{project.effort}%</span>
              </div>
              <Progress value={project.effort} className="h-3 bg-gray-100 [&>div]:bg-[#d4a843]" />
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                This project currently operates at a {project.effort}% global climate sustainability effort, measured against international dilapidation benchmarks.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Key Metrics */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Active Members</h3>
                <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
                  <Users className="w-5 h-5 text-gray-400" />
                  {project.memberCount.toLocaleString()}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Operating Regions</h3>
                <div className="space-y-2">
                  {project.locations.length > 0 ? (
                    project.locations.map((loc) => (
                      <div key={loc} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                        {loc}
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400 italic">No regions specified</span>
                  )}
                </div>
              </div>
            </div>

            {/* Team / Managers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Project Management</h3>
              <div className="space-y-4">
                {project.managers.map((manager, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-gray-100 shadow-sm">
                      <AvatarFallback className="bg-gray-100 text-gray-700 font-medium">
                        {manager.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-900">{manager.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
