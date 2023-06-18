import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";

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
