// src/components/TopBar.jsx
import React from "react";
import LogoIcon from "./LogoIcon";
import Button from "./Button";
import {
  ArrowRightIcon,
  // EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [animateSidebar, setAnimateSidebar] = useState(false);

  // const toggleSidebar = () => {
  //   if (sidebarOpen) {
  //     setAnimateSidebar(true);
  //     setTimeout(() => {
  //       setSidebarOpen(false);
  //       setAnimateSidebar(false);
  //     }, 300); // Match the duration of the slide-out animation
  //   } else {
  //     setSidebarOpen(true);
  //   }
  // };

  return (
    <header className="fixed top-0 left-0 z-10 w-full h-20 bg-black/80 flex items-center justify-between px-7 ">
      <div className="hidden sm:block flex-shrink-0 w-28">
        <LogoIcon />
      </div>
      {/* <nav className="pl-8 ml-auto flex space-x-8 sm:space-x-16 lg:space-x-24 xl:space-x-32 pr-8 sm:pr-16 lg:pr-24 xl:pr-32 "> */}
      <nav className="flex justify-end items-center ml-auto pr-8 md:pr-16 lg:pr-24 xl:pr-32 space-x-8 md:space-x-16 lg:space-x-24 xl:space-x-32">
        <Link
          to={"/"}
          className="text-white hover:underline text-outline-secondary text-lg sm:text-xl"
        >
          Home
        </Link>
        <Link
          to={"blog"}
          className="text-white hover:underline text-outline-secondary text-lg sm:text-xl"
        >
          Blog
        </Link>
        <Link
          to={"contact"}
          className="text-white hover:underline text-outline-secondary text-lg sm:text-xl "
        >
          Contact
        </Link>
      </nav>

      <div className=" sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        <Button text="Connexion" Icon={ArrowRightIcon} />
      </div>

      {/* UNDER SM SCREENS :
      {sidebarOpen && (
        <div
          className={`fixed top-[80px] right-0 w-64 h-full bg-black/80 z-50 ${
            animateSidebar ? "slide-out-right" : "slide-in-right"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-20">
            <Link
              to={"accueil"}
              className="text-white hover:underline text-outline-secondary text-xl"
            >
              Home
            </Link>
            <Link
              to={"blog"}
              className="text-white hover:underline text-outline-secondary text-xl"
            >
              Blog
            </Link>
            <Link
              to={"contact"}
              className="text-white hover:underline text-xl text-outline-secondary"
            >
              Contact
            </Link>
            <Button text="Connexion" Icon={ArrowRightIcon} />
          </nav>
        </div>
      )} */}
    </header>
  );
};

export default TopBar;
