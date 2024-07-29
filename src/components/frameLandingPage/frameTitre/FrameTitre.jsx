import React from "react";
import LabelTitle from "./LabelTitle";
import LabelTitleText from "./LabelTitleText";
import Line from "./Line";
import Logo from "./Logo";

const FrameTitre = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <Logo />
      <LabelTitle />
      <LabelTitleText />
      <Line />
    </div>
  );
};

export default FrameTitre;
