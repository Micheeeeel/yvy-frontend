import TitleSection from "../components/titleSection/TitleSection";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../components/styles/transitions.css"; // Fichier CSS pour les transitions entre composants
import MissionList from "../components/MissionList";
import SearchForm from "../components/SearchForm";
import { useMissionContext } from "../context/MissionContext"; // Import du contexte

const Accueil = () => {
  const { filteredMissions, filterMissions, missions } = useMissionContext();
  const location = useLocation(); // Récupère l'emplacement actuel

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

      {/* Formulaire de recherche pour filtrer les missions */}
      <SearchForm
        onFilterChange={filterMissions}
        countries={countries}
        types={types}
      />

      {/* Liste des missions filtrées */}
      <MissionList missions={filteredMissions} />
    </div>
  );
};

export default Accueil;
