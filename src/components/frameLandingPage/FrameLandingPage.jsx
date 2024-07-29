import React from "react";
import FrameTitre from "./frameTitre/FrameTitre";
import ImagePresentation from "../ImagePresentation";
import CardLinesDesktop from "../CardLinesDesktop";
import IconComponentNode from "../IconComponentNode";
import MyButton from "../MyButton";
import SignInCircle from "../SignInCircle";
import "./FrameLandingPage.css";

const FrameLandingPage = () => {
  return (
    <div className="frame-landing-page">
      <div className="landing-page">
        <FrameTitre className="text-white" />
        <ImagePresentation />
        <CardLinesDesktop />
        <IconComponentNode />
        <MyButton />
        <SignInCircle />
      </div>
    </div>
  );
};

export default FrameLandingPage;
