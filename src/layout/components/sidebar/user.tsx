import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useAppStore, useSelectors } from "@/stores";

export default function User() {
  const { sidebarOpen, toggleSidebarOpen } = useAppStore(
    useSelectors(["sidebarOpen", "toggleSidebarOpen"]),
  );
  return (
    <Stack direction="row" alignItems="center" sx={{ p: 2 }}>
      {sidebarOpen && (
        <>
          <Avatar>
            <AccountCircleIcon sx={{ fontSize: 32 }} />
          </Avatar>
          <Typography variant="body2" sx={{ mr: "auto", ml: 2 }}>
            vincent.zhang
          </Typography>
        </>
      )}
      <IconButton onClick={toggleSidebarOpen}>
        {sidebarOpen ? (
          <KeyboardDoubleArrowLeftIcon sx={{ rotate: "0deg" }} />
        ) : (
          <KeyboardDoubleArrowLeftIcon sx={{ rotate: "180deg" }} />
        )}
      </IconButton>
    </Stack>
  );
}
