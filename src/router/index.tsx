import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";
import Progress from "@/components/progress";
import { ROUTE_PATHS } from "@/constants/common";
import { aboutRoutes } from "./modules/about";
import { homeRoutes } from "./modules/home";
import { productRoutes } from "./modules/product";

const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.login,
    lazy: async () => ({
      Component: (await import("@/pages/login")).default,
    }),
    HydrateFallback: Progress,
    handle: {
      title: "Login",
    },
  },
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/layout")).default,
    }),
    HydrateFallback: Progress,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_PATHS.home} replace />,
      },
      ...homeRoutes,
      ...aboutRoutes,
      ...productRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
