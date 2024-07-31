import React from "react";
import FrameTitre from "./frameTitre/FrameTitre";
import ImagePresentation from "./ImagePresentation";
import CardLinesDesktop from "./CardLinesDesktop";
import LevelCard from "./levelCard/LevelCard";

const FrameLandingPage = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen relative">
      <div className="flex flex-col items-center gap-5 w-full max-w-screen-xl mx-auto pt-20 pb-20   ">
        <FrameTitre />
        <div className="w-full px-4">
          <ImagePresentation className=" h-auto object-contain " />
        </div>
        <CardLinesDesktop color="border-primary" />
        <div className="flex flex-wrap w-full gap-x-[32px] gap-y-[32px] px-[32px] py-[32px] ">
          <LevelCard />
          <LevelCard />
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
