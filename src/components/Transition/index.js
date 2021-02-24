import React from "react";
import { TransitionContainer, TransitionImg } from "./TransitionElements";

const Transition = ({ img }) => {
  return (
    <TransitionContainer id="transition">
      <TransitionImg src={img} alt="transition image" />
    </TransitionContainer>
  );
};

export default Transition;
