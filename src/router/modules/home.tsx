import { type RouteObject } from "react-router-dom";
import Progress from "@/components/progress";
import { ROUTE_PATHS } from "@/constants/common";

export const homeRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.home,
    lazy: async () => ({
      Component: (await import("@/pages/home")).default,
    }),
    HydrateFallback: Progress,
    handle: {
      title: "Home",
    },
  },
];
