import React from "react";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

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
