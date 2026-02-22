import { FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface AssetDetailTabsProps {
  description: string;
}

export function AssetDetailTabs({ description }: AssetDetailTabsProps) {
  return (
    <Tabs defaultValue="description">
      <TabsList className="bg-transparent p-0 gap-0 border-b border-gray-200 w-full justify-start rounded-none h-auto mb-6">
        <TabsTrigger
          value="description"
          className="
            relative flex items-center gap-1.5 h-9 px-3 rounded-none bg-transparent
            text-sm font-medium text-gray-500 
            data-[state=active]:text-gray-900 data-[state=active]:shadow-none
            data-[state=active]:border-b-2 data-[state=active]:border-gray-900
            hover:text-gray-700 transition-colors
          "
        >
          <FileText className="w-3.5 h-3.5" />
          Description
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
