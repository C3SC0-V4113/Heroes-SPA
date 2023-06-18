import { Outlet } from "react-router-dom";
import { NavBar } from "./routes";

export const HeroesApp = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
