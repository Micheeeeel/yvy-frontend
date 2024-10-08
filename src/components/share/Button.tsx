import React from "react";

type ButtonProps = {
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonProps> = ({ text, Icon }) => {
  return (
    <div>
      <button className="btn  btn-primary text-secondary text-xl border-3 border-secondary ">
        <span className="text-outline-black ">{text}</span>
        {Icon && (
          <Icon className="ml-2 h-5 w-5 icon-outline-black" strokeWidth={3} />
        )}
      </button>
    </div>
  );
};

export default Button;
