import React from "react";
import CardDivider from "../share/CardDivider";
import "../styles/gradients.css";
import { Link } from "react-router-dom";
import { Mission } from "../../services/missionService";

interface LevelCardProps {
  mission: Mission;
}

const LevelCard: React.FC<LevelCardProps> = ({ mission }) => {
  return (
    <Link to="/levels/1" className="block">
      <div className="relative max-w-[430px] h-auto mx-auto bg-black overflow-hidden gradient-border">
        <div className="relative flex flex-col p-4 gap-4">
          <div>
            <h2 className="font-bold text-3xl text-white text-left uppercase">
              {mission.title}
            </h2>
          </div>
          <CardDivider color="border-secondary" />
          <div className="flex justify-center">
            <img
              className="w-full h-48 object-cover"
              src={mission.image}
              alt={mission.title}
            />
          </div>
          <p className=" text-2xl text-white text-left">
            {mission.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LevelCard;
