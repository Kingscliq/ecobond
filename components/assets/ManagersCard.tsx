import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

export interface Manager {
  name: string;
  title?: string;
  avatar?: string;
  initials: string;
  linkedInUrl?: string;
}

interface ManagersCardProps {
  managers: Manager[];
}

export function ManagersCard({ managers }: ManagersCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">Manager(s)</h3>
      <div className="space-y-4">
        {managers.map((manager, i) => (
          <div key={i} className="flex items-center gap-3">
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarImage src={manager.avatar} alt={manager.name} />
              <AvatarFallback className="text-xs bg-gray-100 text-gray-600 font-medium">
                {manager.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 leading-tight">
                {manager.name}
              </div>
              {manager.title && (
                <div className="text-xs text-gray-500 leading-tight mt-0.5">
                  {manager.title}
                </div>
              )}
            </div>
            {manager.linkedInUrl && (
              <a
                href={manager.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 shrink-0"
                aria-label={`${manager.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
