"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CollectiveTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const tabs = [
  { value: "joined", label: "Joined", count: 1 },
  { value: "admin", label: "Admin", count: null },
  { value: "following", label: "Following", count: null },
  { value: "explore", label: "Explore", count: 14 },
];

export function CollectiveTabs({ activeTab, onTabChange }: CollectiveTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="mb-6">
      <TabsList className="h-auto bg-transparent p-0 gap-0 border-b border-gray-200 w-full justify-start rounded-none">
        {tabs.map(({ value, label, count }) => (
          <TabsTrigger
            key={value}
            value={value}
            style={{
              borderBottom: activeTab === value ? "2px solid #111827" : "2px solid transparent",
              borderRadius: 0,
              marginBottom: "-2px",
            }}
            className="
              relative h-9 px-3 bg-transparent text-sm font-medium
              text-gray-500 data-[state=active]:text-gray-900 data-[state=active]:shadow-none
              data-[state=active]:bg-transparent
              hover:text-gray-700 transition-colors
              flex items-center gap-1.5
            "
          >
            {label}
            {count !== null && (
              <span
                className={`text-xs font-medium ${
                  activeTab === value
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {count}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
