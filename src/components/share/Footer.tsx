import React from "react";
import LogoIcon from "./LogoIcon";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-around aline items-center bg-neutral p-4 gap-4 text-secondary text-outline-black">
      <div className="w-28">
        <LogoIcon />
      </div>
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} - All rights reserved by Thomas
        MICHEL (future YVY DRONE).
      </p>
    </div>
  );
};

export default Footer;
