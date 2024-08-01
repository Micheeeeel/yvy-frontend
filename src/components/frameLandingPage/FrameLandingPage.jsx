import React from "react";
import FrameTitre from "./frameTitre/FrameTitre";
import ImagePresentation from "./ImagePresentation";
import CardLinesDesktop from "./CardLinesDesktop";
import LevelCard from "./levelCard/LevelCard";

const FrameLandingPage = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen relative">
      <div className="max-w-screen-2xl mx-auto pt-20 pb-20 px-4">
        <FrameTitre />
        <div>
          <ImagePresentation />
        </div>
        <CardLinesDesktop color="border-primary" />
        <div className="grid gap-[32px]  p-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto">
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
