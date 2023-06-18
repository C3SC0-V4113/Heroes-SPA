import { Navigate, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HeroesApp />,
      children: [
        {
          path: "marvel",
          element: <MarvelPage />,
        },
        {
          path: "dc",
          element: <DcPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} replace />,
        },
      ],
    },
  ]);
