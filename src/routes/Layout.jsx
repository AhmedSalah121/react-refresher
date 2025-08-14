import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Layout;
