import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Import des images des marqueurs
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

const LevelsMap = () => {
  const { filteredMissions } = useMissionContext(); // Utilise le contexte pour obtenir les missions filtrées
  const initialZoom = 3;
  return (
    <div className="w-full h-screen p-8">
      <MapContainer
        className="w-full h-full z-0"
        center={[51.505, -0.09]}
        zoom={initialZoom}
        maxZoom={initialZoom}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
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
      </MapContainer>
    </div>
  );
};

export default LevelsMap;
