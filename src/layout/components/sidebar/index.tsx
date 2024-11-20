import { HomeOutlined } from "@mui/icons-material";
import { Chip, Divider, Drawer, List } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/common";
import { useAppStore, useSelectors } from "@/stores";
import { NavItem } from "./nav-item";
import { SubNav } from "./sub-nav";
import User from "./user";

export default function Sidebar() {
  const { sidebarOpen } = useAppStore(useSelectors(["sidebarOpen"]));

  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      sx={{}}
      PaperProps={{
        sx: {
          position: "relative",
          flexShrink: 0,
          transition: "width 250ms linear",
          width: sidebarOpen ? 240 : 57,
          overflow: "hidden",
          // borderRight: "none",
        },
      }}
    >
      <List>
        <NavItem
          path={ROUTE_PATHS.home}
          icon={<HomeOutlined />}
          suffix={
            <Chip label="NEW" color="success" size="small" sx={{ height: 20, fontSize: 10 }} />
          }
        >
          Home
        </NavItem>
        <SubNav path={ROUTE_PATHS.product} icon={<HomeOutlined />} label="Product">
          <NavItem path={ROUTE_PATHS.productDetail} type="sub-item">
            Product 1
          </NavItem>
          <NavItem path={ROUTE_PATHS.productDetail + "aa"} type="sub-item">
            Product 2
          </NavItem>
        </SubNav>
        <NavItem path={ROUTE_PATHS.about} icon={<HomeOutlined />}>
          About
        </NavItem>
      </List>
      <Divider sx={{ mt: "auto" }} />
      <User />
    </Drawer>
  );
}
