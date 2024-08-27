import React from "react";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import SeparatorLine from "./SeparatorLine";
import LogoIcon from "../share/LogoIcon";

const TitleSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="flex-shrink-0 w-48">
        <LogoIcon />
      </div>{" "}
      <MainTitle />
      <SubTitle />
      <SeparatorLine />
    </div>
  );
};

export default TitleSection;
