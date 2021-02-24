import React, { useState } from "react";
import BG from "../../images/bg.jpg";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={BG} alt="background image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Traveling Made Easy</HeroH1>
        <HeroP>
          Rural or city escape? Sunny islands or snowy mountains? We've got you
          covered.
        </HeroP>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
