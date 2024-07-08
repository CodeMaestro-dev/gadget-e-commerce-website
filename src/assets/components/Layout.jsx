import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
