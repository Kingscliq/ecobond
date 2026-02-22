import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface AssetMetaRowProps {
  location: string;
  closedDate: string;
  website?: string;
}

export function AssetMetaRow({ location, closedDate, website }: AssetMetaRowProps) {
  return (
    <div className="flex items-center gap-8 px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
          Location
        </span>
        <span className="text-sm text-gray-800 font-medium">{location}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
          Closed
        </span>
        <span className="text-sm text-gray-800 font-medium">{closedDate}</span>
      </div>
      {website && (
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            Website
          </span>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            {website.length > 30 ? website.slice(0, 30) + "..." : website}
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
