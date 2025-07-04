import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HTMLFlipBook from "react-pageflip";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
