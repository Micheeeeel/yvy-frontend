import React from "react";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import LogoIcon from "../share/LogoIcon";

const TitleSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-4">
      <div className="flex-shrink-0 w-48 ">
        <LogoIcon />
      </div>{" "}
      <MainTitle />
      <SubTitle />
      <div className="divider divider-primary font-bold w-[300px] max-width: 100% self-center"></div>
    </div>
  );
};

export default TitleSection;
