import { Outlet } from "react-router-dom";
import { NavBar } from "./router";

export const HeroesApp = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
