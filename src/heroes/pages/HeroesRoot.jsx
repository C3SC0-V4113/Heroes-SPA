import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const HeroesRoot = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
