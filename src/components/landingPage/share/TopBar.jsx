// src/components/TopBar.jsx
import React from "react";
import LogoIcon from "./LogoIcon";

const TopBar = () => {
  return (
    <header className="fixed top-0 w-full h-20 bg-black/80 flex items-center justify-between px-8">
      <div className="flex-shrink-0 w-24">
        <LogoIcon />
      </div>
      <nav className="pl-8 ml-auto flex space-x-8 sm:space-x-16 lg:space-x-24 xl:space-x-32 pr-8 sm:pr-16 lg:pr-24 xl:pr-32 ">
        <a href="#home" className="text-white hover:text-primary">
          Accueil
        </a>
        <a href="#blog" className="text-white hover:text-primary">
          Blog
        </a>
        <a href="#contact" className="text-white hover:text-primary">
          Contact
        </a>
      </nav>
      <div className="pr-2 sm:pr-4 lg:pr-8 xl:pr-16">
        <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-lighten ">
          Login
        </button>
      </div>
    </header>
  );
};

export default TopBar;
