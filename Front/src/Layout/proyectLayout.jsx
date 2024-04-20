import { Outlet } from "react-router";
import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/index";

export default function proyectLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
