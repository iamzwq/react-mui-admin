import { Helmet } from "react-helmet-async";
import { useMatches } from "react-router-dom";

export default function AppHelmet() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const title = (currentRoute.handle as any)?.title;
  return (
    <Helmet>
      <title>{title || import.meta.env.VITE_APP_TITLE}</title>
    </Helmet>
  );
}
