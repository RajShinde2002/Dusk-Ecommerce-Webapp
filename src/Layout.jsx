import React from "react";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Cart from "../src/@/components/Cart"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
