import React from "react";
import Icon1 from "../../images/destination.svg";
import Icon2 from "../../images/hotel.svg";
import Icon3 from "../../images/compass.svg";
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
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="services image" />
          <ServicesH2>Trip Planning</ServicesH2>
          <ServicesP>
            Book flights, trains, and cars anywhere and anytime with help from
            our expert travel advisors.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="services image" />
          <ServicesH2>Handpicked Hotels</ServicesH2>
          <ServicesP>
            From budget to luxury, we'll provide you hundreds of hotels to
            choose from around the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="services image" />
          <ServicesH2>Tour Guides Guaranteed</ServicesH2>
          <ServicesP>
            Tour guides are available to take you on tours explaining facts,
            history, local customs, and more!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
