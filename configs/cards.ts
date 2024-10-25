export type Card = Readonly<{
  logo: string;
  name: string;
  link: string;
  category?: string;
  description: string;
}>;

export const homeClients: Card[] = [
  {
    logo: "/icons/ic_euroasia.png",
    name: "Euro Asia",
    category: "Asset management",
    description:
      "Euro Asia Asset Management is an asset <br /> manager specializing in regulatory hosting for <br /> Venture funds and family offices in Singapore, with 700M USD Assets under Management.",
    link: "https://euroasia-am.com",
  },
  {
    logo: "/icons/ic_thxnet.png",
    name: "Thxnet",
    category: "DevTools",
    description:
      "A web3 company providing infrastructure <br /> and tools for efficient Web3 application <br /> development, allowing Enterprises to implement <nr /> a Layer 1 private chain with just a <br />few simple API calls.",
    link: "https://thnet.org",
  },
  {
    logo: "/icons/ic_tpro.png",
    name: "TPRO & Tokenomia",
    category: "Consultancy",
    description:
      "A Polish origin Web3 consultancy which <br />specializes in using multiple AI agents to <br /> simulate digital asset price action.",
    link: "https://tpro.network",
  },
];

export const homePortfolios: Card[][] = [
  [
    {
      logo: "/icons/ic_fryingfish.png",
      name: "Frying Fish Club",
      description:
        "Fusion food restaurant chain with 5 outlets in 3 countries <br /> offering Japanese-inspired fish & chips, integrating NFTs",
      link: "https://fryingfish.club",
    },
    {
      logo: "/icons/ic_palinggaming.png",
      name: "Paling Gaming",
      description:
        "Premium furniture manufacturer and brand based in <br /> Indonesia",
      link: "https://palinggaming.com",
    },
    {
      logo: "/icons/ic_bodynetic.png",
      name: "Bodynetic",
      description:
        "A painless world with better lifestyles and accessible <br /> preventive solutions.",
      link: "https://bodynetic.co",
    },
    {
      logo: "/icons/ic_aim.png",
      name: "Aim Production House",
      description:
        "A creative agency in Bandung dedicated to empowering local <br /> talent and elevating the creative scene.",
      link: "https://aimph.co",
    },
  ],
  [
    {
      logo: "/icons/ic_megacorp.png",
      name: "Megacorp Trading Card Game",
      description:
        "A cyberpunk-themed card game that immerses players in a <br /> complex world of genetically modified beings, powerful psychics",
      link: "https://megacorptcg.com",
    },
  ],
];

export const homeWeb3: Card[] = [
  {
    logo: "/icons/ic_allart.png",
    name: "All.Art",
    category: "Tokenomics",
    description:
      "A collective focusing on the tokenisation of Real World Assets, development of on-chain licensing infrastructure.",
    link: "https://all.art",
  },
  {
    logo: "/icons/ic_monstro.png",
    name: "Monstro",
    category: "Finance",
    description:
      "A DeFi-focused company offering transparent yield farming through its Monstro's Farm program",
    link: "https://monstro.fun",
  },
];

export const homePartners: Omit<Card, "logo" | "description" | "category">[] = [
  {
    name: "Offchain global",
    link: "https://offchain.social",
  },
  {
    name: "Central and East European Chamber of Commerce in Singapore",
    link: "https://ceec.org.sg",
  },
  {
    name: "ARC Accelerator in Cambodia",
    link: "https://arcaccelerator.com",
  },
];
