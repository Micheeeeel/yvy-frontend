import React from "react";
import TopBar from "../components/share/TopBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/share/Footer";

export default function Root() {
  return (
    <div className="bg-black text-white w-full min-h-screen relative">
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
