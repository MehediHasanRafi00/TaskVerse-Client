import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <section className="flex-1">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default MainLayout;
