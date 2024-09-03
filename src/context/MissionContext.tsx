import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchMissionsData, Mission } from "../services/missionService";

// Définir le type pour le contexte des missions
interface MissionContextType {
  missions: Mission[];
  filteredMissions: Mission[];
  filterMissions: (country: string, type: string) => void;
}

// Créer le contexte avec des valeurs par défaut
const MissionContext = createContext<MissionContextType | undefined>(undefined);

// Fournisseur du contexte
export const MissionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [filteredMissions, setFilteredMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const loadMissions = async () => {
      const missionsData = await fetchMissionsData();
      setMissions(missionsData);
      setFilteredMissions(missionsData);
    };

    loadMissions();
  }, []);

  // Fonction pour filtrer les missions
  const filterMissions = (country: string, type: string) => {
    let filtered = missions;

    if (country) {
      filtered = filtered.filter((mission) => mission.country === country);
    }

    if (type) {
      filtered = filtered.filter((mission) => mission.type === type);
    }

    setFilteredMissions(filtered);
  };

  return (
    <MissionContext.Provider
      value={{ missions, filteredMissions, filterMissions }}
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
