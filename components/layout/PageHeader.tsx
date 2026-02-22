import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  backHref: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHeader({ backHref, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 bg-[#f5f5f5] border-b border-gray-200 text-sm text-gray-500">
      <Link
        href={backHref}
        className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900 transition-colors font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </Link>
      <span className="text-gray-300">/</span>
      {breadcrumbs.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 font-medium">{item.label}</span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className="text-gray-300">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
