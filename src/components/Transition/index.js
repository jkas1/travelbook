import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { TransitionContainer, TransitionImg } from "./TransitionElements";

const Transition = ({ img }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <TransitionContainer id="transition">
      <TransitionImg src={img} />
    </TransitionContainer>
  );
};

export default Transition;
