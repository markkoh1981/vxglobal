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
        "Offering comprehensive analysis of target <br /> audiences and competitive landscapes <br /> within ASEAN.",
        "ASEAN is one of the most fragmented <br /> markets for business development, VX <br /> helps to bridge the gap with best-<br />practices.",
      ],
    },
    {
      index: 3,

      title: "Priviledged network",
      descriptions: [
        "Access to reciprocal network to <br /> connect venture fund clients with",
        "Institutional investors (e.g, sovereign <br /> wealth funds, pension funds)",
        "Family offices and high net worth <br /> individuals",
        "Strategic partners",
      ],
    },
  ],
  [
    {
      index: 2,
      title: "Dealflow sourcing",
      descriptions: [
        "Proprietary deal flow from local <br /> network, specifically in Gaming, Web3 <br /> sectors",
        "Targeted outreach to startups and <br /> growth-stage companies within this <br /> focus.",
        "Representation at Industry events",
      ],
    },
    {
      index: 4,
      title: "Localization services",
      descriptions: [
        "Adapting brand messaging <br /> and marketing materials to resonate with <br /> local audiences through high-quality <br /> translation and cultural context <br /> adaptation.",
      ],
    },
  ],
];
