import React from "react";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import SeparatorLine from "./SeparatorLine";
import LogoIcon from "../share/LogoIcon";

const TitleSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <LogoIcon />
      <MainTitle />
      <SubTitle />
      <SeparatorLine />
    </div>
  );
};

export default TitleSection;
