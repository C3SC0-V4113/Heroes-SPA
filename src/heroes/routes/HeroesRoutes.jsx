import { Navigate } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = [
  {
    index: true,
    element: <Navigate to={"/marvel"} replace />,
  },
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "/",
    element: <Navigate to={"/marvel"} replace />,
  },
  { path: "search", element: <SearchPage /> },
  { path: "hero/:id", element: <HeroPage /> },
];
