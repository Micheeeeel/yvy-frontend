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
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Charger les données initiales sans filtre
        const missionsData = await fetchFilteredMissions("", "");
        setFilteredMissions(missionsData);

        // Charger les pays et les types initiaux
        const countriesData = await fetchCountries();
        setCountries(countriesData);

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

  // Fonction pour filtrer les missions et mettre à jour les pays et types en fonction des critères
  const filterMissions = async (country: string, type: string) => {
    try {
      // Mettre à jour les missions filtrées
      const filtered = await fetchFilteredMissions(country, type);
      if (filtered.length > 0) {
        setFilteredMissions(filtered);

        // Mettre à jour les pays disponibles en fonction du type sélectionné
        const updatedCountries = await fetchCountries(type);
        setCountries(updatedCountries);

        // Mettre à jour les types disponibles en fonction du pays sélectionné
        const updatedTypes = await fetchTypes(country);
        setTypes(updatedTypes);
      } else {
        console.warn("Aucune mission trouvée.");
      }
    } catch (error) {
      console.error("Erreur lors du filtrage des missions :", error);
    }
  };

  return (
    <MissionContext.Provider
      value={{
        filteredMissions,
        filterMissions,
        countries,
        types,
      }}
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
