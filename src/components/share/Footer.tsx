import React from "react";
import LogoIcon from "./LogoIcon";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-neutral text-secondary p-4  font-bold ">
      <aside>
        <div className="flex items-center justify-between gap-12">
          <div className="w-28">
            <LogoIcon />
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by YVY
            DRONE
          </p>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
