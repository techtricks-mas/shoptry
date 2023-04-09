import React from "react";
import Navbar from "./Layouts/Navbar";
import Header from "./Layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
