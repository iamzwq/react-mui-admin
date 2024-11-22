import { useEffect, useState } from "react";

const VERSION_KEY = "app-version";

export const useCheckVersion = () => {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch("./version.json", { cache: "no-cache" });
        const { version } = await res.json();
        const currentVersion = localStorage.getItem(VERSION_KEY);
        if (String(currentVersion) !== String(version)) {
          setHasUpdate(true);
          localStorage.setItem(VERSION_KEY, version);
        }
      } catch (error) {
        console.error("Failed to check version:", error);
      }
    };
    checkVersion();

    const interval = setInterval(checkVersion, 1000 * 60 * 10); // Check version every 10 minutes

    return () => clearInterval(interval);
  });

  return hasUpdate;
};
