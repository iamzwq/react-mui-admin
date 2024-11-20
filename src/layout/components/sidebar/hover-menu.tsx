import { Menu } from "@mui/material";

interface HoverMenuProps {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function HoverMenu({ anchorEl, isOpen, setOpen, children }: HoverMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{
        pointerEvents: "none",
        "& .MuiList-root": {
          pointerEvents: "auto",
        },
      }}
      anchorOrigin={{ vertical: "center", horizontal: "right" }}
      transformOrigin={{ vertical: "center", horizontal: "left" }}
    >
      {children}
    </Menu>
  );
}
