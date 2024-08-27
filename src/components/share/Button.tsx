import React from "react";

type ButtonProps = {
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonProps> = ({ text, Icon }) => {
  return (
    <button
      className="flex items-center bg-primary 
      py-2 px-4 rounded-full hover:bg-primary-lighten 
      font-inter font-semibold text-secondary hover:text-secondary-light "
    >
      {text}
      {Icon && <Icon className="ml-2 h-5 w-5 " />}
    </button>
  );
};

export default Button;
