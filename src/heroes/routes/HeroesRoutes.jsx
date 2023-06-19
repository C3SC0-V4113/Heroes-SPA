import { Navigate } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = [
  {
    index: true,
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/marvel"} replace />,
  },
  { path: "search", element: <SearchPage /> },
  { path: "hero", element: <HeroPage /> },
];
