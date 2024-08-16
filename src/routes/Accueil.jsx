import React from "react";
import TitleSection from "../components/titleSection/TitleSection";
import PresentationImage from "../components/PresentationImage";
import CardDivider from "../components/share/CardDivider";
import LevelCard from "../components/levelCard/LevelCard";

const Accueil = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20 pb-20 px-4">
      <TitleSection />
      <div>
        <PresentationImage />
      </div>
      <CardDivider color="border-primary" />
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
  );
};

export default Accueil;
