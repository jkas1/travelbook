import React, { useState } from "react";
import Icon1 from "../../images/img3.jpg";
import Icon2 from "../../images/img4.jpg";
import Icon3 from "../../images/img5.jpg";
import Icon4 from "../../images/img6.jpg";
import Icon5 from "../../images/img7.jpg";
import Icon6 from "../../images/img8.jpg";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryIcon,
  GalleryH,
  ArrowForward,
  ArrowRight,
} from "./GalleryElements";

const GallerySection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <GalleryContainer id="gallery">
      <GalleryH>Photo Gallery</GalleryH>
      <GalleryWrapper>
        <GalleryCard>
          <GalleryIcon src={Icon1} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon2} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon3} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon4} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon5} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon6} />
        </GalleryCard>
      </GalleryWrapper>
      <Button
        to="/"
        onClick={toggleHome}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        See More {hover ? <ArrowForward /> : <ArrowRight />}
      </Button>
    </GalleryContainer>
  );
};

export default GallerySection;
