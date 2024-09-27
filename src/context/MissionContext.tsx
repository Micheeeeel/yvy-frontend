import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Country,
  fetchCountries,
  fetchFilteredMissions,
  fetchTypes,
  Mission,
  Type,
} from "../services/missionService";

// Définir le type pour le contexte des missions
interface MissionContextType {
  filteredMissions: Mission[];
  filterMissions: (country: string, type: string) => void;
  countries: Country[];
  types: Type[];
}

// Créer le contexte avec des valeurs par défaut
const MissionContext = createContext<MissionContextType | undefined>(undefined);

// Fournisseur du contexte
export const MissionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filteredMissions, setFilteredMissions] = useState<Mission[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Charger les missions initiales
        const missionsData = await fetchFilteredMissions("", "");
        setFilteredMissions(missionsData);

        // Charger les pays
        const countriesData = await fetchCountries();
        setCountries(countriesData);

        // Charger les types
        const typesData = await fetchTypes();
        setTypes(typesData);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données initiales :",
          error
        );
      }
    };

    loadInitialData();
  }, []);

  // Fonction pour filtrer les missions
  const filterMissions = async (country: string, type: string) => {
    try {
      const filtered = await fetchFilteredMissions(country, type);
      setFilteredMissions(filtered);
    } catch (error) {
      console.error("Erreur lors du filtrage des missions :", error);
    }
  };

  return (
    <MissionContext.Provider
      value={{ filteredMissions, filterMissions, countries, types }}
    >
      {children}
    </MissionContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des missions
export const useMissionContext = () => {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error("useMissionContext must be used within a MissionProvider");
  }
  return context;
};
