import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const handler = () => {
      setMode(event.target.value as "system" | "light" | "dark");
    };
    if (!document.startViewTransition) {
      handler();
      return;
    }

    await document.startViewTransition(handler).ready;

    const currentMode = systemMode ?? mode;
    const r = Math.hypot(window.innerWidth, window.innerHeight);
    document.documentElement.animate(
      { clipPath: [`circle(${0}px at 0px 0px)`, `circle(${r}px at 0px 0px)`] },
      {
        duration: 500,
        easing: "ease-in",
        direction: currentMode === "dark" ? "normal" : "reverse",
        pseudoElement:
          currentMode === "dark" ? `::view-transition-new(root)` : `::view-transition-old(root)`,
      },
    );
  };
  return (
    <Box className="flex min-h-14 w-full items-center justify-center rounded-lg p-6">
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <RadioGroup row value={mode} onChange={handleChange}>
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
