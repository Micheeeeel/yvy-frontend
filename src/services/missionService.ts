import axios from "axios";

export interface Mission {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  country: string;
  type: string;
  lat: number;
  lng: number;
}

export interface Country {
  isoAlpha2: string;
  name: string;
}

export interface Type {
  name: string;
}

const API_URL = process.env.REACT_APP_API_URL || "https://localhost:4000"; // Valeur par défaut si aucune variable d'environnement n'est définie

export const fetchFilteredMissions = async (
  country: string,
  type: string
): Promise<Mission[]> => {
  const response = await axios.get(`${API_URL}/missions`, {
    params: { country, type },
  });
  return response.data;
};

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get(`${API_URL}/missions/countries`);
  return response.data;
};

export const fetchTypes = async (): Promise<Type[]> => {
  const response = await axios.get(`${API_URL}/missions/types`);
  return response.data;
};
