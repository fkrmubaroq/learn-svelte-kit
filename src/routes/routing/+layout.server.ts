import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
  return {
    headerMenu: [
      {
        menuName: "Home",
        path: "/routing",
      },
      {
        menuName: "About",
        path: "/routing/hello-world",
      },
    ],
  };
};
