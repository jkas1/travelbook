import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%),
      linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0.2) 80%,
        rgba(0, 0, 0, 0.7) 90%,
        rgba(0, 0, 0, 0.9) 95%,
        rgba(0, 0, 0, 1) 100%
      );
  }
`;

export const HeroBg = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
  max-width: 1200px;
  position: absolute;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 32%;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
