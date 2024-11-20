import { Link, useLocation } from "react-router-dom";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useAppStore, useSelectors } from "@/stores";

export function NavItem({ icon, path, suffix, children, type, ...props }: NavMenuProps) {
  const { pathname } = useLocation();
  const active = pathname.startsWith(path);

  const { sidebarOpen: open } = useAppStore(useSelectors(["sidebarOpen"]));

  if (!open && type === "sub-item") {
    return (
      <MenuItem
        component={Link}
        to={path}
        sx={[
          (theme) => ({
            py: 2,
            px: 4,
            color: "primary.text",
            "&:hover": {
              background: "rgba(0,0,0,0.05)",
            },
            ...theme.applyStyles("dark", {
              color: "#c5c5c5",
              "&:hover": {
                background: "rgba(255,255,255,0.05)",
              },
            }),
          }),
          active
            ? (theme) => ({
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.main",
                }),
              })
            : {},
        ]}
      >
        {children}
      </MenuItem>
    );
  }

  const button = (
    <ListItemButton
      component={Link}
      to={path!}
      sx={[
        {
          minWidth: 0,
          justifyContent: open ? "initial" : "center",
          "& .MuiListItemIcon-root": { minWidth: 0 },
        },
        {
          "&:hover .icon": {
            animation: "tilt-shaking 0.5s linear",
          },
        },
        active
          ? (theme) => ({
              color: "primary.light",
              bgcolor: alpha(theme.palette.primary.light, 0.15),
              "&:hover": {
                bgcolor: alpha(theme.palette.primary.light, 0.15),
              },
            })
          : {},
      ]}
    >
      {icon && (
        <ListItemIcon className="icon" sx={{ color: active ? "primary.light" : undefined }}>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={children}
        sx={[
          open ? { opacity: 1, mx: 3 } : { opacity: 0, mx: 0 },
          {
            "& .MuiTypography-root": {
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          { transition: "opacity 600ms linear" },
        ]}
      />
      {open && suffix && <Box className="">{suffix}</Box>}
    </ListItemButton>
  );

  return (
    <ListItem disablePadding {...props}>
      {open ? (
        button
      ) : (
        <Tooltip
          title={open ? null : children}
          enterDelay={200}
          placement="right"
          arrow
          disableInteractive
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -8],
                  },
                },
              ],
            },
          }}
        >
          {button}
        </Tooltip>
      )}
    </ListItem>
  );
}
