export type Navigation = {
  name: string;
  link: { hash?: string; path: string };
  icon?: string;
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    link: { path: "/", hash: "" },
    icon: "i-octicon:home-24",
  },
  {
    name: "About us",
    link: { path: "/about-us", hash: "" },
    icon: "i-octicon:info-24",
  },
  {
    name: "Portfolio",
    link: { path: "/", hash: "#portfolio" },
  },
  {
    name: "Services",
    link: { path: "/", hash: "#services" },
  },
];
