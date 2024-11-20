import { type RouteObject } from "react-router-dom";
import Progress from "@/components/progress";
import { ROUTE_PATHS } from "@/constants/common";

export const aboutRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.about,
    lazy: async () => ({
      Component: (await import("@/pages/about")).default,
    }),
    HydrateFallback: Progress,
    handle: {
      title: "About",
    },
  },
];
