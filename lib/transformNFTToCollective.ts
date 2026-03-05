import { CollectiveCardData } from "@/components/projects/CollectiveCard";

interface AlchemyNFT {
  tokenId: string;
  name?: string;
  description?: string;
  image?: {
    cachedUrl?: string;
    originalUrl?: string;
  };
  raw?: {
    metadata?: {
      attributes?: Array<{
        trait_type: string;
        value: string | number | string[] | object[];
      }>;
    };
  };
}

interface ManagerData {
  name: string;
  initials: string;
}

export function transformNFTToCollective(nft: AlchemyNFT): CollectiveCardData {
  const attributes = nft.raw?.metadata?.attributes || [];

  // Helper to get attribute value
  const getAttribute = (traitType: string) => {
    return attributes.find((attr) => attr.trait_type === traitType)?.value;
  };

  // Parse locations
  const locationsData = getAttribute("locations");
  const locations = Array.isArray(locationsData) ? locationsData : [];

  // Parse managers
  const managersData = getAttribute("managers");
  const managers = Array.isArray(managersData)
    ? (managersData as ManagerData[]).map((m) => ({
        name: m.name || "",
        initials: m.initials || "",
      }))
    : [];

  return {
    id: nft.tokenId,
    name: nft.name || "Unnamed Project",
    logo: nft.image?.cachedUrl || nft.image?.originalUrl,
    logoColor: (getAttribute("logoColor") as string) || "#1b3a2d",
    logoInitials: (getAttribute("logoInitials") as string) || "",
    type: (getAttribute("type") as string) || "Project",
    locations: locations as string[],
    memberCount: 0, // Not provided in API response
    visibility:
      (getAttribute("visibility") as "Public" | "Private") || "Private",
    paymentModel: (getAttribute("paymentModel") as "Free" | "Paid") || "Free",
    effort: (getAttribute("greenImpact") as number) || 0,
    managers: managers,
  };
}
