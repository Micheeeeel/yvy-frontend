import React from "react";
import FrameTitre from "./FrameTitre";
import ImagePresentation from "./ImagePresentation";
import CardLinesDesktop from "./CardLinesDesktop";
import IconComponentNode from "./IconComponentNode";
import MyButton from "./MyButton";
import SignInCircle from "./SignInCircle";
import "./style.css";

const FrameLandingPage = () => {
  return (
    <div className="frame-landing-page">
      <FrameTitre />
      <ImagePresentation />
      <CardLinesDesktop />
      <IconComponentNode />
      <MyButton />
      <SignInCircle />
      <button>My other Button</button>;
    </div>
  );
};

export default FrameLandingPage;
