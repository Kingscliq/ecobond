"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search, LayoutGrid, List } from "lucide-react";

export function CollectiveToolbar({
  viewMode,
  setViewMode,
}: {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {/* Search */}
      <div className="relative flex-1 max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <Input
          type="text"
          placeholder="Find a collective"
          className="pl-9 h-9 text-sm border-gray-200 bg-white placeholder:text-gray-400 rounded-md"
        />
      </div>

      {/* Filter */}
      <Select>
        <SelectTrigger className="h-9 w-auto min-w-[100px] text-sm border-gray-200 bg-white gap-1.5 rounded-md">
          <Filter className="w-3.5 h-3.5 text-gray-500" />
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="real-estate">Real Estate</SelectItem>
          <SelectItem value="venture-capital">Venture Capital</SelectItem>
          <SelectItem value="alternative">Alternative Investments</SelectItem>
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select defaultValue="name-az">
        <SelectTrigger className="h-9 w-auto min-w-[120px] text-sm border-gray-200 bg-white rounded-md">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name-az">Name (A-Z)</SelectItem>
          <SelectItem value="name-za">Name (Z-A)</SelectItem>
          <SelectItem value="members">Most Members</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
        </SelectContent>
      </Select>

      {/* View Toggles */}
      <div className="flex bg-white border border-gray-200 rounded-md p-1 ml-auto">
        <button
          onClick={() => setViewMode("list")}
          className={`p-1.5 rounded-sm transition-colors ${
            viewMode === "list"
              ? "bg-gray-100 text-gray-900 shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
          aria-label="List View"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => setViewMode("grid")}
          className={`p-1.5 rounded-sm transition-colors ${
            viewMode === "grid"
              ? "bg-gray-100 text-gray-900 shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
          aria-label="Grid View"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
