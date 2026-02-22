"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export function CreateCollectiveForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Collective Details
          </h2>
          <p className="text-sm text-gray-500">
            Provide basic details about your collective
          </p>
        </div>

        <div className="space-y-5">
          {/* Collective Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Collective Image
            </label>
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Click to upload</span>
            </div>
          </div>

          {/* Collective Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Collective Name
            </label>
            <Input
              placeholder="Enter your collective name"
              className="h-10 text-sm border-gray-300 placeholder:text-gray-400 rounded-md"
            />
          </div>

          {/* Row: Type + Asset Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Collective Type
              </label>
              <Select>
                <SelectTrigger className="h-10 text-sm border-gray-300 rounded-md">
                  <SelectValue placeholder="Select a collective type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venture-capital">Venture Capital</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="alternative">Alternative Investments</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Asset Category
              </label>
              <Select>
                <SelectTrigger className="h-10 text-sm border-gray-300 rounded-md">
                  <SelectValue placeholder="Select an asset category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startups">Startups</SelectItem>
                  <SelectItem value="property">Property</SelectItem>
                  <SelectItem value="bonds">Bonds</SelectItem>
                  <SelectItem value="commodities">Commodities</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row: Primary Location + Visibility */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Collective Primary Location
              </label>
              <Select>
                <SelectTrigger className="h-10 text-sm border-gray-300 rounded-md">
                  <SelectValue placeholder="Select operating country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ke">Kenya</SelectItem>
                  <SelectItem value="ng">Nigeria</SelectItem>
                  <SelectItem value="gh">Ghana</SelectItem>
                  <SelectItem value="za">South Africa</SelectItem>
                  <SelectItem value="ug">Uganda</SelectItem>
                  <SelectItem value="et">Ethiopia</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Visibility
              </label>
              <Select>
                <SelectTrigger className="h-10 text-sm border-gray-300 rounded-md">
                  <SelectValue placeholder="Select visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Membership Model (half width) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Membership Model
              </label>
              <Select>
                <SelectTrigger className="h-10 text-sm border-gray-300 rounded-md">
                  <SelectValue placeholder="Select a membership model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="invite-only">Invite Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Website Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Website Link{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <Input
              placeholder="https://"
              type="url"
              className="h-10 text-sm border-gray-300 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end mt-8">
          <Button className="bg-[#1b3a2d] hover:bg-[#152e24] text-white text-sm font-medium h-10 px-6 rounded-md">
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
}
