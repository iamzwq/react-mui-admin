import { Navigate, type RouteObject } from "react-router-dom";
import Progress from "@/components/progress";
import { ROUTE_PATHS } from "@/constants/common";

export const productRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.product,
    lazy: async () => ({
      Component: (await import("@/pages/product")).default,
    }),
    HydrateFallback: Progress,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_PATHS.productDetail} />,
      },
      {
        path: ROUTE_PATHS.productDetail,
        lazy: async () => ({
          Component: (await import("@/pages/product/pages/detail")).default,
        }),
        HydrateFallback: Progress,
      },
    ],
  },
];
