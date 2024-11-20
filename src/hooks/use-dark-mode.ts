import { useColorScheme } from "@mui/material";

export const useDarkMode = () => {
  const { mode, systemMode } = useColorScheme();
  return (systemMode ?? mode) === "dark";
};
