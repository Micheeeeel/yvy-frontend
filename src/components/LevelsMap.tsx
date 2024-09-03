import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { useMissionContext } from "../context/MissionContext";

// Définition de l'icône du marqueur
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Composant pour ajuster les limites et le zoom
const FitBounds = ({ positions }: { positions: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;

    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [50, 50] }); // Ajuste les limites avec un padding
  }, [positions, map]);

  return null;
};

const LevelsMap = () => {
  const { filteredMissions } = useMissionContext();

  // Crée un tableau de positions [latitude, longitude]
  const positions = filteredMissions.map((mission) => [
    mission.lat,
    mission.lng,
  ]) as [number, number][];

  return (
    <div className="w-full h-screen p-8">
      <MapContainer
        className="w-full h-full z-0"
        center={[51.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredMissions.map((mission) => (
          <Marker
            key={mission.id}
            position={[mission.lat, mission.lng]}
            icon={defaultIcon}
          >
            <Popup>
              {mission.title} <br /> {mission.lat}, {mission.lng}
            </Popup>
          </Marker>
        ))}

        {/* Composant pour ajuster les limites et le zoom */}
        <FitBounds positions={positions} />
      </MapContainer>
    </div>
  );
};

export default LevelsMap;
