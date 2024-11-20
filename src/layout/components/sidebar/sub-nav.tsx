import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useAppStore, useSelectors } from "@/stores";
import HoverMenu from "./hover-menu";

export function SubNav({ icon, suffix, label, path, children, ...props }: NavMenuProps) {
  const { pathname } = useLocation();
  const active = pathname.startsWith(path);

  const { sidebarOpen } = useAppStore(useSelectors(["sidebarOpen"]));
  const [open, setOpen] = useState(active);
  const [menuOpen, setMenuOpen] = useState(false);

  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <ListItem disablePadding {...props}>
        <ListItemButton
          ref={itemRef}
          sx={[
            {
              minWidth: 0,
              justifyContent: sidebarOpen ? "initial" : "center",
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
          onClick={() => {
            if (sidebarOpen) {
              setOpen(!open);
            }
          }}
          onMouseEnter={() => {
            if (sidebarOpen) return;
            setMenuOpen(true);
          }}
          onMouseLeave={() => {
            if (sidebarOpen) return;
            setMenuOpen(false);
          }}
        >
          {icon && (
            <ListItemIcon className="icon" sx={{ color: active ? "primary.light" : undefined }}>
              {icon}
            </ListItemIcon>
          )}
          <ListItemText
            primary={label}
            sx={[
              sidebarOpen ? { opacity: 1, mx: 3 } : { opacity: 0, mx: 0 },
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
          {sidebarOpen && suffix && <Box className="">{suffix}</Box>}
          {sidebarOpen ? (
            open ? (
              <ChevronRight sx={{ rotate: "90deg", transition: "rotate 200ms linear" }} />
            ) : (
              <ChevronRight sx={{ rotate: 0, transition: "rotate 200ms linear" }} />
            )
          ) : null}
        </ListItemButton>
      </ListItem>
      {sidebarOpen ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              "& .MuiListItemButton-root": {
                pl: 10,
              },
            }}
          >
            {children}
          </List>
        </Collapse>
      ) : (
        <HoverMenu anchorEl={itemRef.current} isOpen={menuOpen} setOpen={setMenuOpen}>
          {children}
        </HoverMenu>
      )}
    </>
  );
}
