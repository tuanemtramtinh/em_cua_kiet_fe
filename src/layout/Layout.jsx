import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HTMLFlipBook from "react-pageflip";

const Layout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
