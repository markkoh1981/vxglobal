export type Feature = {
  index: number;
  title: string;
  descriptions: string[];
};

export const homeFeatures: Feature[][] = [
  [
    {
      index: 1,
      title: "Market entry consultancy",
      descriptions: [
        "Offering comprehensive analysis of target audiences and competitive landscapes within ASEAN.",
        "ASEAN is one of the most fragmented markets for business development, VX helps to bridge the gap with best-practices.",
      ],
    },
    {
      index: 3,

      title: "Priviledged network",
      descriptions: [
        "Access to reciprocal network to connect venture fund clients with",
        "Institutional investors (e.g, sovereign wealth funds, pension funds)",
        "Family offices and high net worth individuals",
        "Strategic partners",
      ],
    },
  ],
  [
    {
      index: 2,
      title: "Dealflow sourcing",
      descriptions: [
        "Proprietary deal flow from local network, specifically in Gaming, Web3 sectors",
        "Targeted outreach to startups and growth-stage companies within this focus.",
        "Representation at Industry events",
      ],
    },
    {
      index: 4,
      title: "Localization services",
      descriptions: [
        "Adapting brand messaging and marketing materials to resonate with local audiences through high-quality translation and cultural context adaptation.",
      ],
    },
  ],
];
