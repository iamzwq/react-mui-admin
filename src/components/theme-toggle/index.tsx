import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      className="flex min-h-14 w-full items-center justify-center rounded-lg p-6"
      // sx={{
      //   bgcolor: "background.default",
      //   color: "text.primary",
      // }}
    >
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <RadioGroup
          row
          value={mode}
          onChange={(event) => setMode(event.target.value as "system" | "light" | "dark")}
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
