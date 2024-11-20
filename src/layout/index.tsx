import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AppHelmet from "@/components/helmet";
import Sidebar from "./components/sidebar";

export default function Layout() {
  return (
    <>
      <AppHelmet />
      <Box className="flex h-screen flex-col">
        <Box
          component="nav"
          className="sticky top-0 flex h-14 items-center bg-gray-50 dark:bg-black"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Box px={6} fontWeight="bold" fontSize={24}>
            😊 LOGO 😊
          </Box>
        </Box>
        <Box className="flex flex-grow">
          <Sidebar />
          <Box component="main" className="flex-grow">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
