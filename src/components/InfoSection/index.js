import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ArrowForward,
  ArrowRight,
} from "./InfoElements";

const InfoSection = ({
  id,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt="section image" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
