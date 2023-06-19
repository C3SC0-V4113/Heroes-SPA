import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage } from "../pages";

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
];
