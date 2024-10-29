export type Navigation = {
  name: string;
  link: string;
  icon?: string;
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    link: "/",
    icon: "i-octicon:home-24",
  },
  {
    name: "About us",
    link: "/about-us",
    icon: "i-octicon:info-24",
  },
  {
    name: "Portfolio",
    link: "/#portfolio",
  },
  {
    name: "Services",
    link: "/#services",
  },
];
