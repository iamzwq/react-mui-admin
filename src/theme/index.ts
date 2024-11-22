import type { LinkProps } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { MuiButton } from "./components/button/button";
import { MuiIconButton } from "./components/button/icon-button";
import { LinkBehavior } from "./components/link-behavior";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#009688",
        },
        background: {
          default: "#fff",
        },
        // divider: "rgba(0, 0, 0, 0.12)",
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#009688",
        },
        background: {
          default: "#121212",
        },
      },
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
  },
  spacing: 4, // (factor: number) => `${0.25 * factor}rem`
  cssVariables: {
    colorSchemeSelector: "class",
    cssVarPrefix: "mt",
  },
  components: {
    MuiButton,
    MuiIconButton,
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
