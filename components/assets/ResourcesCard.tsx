import { Link2, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface Resource {
  label: string;
  href: string;
}

interface ResourcesCardProps {
  resources: Resource[];
}

export function ResourcesCard({ resources }: ResourcesCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">Resources</h3>
      <div className="space-y-3">
        {resources.map((resource, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <Link2 className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-sm text-gray-700 truncate">{resource.label}</span>
            </div>
            <Link
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 text-sm text-gray-500 hover:text-gray-900 transition-colors shrink-0"
            >
              View
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
