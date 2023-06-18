import { createBrowserRouter } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";
import { AuthRoutes } from "../auth/routes";

export const AppRouter = () =>
  createBrowserRouter([
    { path: "/login", element: <LoginPage />, children: AuthRoutes },
    {
      path: "/",
      element: <HeroesApp />,
      children: HeroesRoutes,
    },
  ]);
