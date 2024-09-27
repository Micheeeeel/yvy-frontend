import TitleSection from "../components/titleSection/TitleSection";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../components/styles/transitions.css"; // Fichier CSS pour les transitions entre composants
import MissionList from "../components/MissionList";
import SearchForm from "../components/SearchForm";
import { useMissionContext } from "../context/MissionContext"; // Import du contexte

const Accueil = () => {
  const { filteredMissions, filterMissions, countries, types } =
    useMissionContext();
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

      {/* Formulaire de recherche pour filtrer les missions */}
      <SearchForm
        onFilterChange={filterMissions}
        countries={countries.map((country) => country.name)}
        types={types.map((type) => type.name)}
      />

      {/* Liste des missions filtrées */}
      <MissionList missions={filteredMissions} />
    </div>
  );
};

export default Accueil;
