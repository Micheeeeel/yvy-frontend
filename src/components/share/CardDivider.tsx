import React from "react";

type CardDividerProps = {
  color: string;
};

const CardDivider: React.FC<CardDividerProps> = ({ color }) => {
  return (
    <div className="w-full">
      <div className={`border ${color}`}></div>
    </div>
  );
};

export default CardDivider;
