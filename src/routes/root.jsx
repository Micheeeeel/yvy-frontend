import React from "react";
import TopBar from "../components/landingPage/share/TopBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-black text-white w-full min-h-screen relative">
      <TopBar />
      <Outlet />
    </div>
  );
}
