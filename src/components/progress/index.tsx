import { useCallback, useEffect } from "react";
import { useTheme } from "@mui/material";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

export default function Progress() {
  const theme = useTheme();

  const updateNProgressColor = useCallback(() => {
    const bar = document.querySelector("#nprogress .bar") as HTMLElement;
    const peg = document.querySelector("#nprogress .peg") as HTMLElement;
    const spinner = document.querySelector("#nprogress .spinner") as HTMLElement;
    const spinnerIcon = document.querySelector("#nprogress .spinner-icon") as HTMLElement;
    const color = theme.palette.primary.main;
    const zIndex = theme.zIndex.snackbar.toString();
    if (bar) {
      bar.style.background = color;
      bar.style.zIndex = zIndex;
    }
    if (peg) {
      peg.style.boxShadow = `0 0 10px ${color}, 0 0 5px ${color}`;
    }
    if (spinner) {
      spinner.style.zIndex = zIndex;
    }
    if (spinnerIcon) {
      spinnerIcon.style.borderLeftColor = color;
      spinnerIcon.style.borderRightColor = color;
    }
  }, [theme]);

  useEffect(() => {
    updateNProgressColor();
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, [updateNProgressColor]);
  return null;
}
