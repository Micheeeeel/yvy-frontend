import React from "react";
import FrameTitre from "./frameTitre/FrameTitre";
import ImagePresentation from "./ImagePresentation";
import CardLinesDesktop from "./CardLinesDesktop";
import LevelCard from "./levelCard/LevelCard";

const FrameLandingPage = () => {
  return (
    <div className="bg-black text-white w-[1440px] h-[2400px]  relative">
      <div className="flex flex-col items-center gap-5 w-[1440px] h-[2572px]  pt-20 pb-20 absolute  ">
        <FrameTitre />
        <ImagePresentation />
        <CardLinesDesktop color="border-primary" />
        <div className="flex flex-wrap gap-x-[32px] gap-y-[32px] px-[32px] py-[32px] justify-center">
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
        </div>
      </div>
    </div>
  );
};

export default FrameLandingPage;
