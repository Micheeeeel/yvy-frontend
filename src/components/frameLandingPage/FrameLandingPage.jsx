import React from "react";
import FrameTitre from "./frameTitre/FrameTitre";
import ImagePresentation from "../ImagePresentation";
import CardLinesDesktop from "../CardLinesDesktop";
import IconComponentNode from "../IconComponentNode";
import MyButton from "../MyButton";
import SignInCircle from "../SignInCircle";

const FrameLandingPage = () => {
  return (
    <div className="bg-black text-white w-[1440px] h-[2400px]  relative">
      <div className="flex flex-col items-center gap-5 w-[1440px] h-[2572px]  pt-20 pb-20 absolute  ">
        <FrameTitre />
        <ImagePresentation />
        <CardLinesDesktop />
        <IconComponentNode />
        <MyButton />
        <SignInCircle />
      </div>
    </div>
  );
};

export default FrameLandingPage;
