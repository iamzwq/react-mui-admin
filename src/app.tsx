import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, useColorScheme } from "@mui/material";
import Toast from "@/components/toast";
import { router } from "@/router";
import { theme } from "@/theme";

import "./styles/index.css";

export default function App() {
  const { systemMode, mode } = useColorScheme();
  const [, setState] = useState(systemMode || mode);
  useEffect(() => {
    setState(systemMode || mode);
  }, [systemMode, mode]);

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toast />
    </ThemeProvider>
  );
}
