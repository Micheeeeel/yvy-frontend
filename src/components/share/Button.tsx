import React from "react";

type ButtonProps = {
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonProps> = ({ text, Icon }) => {
  return (
    <div>
      <button className="btn btn-primary text-secondary text-lg ">
        {text}
        {Icon && <Icon className="ml-2 h-5 w-5 " />}
      </button>
    </div>
  );
};

export default Button;
