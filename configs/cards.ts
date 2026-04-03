export type Card = Readonly<{
  logo: string;
  name: string;
  link: string;
  alias?: string;
  category?: string;
  description: string;
}>;

export const homeClients: Card[] = [
  {
    logo: "/icons/ic_euroasia.png",
    name: "Euro Asia",
    category: "Asset management",
    description:
      "Euro Asia Asset Management is an asset   manager specializing in regulatory hosting for   Venture funds and family offices in Singapore,   with 700M USD Assets under Management.",
    link: "https://euroasia-am.com",
  },
  {
    logo: "/icons/ic_thxnet.png",
    name: "Thxnet",
    category: "DevTools",
    description:
      "A web3 company providing infrastructure   and tools for efficient Web3 application   development, allowing Enterprises to   implement a Layer 1 private chain with just a  few simple API calls.",
    link: "https://thnet.org",
  },
  {
    logo: "/icons/ic_tpro.png",
    name: "TPRO & Tokenomia",
    category: "Consultancy",
    description:
      "A Polish origin Web3 consultancy which  specializes in using multiple AI agents to   simulate digital asset price action.",
    link: "https://tpro.network",
  },
  {
    logo: "/icons/ic_elephants.png",
    name: "Elephants.inc",
    category: "Business Development",
    description:
      "Strategic business development partnership   focused on scaling operations and market   expansion across the region.",
    link: "https://elephants.inc",
  },
  {
    logo: "/icons/ic_asgaardian.png",
    name: "Asgaardian",
    category: "Business Development",
    description:
      "Business development and regional expansion   advisory, supporting growth strategies across   Southeast Asia and beyond.",
    link: "https://asgaardian.com",
  },
];

export const homePortfolios: Card[][] = [
  [
    {
      logo: "/icons/ic_fryingfish.png",
      name: "Frying Fish Club (Exited)",
      description:
        "Fusion food restaurant chain formerly operating 5 outlets   across 3 countries, offering Japanese-inspired fish & chips.",
      link: "https://fryingfish.club",
    },
    {
      logo: "/icons/ic_palinggaming.png",
      name: "Paling Gaming",
      description:
        "Premium furniture manufacturer and brand based in   Indonesia",
      link: "https://palinggaming.com",
    },
    {
      logo: "/icons/ic_bodynetic.png",
      name: "Bodynetic",
      description:
        "A painless world with better lifestyles and accessible   preventive solutions.",
      link: "https://bodynetic.co",
    },
    {
      logo: "/icons/ic_aim.png",
      name: "Aim Production House",
      description:
        "A creative agency in Bandung dedicated to empowering local   talent and elevating the creative scene.",
      link: "https://aimph.co",
    },
  ],
  [
    {
      logo: "/icons/ic_megacorp.png",
      name: "Megacorp Trading Card Game",
      description:
        "A cyberpunk-themed card game that immerses players in a   complex world of genetically modified beings, powerful psychics",
      link: "https://megacorptcg.com",
    },
    {
      logo: "/icons/ic_vxces.png",
      name: "VXCES",
      description:
        "Curated tickets, drops, and experiences across Asia Pacific   — TCG conventions, Web3 summits, and collector culture events.",
      link: "https://vxces.com",
    },
    {
      logo: "/icons/ic_dunno.png",
      name: "dunno.ventures",
      description:
        "Entrepreneur in Residence — supporting early-stage founders   with hands-on guidance, network access, and go-to-market strategy.",
      link: "https://dunno.ventures",
    },
  ],
];

export const homeWeb3: Card[] = [
  {
    logo: "/icons/ic_allart.png",
    name: "All.Art",
    category: "Tokenomics",
    description:
      "A collective focusing on the tokenisation of Real World Assets,   development of on-chain licensing infrastructure.",
    link: "https://all.art",
  },
  {
    logo: "/icons/ic_monstro.png",
    name: "Monstro",
    category: "Finance",
    description:
      "A DeFi-focused company offering transparent yield farming   through its Monstro's Farm program",
    link: "https://monstro.fun",
  },
];

export const homePartners: Omit<Card, "description" | "category">[] = [
  {
    name: "OFFCHAIN GLOBAL",
    link: "https://offchain.social",
    logo: "/icons/ic_offchain.png",
  },
  {
    name: "CEEC (Central and East European   Chamber of Commerce in Singapore) — Secretary General, 7th Term (AGM 2026)",
    link: "https://ceec.org.sg",
    logo: "/icons/ic_ceec.png",
  },
  {
    name: "ARC Accelerator (Cambodia)",
    alias: "https://arcaccelerator.com",
    link: "https://www.aupptechcenter.com/what-is-arc-start-up-accelerator/",
    logo: "/icons/ic_arc.png",
  },
];
