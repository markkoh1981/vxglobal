export type Navigation = {
  name: string;
  link: string;
  icon?: string;
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    link: "/",
    icon: "i-mdi:home-outline",
  },
  {
    name: "About us",
    link: "/about-us",
    icon: "i-mdi:alert-circle-outline",
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
