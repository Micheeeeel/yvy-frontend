// src/components/TopBar.jsx
import React from "react";
import LogoIcon from "./LogoIcon";
import Button from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animateSidebar, setAnimateSidebar] = useState(false);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setAnimateSidebar(true);
      setTimeout(() => {
        setSidebarOpen(false);
        setAnimateSidebar(false);
      }, 300); // Match the duration of the slide-out animation
    } else {
      setSidebarOpen(true);
    }
  };

  return (
    <header className="fixed top-0 w-full h-20 bg-black/80 flex items-center justify-between px-8 z-50">
      {/* UPPER SM SCREENS : */}
      <div className="flex-shrink-0 w-24">
        <LogoIcon />
      </div>
      {/* <nav className="pl-8 ml-auto flex space-x-8 sm:space-x-16 lg:space-x-24 xl:space-x-32 pr-8 sm:pr-16 lg:pr-24 xl:pr-32 "> */}
      <nav
        className=" hidden sm:flex  
                    sm:ml-auto 
                    sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32   
                    sm:space-x-8 md:space-x-16 lg:space-x-24 xl:space-x-32 "
      >
        <Link to={"accueil"} className="text-white hover:underline">
          Accueil
        </Link>
        <a href="/blog" className="text-white hover:underline">
          Blog
        </a>
        <Link to={"contact"} className="text-white hover:underline">
          Contact
        </Link>
      </nav>

      <div className="hidden sm:block sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        <Button text="Connexion" Icon={ArrowRightIcon} />
      </div>
      <button onClick={toggleSidebar} className="sm:hidden">
        <EllipsisVerticalIcon className="h-6 w-6 text-primary-500 " />
      </button>

      {/* UNDER SM SCREENS : */}
      {sidebarOpen && (
        <div
          className={`fixed top-[80px] right-0 w-64 h-full bg-black/80 z-50 ${
            animateSidebar ? "slide-out-right" : "slide-in-right"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-20">
            <a href="#home" className="text-white hover:underline">
              Accueil
            </a>
            <a href="#blog" className="text-white hover:underline">
              Blog
            </a>
            <a href="#contact" className="text-white hover:underline">
              Contact
            </a>
            <Button text="Connexion" Icon={ArrowRightIcon} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopBar;
