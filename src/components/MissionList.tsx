import React from "react";
import LevelCard from "./levelCard/LevelCard";
import { Mission } from "../services/missionService";

interface MissionListProps {
  missions: Mission[];
}

const MissionList: React.FC<MissionListProps> = ({ missions }) => {
  return (
    <div className="flex flex-wrap gap-[32px] p-[8px] justify-center">
      {missions.map((mission) => (
        <div
          key={mission.id}
          className="flex justify-center w-[calc(100%-32px)] sm:w-[calc(50%-32px)] lg:w-[calc(33.33%-32px)] xl:w-[calc(25%-32px)]"
        >
          <LevelCard mission={mission} />
        </div>
      ))}
    </div>
  );
};

export default MissionList;
