import React, { useState } from "react";
import Icon1 from "../../images/destination.svg";
import Icon2 from "../../images/hotel.svg";
import Icon3 from "../../images/compass.svg";
import { animateScroll as scroll } from "react-scroll";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Trip Planning</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Handpicked Hotels</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Tour Guides Guaranteed</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
