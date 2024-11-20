import { ToastContainer } from "react-toastify";
import { useColorScheme } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const { mode, systemMode } = useColorScheme();
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      limit={3}
      //   draggable
      pauseOnHover
      theme={systemMode || mode}
      //   transition: Bounce,
    />
  );
}
