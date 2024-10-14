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

// Composant personnalisé pour ajuster la vue de la carte
const FitBoundsMap = ({ bounds }: { bounds: L.LatLngBoundsExpression }) => {
  const map = useMap();

  useEffect(() => {
    if (bounds) {
      // Vérifie que les limites sont valides
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 }); // Ajuste le zoom pour englober les marqueurs
      map.setMaxBounds(bounds); // Définit les limites maximales de la carte
    }
  }, [map, bounds]);

  return null;
};

const LevelsMap = () => {
  const { filteredMissions } = useMissionContext();

  // Filtrer les missions avec des lat/lng valides
  const validMissions = filteredMissions.filter(
    (mission) => !Number.isNaN(mission.lat) && !Number.isNaN(mission.lng)
  );

  // Calcul des positions valides
  const positions = validMissions.map(
    (mission) => [mission.lat, mission.lng] as [number, number]
  );

  // Calcul des limites pour ajuster la vue
  const bounds = L.latLngBounds(positions);

  // Calcul du centre (barycentre) des positions valides
  const centerLat =
    positions.reduce((acc, [lat]) => acc + lat, 0) / positions.length || 0;
  const centerLng =
    positions.reduce((acc, [, lng]) => acc + lng, 0) / positions.length || 0;
  const center = [centerLat, centerLng] as L.LatLngExpression;

  return (
    <div className="w-full h-screen p-8">
      <MapContainer
        className="w-full h-full z-0"
        center={center}
        zoom={13}
        minZoom={3}
        scrollWheelZoom={false}
        dragging={true}
        touchZoom={true}
        doubleClickZoom={true}
        boxZoom={true}
        keyboard={true}
      >
        {/* Ajustement de la vue pour englober tous les marqueurs */}
        {positions.length > 0 && <FitBoundsMap bounds={bounds} />}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Affichage des marqueurs pour les missions valides */}
        {validMissions.map((mission) => (
          <Marker
            key={mission.id}
            position={[mission.lat, mission.lng]}
            icon={defaultIcon}
          >
            <Popup>
              {mission.title} <br /> {mission.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LevelsMap;
