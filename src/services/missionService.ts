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

export const fetchFilteredMissions = async (
  country: string,
  type: string
): Promise<Mission[]> => {
  const response = await axios.get("http://localhost:4000/missions", {
    params: { country, type },
  });
  return response.data;
};

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get("http://localhost:4000/missions/countries");
  return response.data;
};

export const fetchTypes = async (): Promise<Type[]> => {
  const response = await axios.get("http://localhost:4000/missions/types");
  return response.data;
};
