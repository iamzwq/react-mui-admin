import { toast } from "react-toastify";
import CheckIcon from "@mui/icons-material/Check";
import { Alert, Box, Button } from "@mui/material";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <Box>
      <ThemeToggle />
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <Button variant="contained" onClick={() => toast("Hello world!")}>
        🚀 Show Toast
      </Button>
    </Box>
  );
}
