import type { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiButton: Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButton"] = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: {
      textTransform: "none",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
  },
  variants: [
    {
      props: { color: "primary" },
      style: {
        "&.Mui-disabled": {
          boxShadow: "none",
          color: "var(--mt-palette-primary-contrastText)",
          backgroundColor: "var(--mt-palette-primary-main)",
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
    },
  ],
};
