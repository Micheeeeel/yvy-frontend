import React, { useEffect, useState } from "react";
import TitleSection from "../components/titleSection/TitleSection";
import CardDivider from "../components/share/CardDivider";
import LevelCard from "../components/levelCard/LevelCard";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../components/styles/transitions.css"; // Fichier CSS pour les transitions entre composants
import { fetchMissionsData, Mission } from "../services/missionService";
import MissionList from "../components/MissionList";

const Accueil = () => {
  const [missions, setMissions] = useState<Mission[]>([]); // Utilisation du hook useState pour stocker les missions
  const location = useLocation(); // Récupère l'emplacement actuel

  useEffect(() => {
    const loadMissions = async () => {
      const missionsData = await fetchMissionsData();
      setMissions(missionsData); // Met à jour l'état avec les données récupérées
    };

    loadMissions();
  }, []);

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
      <MissionList missions={missions} />
    </div>
  );
};

export default Accueil;
