import React, { useEffect, useState } from "react";
import TitleSection from "../components/titleSection/TitleSection";
import CardDivider from "../components/share/CardDivider";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../components/styles/transitions.css"; // Fichier CSS pour les transitions entre composants
import { fetchMissionsData, Mission } from "../services/missionService";
import MissionList from "../components/MissionList";
import SearchForm from "../components/SearchForm";

const Accueil = () => {
  const [missions, setMissions] = useState<Mission[]>([]); // Utilisation du hook useState pour stocker les missions
  const [filteredMissions, setFilteredMissions] = useState<Mission[]>([]);
  const location = useLocation(); // Récupère l'emplacement actuel

  useEffect(() => {
    const loadMissions = async () => {
      const missionsData = await fetchMissionsData();
      setMissions(missionsData); // Met à jour l'état avec les données récupérées
      setFilteredMissions(missionsData); // Initialiser les missions filtrées
    };

    loadMissions();
  }, []);

  const handleFilterChange = (country: string, type: string) => {
    let filtered = missions;

    if (country) {
      filtered = filtered.filter((mission) => mission.country === country);
    }

    if (type) {
      filtered = filtered.filter((mission) => mission.type === type);
    }

    setFilteredMissions(filtered);
  };

  // Extraire les valeurs uniques de country et type pour les options de sélection
  const countries = Array.from(
    new Set(missions.map((mission) => mission.country))
  );
  const types = Array.from(new Set(missions.map((mission) => mission.type)));

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
      {/* Formulaire de recherche pour filtrer les missions */}
      <SearchForm
        onFilterChange={handleFilterChange}
        countries={countries}
        types={types}
      />
      {/* Liste des missions filtrées */}
      <MissionList missions={filteredMissions} />{" "}
    </div>
  );
};

export default Accueil;
