import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 1150px;
  width: auto;
  position: relative;
  z-index: 1;
  margin: -1px;

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

  @media screen and (max-width: 1366px) {
    height: 800px;
  }

  @media screen and (max-width: 968px) {
    height: 670px;
  }

  @media screen and (max-width: 800px) {
    height: 500px;
  }

  @media screen and (max-width: 690px) {
    height: 400px;
  }

  @media screen and (max-width: 595px) {
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    height: 750px;
  }

  @media screen and (max-width: 320px) {
    height: 700px;
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
  font-size: 80px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 34%;
  font-weight: 900;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: left top, left bottom;
  mask-position: left top, left bottom;

  @media screen and (max-width: 1366px) {
    font-size: 60px;
    margin-top: 30%;
  }

  @media screen and (max-width: 968px) {
    margin-top: 27%;
  }

  @media screen and (max-width: 800px) {
    font-size: 50px;
    margin-top: 22%;
  }

  @media screen and (max-width: 690px) {
    font-size: 40px;
    margin-top: 20%;
  }

  @media screen and (max-width: 595px) {
    font-size: 33px;
    margin-top: 20%;
  }

  @media screen and (max-width: 480px) {
    font-size: 38px;
    margin-top: 62%;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 650px;
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-weight: 400;
  opacity: 0.7;

  @media screen and (max-width: 1366px) {
    max-width: 500px;
    font-size: 18px;
  }

  @media screen and (max-width: 595px) {
    max-width: 400px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    max-width: 300px;
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
