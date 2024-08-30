import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-primary text-base-content text-ternary p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by YVY
          DRONE
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
