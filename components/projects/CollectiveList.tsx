import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CollectiveCardData } from "./CollectiveCard";

export function CollectiveList({ collectives }: { collectives: CollectiveCardData[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead className="w-[300px]">Project</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Effort</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-right">Managers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collectives.map((collective) => (
            <Dialog key={collective.id}>
              <DialogTrigger asChild>
                <TableRow className="hover:bg-gray-50 group cursor-pointer">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  {collective.logo ? (
                    <div className="w-8 h-8 rounded-md overflow-hidden border border-gray-100 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={collective.logo} alt={collective.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: collective.logoColor || "#1b3a2d" }}
                    >
                      {collective.logoInitials || collective.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {collective.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5">{collective.type}</span>
                  </div>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  {collective.locations.length > 0 ? (
                    collective.locations.slice(0, 2).map((loc) => (
                      <div key={loc} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="truncate">{loc}</span>
                      </div>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400 italic">Not specified</span>
                  )}
                  {collective.locations.length > 2 && (
                    <span className="text-[10px] text-gray-400">+{collective.locations.length - 2} more</span>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1 w-[120px]">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="text-gray-900 font-bold">{collective.effort}%</span>
                  </div>
                  <Progress value={collective.effort} className="h-1.5 bg-gray-100 [&>div]:bg-[#d4a843]" />
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Users className="w-3.5 h-3.5 text-gray-400" />
                  {collective.memberCount.toLocaleString()}
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex gap-1.5">
                  <Badge variant="outline" className="text-[10px] bg-gray-50 text-gray-600 border-gray-200 font-normal py-0">
                    {collective.visibility}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] bg-gray-50 text-gray-600 border-gray-200 font-normal py-0">
                    {collective.paymentModel}
                  </Badge>
                </div>
              </TableCell>
              
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <div className="flex -space-x-1.5">
                    {collective.managers.slice(0, 3).map((manager, idx) => (
                      <Avatar
                        key={idx}
                        className="w-6 h-6 border-2 border-white ring-0"
                      >
                        <AvatarImage src={manager.avatar} alt={manager.name} />
                        <AvatarFallback className="text-[9px] bg-gray-200 text-gray-600 font-medium tracking-tighter">
                          {manager.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  {collective.managers.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[9px] font-medium text-gray-500">
                      +{collective.managers.length - 3}
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  {collective.logo ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-100 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={collective.logo} alt={collective.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold shrink-0"
                      style={{ backgroundColor: collective.logoColor || "#1b3a2d" }}
                    >
                      {collective.logoInitials || collective.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <DialogTitle className="text-xl">{collective.name}</DialogTitle>
                    <DialogDescription className="mt-1 flex items-center gap-2">
                      <Badge variant="secondary" className="font-normal text-xs">{collective.type}</Badge>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="flex flex-col gap-5 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-medium">Global Effort</span>
                    <div className="flex items-center gap-2">
                      <Progress value={collective.effort} className="h-2 flex-1 [&>div]:bg-[#d4a843]" />
                      <span className="text-sm font-bold text-gray-900">{collective.effort}%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-medium">Members</span>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                      <Users className="w-4 h-4 text-gray-400" />
                      {collective.memberCount.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Locations</span>
                  <div className="flex flex-wrap gap-2">
                    {collective.locations.length > 0 ? (
                      collective.locations.map(loc => (
                        <Badge key={loc} variant="outline" className="text-xs text-gray-600 bg-gray-50 font-normal">
                          <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                          {loc}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500 italic">No locations specified</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Management</span>
                  <div className="flex bg-gray-50 rounded-lg p-3 border border-gray-100 items-center justify-between">
                    <div className="flex -space-x-2">
                      {collective.managers.map((manager, idx) => (
                        <Avatar key={idx} className="w-8 h-8 border-2 border-white ring-0">
                          <AvatarImage src={manager.avatar} alt={manager.name} />
                          <AvatarFallback className="text-xs bg-gray-200 text-gray-600 font-medium">
                            {manager.initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-white">{collective.visibility}</Badge>
                      <Badge variant="outline" className="bg-white">{collective.paymentModel}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <Button asChild className="bg-[#1b3a2d] hover:bg-[#152e24] w-full text-white">
                  <Link href={`/projects/${collective.id}`}>
                    View Full Details
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
