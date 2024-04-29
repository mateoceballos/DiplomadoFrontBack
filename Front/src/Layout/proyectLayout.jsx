import { Outlet } from "react-router";
import React from "react";
import Header from "../components/web/header/header";
import Footer from "../components/web/footer/index";

export default function proyectLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
