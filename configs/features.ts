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
        "Offering comprehensive analysis of <br className='lt-2xl:hidden' /> target audiences and competitive <br  className='lt-md:hidden'/>landscapes within ASEAN.",
        "ASEAN is one of the most fragmented <br className='lt-2xl:hidden' />markets for business development,<br className='lt-2xl:hidden' />VX helps to bridge the gap with best practices.",
      ],
    },
    {
      index: 3,

      title: "Priviledged network",
      descriptions: [
        "Access to reciprocal network to<br className='lt-2xl:hidden' />connect venture fund clients with",
        "Institutional investors (e.g, sovereign<br className='lt-2xl:hidden' />wealth funds, pension funds)",
        "Family offices and high net worth<br className='lt-2xl:hidden' />individuals",
        "Strategic partners",
      ],
    },
  ],
  [
    {
      index: 2,
      title: "Dealflow sourcing",
      descriptions: [
        "Proprietary deal flow from local<br className='lt-2xl:hidden' />network, specifically in Gaming, Web3<br className='lt-2xl:hidden' />sectors",
        "Targeted outreach to startups and<br className='lt-2xl:hidden' />growth-stage companies within this<br className='lt-2xl:hidden' />focus.",
        "Representation at Industry events",
      ],
    },
    {
      index: 4,
      title: "Localization services",
      descriptions: [
        "Adapting brand messaging<br className='lt-2xl:hidden' />and marketing materials to resonate with<br className='lt-2xl:hidden' />local audiences through high-quality<br className='lt-2xl:hidden' />translation and cultural context<br className='lt-2xl:hidden' />adaptation.",
      ],
    },
  ],
];
