import React from "react";
import TitleSection from "../components/titleSection/TitleSection";
import CardDivider from "../components/share/CardDivider";
import LevelCard from "../components/levelCard/LevelCard";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../components/styles/transitions.css"; // Fichier CSS pour les transitions entre composants

const Accueil = () => {
  const location = useLocation(); // Récupère l'emplacement actuel

  return (
    <div className="max-w-screen-3xl mx-auto pt-20 pb-20 px-4">
      <TitleSection />
      <TransitionGroup>
        {/* Utilisation de CSSTransition pour appliquer une animation à l'Outlet */}
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <div>
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <CardDivider color="border-primary" />
      <div className="flex flex-wrap gap-[32px] p-[8px] justify-center">
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
