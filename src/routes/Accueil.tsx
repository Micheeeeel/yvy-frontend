import React from "react";
import TitleSection from "../components/titleSection/TitleSection";
import PresentationImage from "../components/PresentationImage";
import CardDivider from "../components/share/CardDivider";
import LevelCard from "../components/levelCard/LevelCard";

const Accueil = () => {
  return (
    <div className="max-w-screen-3xl mx-auto pt-20 pb-20 px-4">
      <TitleSection />
      <div>
        <PresentationImage />
      </div>
      <CardDivider color="border-primary" />
      <div className="flex flex-wrap gap-[32px] p-[32px] justify-center">
        <div className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[calc1005%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
        <div className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]">
          <LevelCard />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
