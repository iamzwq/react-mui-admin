import {
  Menu,
  MenuItem,
  type MenuItemStyles,
  type RenderExpandIconParams,
  Sidebar,
  SubMenu,
} from "react-pro-sidebar";
import { AccessAlarm, AcUnitOutlined, ChevronRight, HomeOutlined } from "@mui/icons-material";
import { Chip, Link } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/common";
import { useDarkMode } from "@/hooks";

export default function SidebarV2({ collapsed }: { collapsed: boolean }) {
  const isDark = useDarkMode();

  const menuItemStyles: MenuItemStyles = {
    root: {
      color: "rgb(96, 116, 137)",
    },
    SubMenuExpandIcon: {
      display: "flex",
      alignItems: "center",
    },
    subMenuContent: {},
  };

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor={isDark ? "#1e1e1e" : "#fafafa"}
      rootStyles={{ borderRightColor: isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)" }}
    >
      <Menu
        menuItemStyles={menuItemStyles}
        renderExpandIcon={(params: RenderExpandIconParams) => {
          return collapsed ? null : params.open ? (
            <ChevronRight sx={{ rotate: "90deg", transition: "rotate 200ms linear" }} />
          ) : (
            <ChevronRight sx={{ rotate: 0, transition: "rotate 200ms linear" }} />
          );
        }}
      >
        <MenuItem
          component={<Link href={ROUTE_PATHS.home} />}
          icon={<HomeOutlined />}
          suffix={"12312"}
        >
          Home
        </MenuItem>
        <MenuItem component={<Link href={ROUTE_PATHS.about} />} icon={<AccessAlarm />}>
          About
        </MenuItem>
        <SubMenu
          label="Product"
          icon={<AcUnitOutlined />}
          suffix={
            <Chip label="NEW" color="success" size="small" sx={{ height: 20, fontSize: 10 }} />
          }
          // className="product-menu"
          //   onMouseEnter={() => {
          //     if (!collapsed) return;
          //     const ele = document.querySelector(".product-menu .ps-menu-button") as HTMLElement;
          //     if (ele) {
          //       ele.click();
          //     }
          //   }}
        >
          <MenuItem component={<Link href={ROUTE_PATHS.productDetail} />}>Product 1</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
