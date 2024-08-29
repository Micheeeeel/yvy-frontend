export interface Mission {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  country: string;
  type: string;
}

export const fetchMissionsData = async (): Promise<Mission[]> => {
  try {
    const response = await fetch("/missions.json"); //  ce chemin depuis la racine suffit car le fichier est dans le dossier "public" du projet
    if (!response.ok) {
      throw new Error("Failed to fetch missions data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
