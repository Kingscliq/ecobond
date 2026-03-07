"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_COLLECTIVES } from "@/lib/mock-data";

const chartConfig = {
  advancement: {
    label: "Advancement",
    color: "#d4a843",
  },
  dilapidation: {
    label: "Dilapidation",
    color: "#1b3a2d",
  },
} satisfies ChartConfig;

export function ProjectAnalytics() {
  const [timeRange, setTimeRange] = React.useState("90d");

  // Generate dynamic data from collectives
  const avgEffort = Math.round(
    MOCK_COLLECTIVES.reduce((sum, curr) => sum + curr.effort, 0) /
      (MOCK_COLLECTIVES.length || 1)
  );
  
  // We'll simulate historical data based on the current average effort
    const generateChartData = React.useCallback(() => {
    const data = [];
    const endDate = new Date("2024-06-30");
    let currentAdvancement = avgEffort - 30; // Start lower 3 months ago
    
    for (let i = 90; i >= 0; i--) {
      const date = new Date(endDate);
      date.setDate(date.getDate() - i);
      
      // Use deterministic calculation based on iterator instead of random
      const pseudoRandom = Math.sin(i * 1.5) * 4 - 1.5;
      currentAdvancement = Math.min(
        100, 
        Math.max(0, currentAdvancement + (i === 0 ? 0 : pseudoRandom) + (avgEffort - currentAdvancement) * 0.05)
      );
      
      const pseudoRandomDilapidation = Math.cos(i * 1.5) * 15;
      const dilapidation = Math.max(0, 100 - currentAdvancement - Math.abs(pseudoRandomDilapidation));

      data.push({
        date: date.toISOString().split('T')[0],
        advancement: Math.round(currentAdvancement),
        dilapidation: Math.round(dilapidation)
      });
    }
    // Make sure the last day matches the exact average effort
    if (data.length > 0) {
      data[data.length - 1].advancement = avgEffort;
      data[data.length - 1].dilapidation = Math.max(0, 100 - avgEffort - 5);
    }
    
    return data;
  }, [avgEffort]);
  
  // Memoize it so it doesn't recalculate on every render
  const chartData = React.useMemo(() => generateChartData(), [generateChartData]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const stats = [
    { label: "Total Projects", value: "12" },
    { label: "Active Members", value: "1,234" },
    { label: "Total Volume", value: "$5.2M" },
  ];

  return (
    <div className="flex flex-col gap-6 mb-6">
      {/* Global Climate Sustainability Impact Chart - Interactive Area */}
      <Card>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Global Climate Sustainability Impact</CardTitle>
            <CardDescription>
              Showing advancement vs dilapidation for the last {timeRange === "90d" ? "3 months" : timeRange === "30d" ? "30 days" : "7 days"}
            </CardDescription>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="w-[160px] rounded-lg sm:ml-auto"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillAdvancement" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-advancement)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-advancement)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillDilapidation" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-dilapidation)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-dilapidation)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value: string) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="dilapidation"
                type="natural"
                fill="url(#fillDilapidation)"
                stroke="var(--color-dilapidation)"
                stackId="a"
              />
              <Area
                dataKey="advancement"
                type="natural"
                fill="url(#fillAdvancement)"
                stroke="var(--color-advancement)"
                stackId="1"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-center shadow-sm"
          >
            <p className="text-sm text-gray-500 font-medium mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
