import { Apple, GitHub, Google } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";

export default function LoginOthers() {
  return (
    <Stack direction="row" gap={4} justifyContent="center">
      <Tooltip title="GitHub">
        <GitHub sx={{ cursor: "pointer" }} />
      </Tooltip>
      <Tooltip title="Google">
        <Google sx={{ cursor: "pointer" }} />
      </Tooltip>
      <Tooltip title="Apple">
        <Apple sx={{ cursor: "pointer" }} />
      </Tooltip>
    </Stack>
  );
}
