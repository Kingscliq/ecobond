import { TopNavBar } from "@/components/layout/TopNavBar";
import { PageHeader } from "@/components/layout/PageHeader";
import { AssetHeader } from "@/components/assets/AssetHeader";
import { AssetMetaRow } from "@/components/assets/AssetMetaRow";
import { AssetDetailTabs } from "@/components/assets/AssetDetailTabs";
import { ManagersCard } from "@/components/assets/ManagersCard";
import { ResourcesCard } from "@/components/assets/ResourcesCard";

// Mock data — represents the Marina Bay Apartments asset from the screenshot
const ASSET = {
  name: "Marina Bay Apartments",
  type: "Apartments",
  logoColor: "#f97316",
  logoInitials: "",
  invested: 0,
  currentValue: 0,
  changePercent: 0,
  location: "Kenya",
  closedDate: "01 June 2023",
  website: "https://www.airbnb.co.uk/rc",
  description:
    "A state of the art 1-bedroom flat on the 17th-floor in the heart of Westlands, Nairobi. This spacious unit spans 110 square meters, providing ample living space in a prime location.",
  managers: [
    {
      name: "Joe Kinvi",
      initials: "JK",
      title: "Founder and CEO @ Ecobond",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Gloria Wafula",
      initials: "GW",
      title: "Chief of Staff @ Ecobond",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Thandeka Mkhize",
      initials: "TM",
    },
  ],
  resources: [
    {
      label: "Airbnb Booking Link",
      href: "https://www.airbnb.co.uk",
    },
  ],
};

export const metadata = {
  title: "Marina Bay Apartments — Ecobond",
};

export default function AssetDetailPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="h-1.5 bg-black w-full" />
      <TopNavBar />
      <PageHeader
        backHref="/collectives/diaspora-house"
        breadcrumbs={[
          { label: "Diaspora House", href: "/collectives/diaspora-house" },
          { label: "Marina Bay Apartments" },
        ]}
      />

      {/* Asset header + financial stats */}
      <AssetHeader
        name={ASSET.name}
        type={ASSET.type}
        logoColor={ASSET.logoColor}
        logoInitials={ASSET.logoInitials}
        invested={ASSET.invested}
        currentValue={ASSET.currentValue}
        changePercent={ASSET.changePercent}
      />

      {/* Meta row */}
      <AssetMetaRow
        location={ASSET.location}
        closedDate={ASSET.closedDate}
        website={ASSET.website}
      />

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
          {/* Left: tabs + description */}
          <div>
            <AssetDetailTabs description={ASSET.description} />
          </div>

          {/* Right: managers + resources */}
          <div className="flex flex-col gap-4">
            <ManagersCard managers={ASSET.managers} />
            <ResourcesCard resources={ASSET.resources} />
          </div>
        </div>
      </main>
    </div>
  );
}
