import { createBrowserRouter } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";
import { AuthRoutes } from "../auth/routes";
import { PrivateRoute, PublicRoute } from "./components";

export const AppRouter = () =>
  createBrowserRouter([
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
      children: AuthRoutes,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <HeroesApp />
        </PrivateRoute>
      ),
      children: HeroesRoutes,
    },
  ]);
