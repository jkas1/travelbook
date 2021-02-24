import React, { useState } from "react";
import Icon1 from "../../images/img3.jpg";
import Icon2 from "../../images/img4.jpg";
import Icon3 from "../../images/img5.jpg";
import RoomIcon from "@material-ui/icons/RoomSharp";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryIcon,
  GalleryH,
  GalleryP,
  BtnWrap,
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
      <GalleryH>Trending Destinations</GalleryH>
      <GalleryWrapper>
        <GalleryCard>
          <GalleryIcon src={Icon1} alt="photo gallery" />
          <GalleryP>
            <RoomIcon style={{ fontSize: "16px" }} /> Maldives
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon2} alt="photo gallery" />
          <GalleryP>
            <RoomIcon style={{ fontSize: "16px" }} /> Sweden
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon3} alt="photo gallery" />
          <GalleryP>
            <RoomIcon style={{ fontSize: "16px" }} /> Japan
          </GalleryP>
        </GalleryCard>
      </GalleryWrapper>
      <BtnWrap>
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
      </BtnWrap>
    </GalleryContainer>
  );
};

export default GallerySection;
