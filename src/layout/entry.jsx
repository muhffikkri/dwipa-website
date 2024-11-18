import { Outlet } from "react-router-dom";
import { NavPar } from "./navbar";

// halaman untuk navbar dan footer
export const Navbar = () => {
  return (
    <>
      <NavPar />
      <Outlet />
    </>
  );
};
