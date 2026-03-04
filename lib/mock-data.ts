export interface CollectiveCardData {
  id: string;
  name: string;
  logoColor: string;
  logoInitials: string;
  type: string;
  locations: string[];
  memberCount: number;
  visibility: "Public" | "Private";
  paymentModel: "Free" | "Paid";
  effort: number;
  managers: {
    name: string;
    initials: string;
  }[];
  description?: string;
}

export const MOCK_COLLECTIVES: CollectiveCardData[] = [
  {
    id: "anchorfund",
    name: "Oceanic Cleanup Init",
    logoColor: "#0ea5e9",
    logoInitials: "OC",
    type: "Ocean Conservation",
    locations: ["Global Oceans"],
    memberCount: 2,
    visibility: "Public",
    paymentModel: "Paid",
    effort: 78,
    managers: [
      { name: "Gloria Wafula", initials: "GW" },
      { name: "Fr.", initials: "FR" },
    ],
    description: "The Oceanic Cleanup Init is dedicated to removing plastic pollution from the world's oceans. By developing advanced technologies and coordinating global volunteer efforts, we aim to restore marine ecosystems and protect ocean biodiversity for future generations."
  },
  {
    id: "bitesize-capital",
    name: "Solar Grid Innovators",
    logoColor: "#f59e0b",
    logoInitials: "Sg",
    type: "Renewable Energy",
    locations: ["Western Europe"],
    memberCount: 1,
    visibility: "Public",
    paymentModel: "Free",
    effort: 65,
    managers: [
      { name: "Team Ecobond", initials: "TE" },
    ],
    description: "Solar Grid Innovators focuses on deploying scalable solar energy solutions across decentralized grids. Our mission is to provide clean, affordable, and reliable energy to communities, accelerating the transition away from fossil fuels."
  },
  {
    id: "diaspora-house",
    name: "Rainforest Protectors",
    logoColor: "#22c55e",
    logoInitials: "RP",
    type: "Reforestation",
    locations: ["South America"],
    memberCount: 54,
    visibility: "Public",
    paymentModel: "Free",
    effort: 92,
    managers: [
      { name: "Joe Kinvi", initials: "JK" },
      { name: "Gloria", initials: "GL" },
    ],
    description: "Rainforest Protectors works directly with indigenous communities to safeguard critical rainforest ecosystems. Through sustainable agroforestry and legal protection measures, we combat deforestation and preserve the vital carbon sinks of the Amazon."
  },
  {
    id: "h2ventures",
    name: "H2O Pure Streams",
    logoColor: "#3b82f6",
    logoInitials: "H2",
    type: "Water Sustainability",
    locations: ["Eastern Africa"],
    memberCount: 2,
    visibility: "Private",
    paymentModel: "Free",
    effort: 84,
    managers: [
      { name: "Joe Kinvi", initials: "JK" },
      { name: "Holger", initials: "HO" },
    ],
    description: "H2O Pure Streams is committed to ensuring access to clean and safe drinking water. We implement sustainable water filtration systems and rainwater harvesting techniques in regions facing severe water scarcity and contamination."
  },
  {
    id: "hoaq",
    name: "Wind Energy Co.",
    logoColor: "#065f46",
    logoInitials: "WE",
    type: "Wind Power",
    locations: ["Northern America", "Northern Europe"],
    memberCount: 1230,
    visibility: "Private",
    paymentModel: "Paid",
    effort: 71,
    managers: [
      { name: "Folakemi Osho", initials: "FO" },
      { name: "J.", initials: "JO" },
    ],
    description: "Wind Energy Co. develops and manages large-scale wind farms to harness the power of nature. Our projects are designed to maximize energy output while minimizing environmental impact, contributing significantly to the global renewable energy capacity."
  },
  {
    id: "kigo-collective",
    name: "Agri-Eco Collective",
    logoColor: "#15803d",
    logoInitials: "AC",
    type: "Sustainable Farming",
    locations: ["Eastern Africa"],
    memberCount: 21,
    visibility: "Public",
    paymentModel: "Free",
    effort: 55,
    managers: [
      { name: "MT", initials: "MT" },
      { name: "Stephen Kauma", initials: "SK" },
    ],
    description: "The Agri-Eco Collective promotes sustainable farming practices that regenerate soil health and increase biodiversity. We train farmers in permaculture and organic agriculture to create resilient food systems that thrive in harmony with nature."
  },
  {
    id: "originative",
    name: "Carbon Zero Org",
    logoColor: "#64748b",
    logoInitials: "CZ",
    type: "Carbon Capture",
    locations: ["Western Asia"],
    memberCount: 0,
    visibility: "Public",
    paymentModel: "Paid",
    effort: 45,
    managers: [
      { name: "AA", initials: "AA" },
      { name: "Abeer Abu Shmeis", initials: "AS" },
    ],
    description: "Carbon Zero Org is at the forefront of atmospheric carbon reduction. We invest in high-efficiency carbon capture technologies and natural sequestration projects to actively draw down legacy carbon emissions and stabilize the climate."
  },
  {
    id: "pula-kollektive",
    name: "Eco-Plastics Inc.",
    logoColor: "#14b8a6",
    logoInitials: "EP",
    type: "Recycling",
    locations: ["Southern Africa"],
    memberCount: 6,
    visibility: "Public",
    paymentModel: "Free",
    effort: 68,
    managers: [
      { name: "TM", initials: "TM" },
      { name: "Torti Ama-Njoku", initials: "TN" },
    ],
    description: "Eco-Plastics Inc. pioneers the circular economy by transforming post-consumer waste into valuable raw materials. Our advanced recycling facilities divert thousands of tons of plastic from landfills and oceans every year."
  },
  {
    id: "raise-by-borderless",
    name: "Biodiversity Fund",
    logoColor: "#1b3a2d",
    logoInitials: "BF",
    type: "Wildlife Conserve",
    locations: ["Northern Africa"],
    memberCount: 0,
    visibility: "Public",
    paymentModel: "Free",
    effort: 88,
    managers: [{ name: "Ecobond", initials: "EC" }],
    description: "The Biodiversity Fund channels vital resources to conservation projects protecting the world's most endangered species. We support habitat restoration, anti-poaching initiatives, and community-led conservation efforts globally."
  },
  {
    id: "realcorp-capital",
    name: "Solar Power Arrays",
    logoColor: "#eab308",
    logoInitials: "SP",
    type: "Renewable Tech",
    locations: ["Northern America", "Northern Europe"],
    memberCount: 0,
    visibility: "Public",
    paymentModel: "Free",
    effort: 73,
    managers: [{ name: "Team", initials: "TM" }],
    description: "Solar Power Arrays leverages cutting-edge photovoltaic technology to maximize the efficiency of solar energy capturing. We specialize in robust, high-yield solar installations for commercial and industrial applications."
  },
  {
    id: "serengeti-angels",
    name: "Serengeti Preservation Network",
    logoColor: "#16a34a",
    logoInitials: "SPN",
    type: "Ecosystem Repair",
    locations: ["Eastern Africa"],
    memberCount: 3,
    visibility: "Public",
    paymentModel: "Paid",
    effort: 95,
    managers: [{ name: "Admin", initials: "AD" }],
    description: "The Serengeti Preservation Network is dedicated to the long-term conservation of the iconic Serengeti ecosystem. Through a combination of research, advocacy, and community engagement, we strive to maintain the delicate balance of this natural wonder."
  },
  {
    id: "ecosystem-commission",
    name: "The Planet Restoration Comm.",
    logoColor: "#2563eb",
    logoInitials: "PR",
    type: "Policy & Climate",
    locations: ["Eastern Africa", "Northern America"],
    memberCount: 1,
    visibility: "Public",
    paymentModel: "Paid",
    effort: 60,
    managers: [{ name: "Commission", initials: "EC" }],
    description: "The Planet Restoration Comm. focuses on shaping comprehensive climate policies and driving actionable systemic changes. We collaborate with governments, businesses, and civil society to implement strategies for deep decarbonization and ecological repair."
  },
];
