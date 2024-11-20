import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  sidebarOpen: boolean;
  toggleSidebarOpen: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      toggleSidebarOpen: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),
    }),
    { name: "app" },
  ),
);
