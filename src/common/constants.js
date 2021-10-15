export const baseRoutes = {
  PPRKF: {
    base: "/PPRKF",
  },
  CSRCSI: {
    base: "/CSRCSI",
  },
};

export const subRoutes = {
  PPRKF: {
    menu: baseRoutes.PPRKF.base + "/menu",
    operation: baseRoutes.PPRKF.base + "/operation",
    about: baseRoutes.PPRKF.base + "/about",
    prerequisites: baseRoutes.PPRKF.base + "/prerequisites",
    commissioning: baseRoutes.PPRKF.base + "/commissioning",
    installation: baseRoutes.PPRKF.base + "/installation",
    service: baseRoutes.PPRKF.base + "/service",
  },
};
