import { Badge } from "@/components/ui/badge";
import { TrendingDown } from "lucide-react";

interface AssetHeaderProps {
  logoColor?: string;
  logoInitials?: string;
  name: string;
  type: string;
  invested: number;
  currentValue: number;
  changePercent: number;
}

export function AssetHeader({
  logoColor = "#f97316",
  logoInitials = "",
  name,
  type,
  invested,
  currentValue,
  changePercent,
}: AssetHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-6 px-6 py-5 bg-white border-b border-gray-200">
      {/* Left: logo + name + type */}
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-base font-bold shrink-0"
          style={{ backgroundColor: logoColor }}
        >
          {logoInitials}
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">{name}</h1>
          <Badge
            variant="outline"
            className="mt-1 text-[11px] px-2 py-0.5 border-gray-200 text-gray-500 rounded-sm font-normal"
          >
            {type}
          </Badge>
        </div>
      </div>

      {/* Right: financial stats */}
      <div className="flex items-center gap-10 shrink-0">
        <div className="text-right">
          <div className="text-xs text-gray-400 font-medium mb-0.5">Invested</div>
          <div className="text-base font-semibold text-gray-900">
            ${invested.toFixed(2)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 font-medium mb-0.5">Current Value</div>
          <div className="flex items-center gap-2 justify-end">
            <span className="text-base font-semibold text-gray-900">
              ${currentValue.toFixed(2)}
            </span>
            <span className="flex items-center gap-0.5 text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm">
              <TrendingDown className="w-3 h-3" />
              {Math.abs(changePercent)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
