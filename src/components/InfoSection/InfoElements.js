import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const InfoContainer = styled.div`
  color: #fff;
  background: #000;
  margin: -1px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 420px;
  }

  @media screen and (max-width: 375px) {
    height: 470px;
  }

  @media screen and (max-width: 320px) {
    height: 420px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: #cf8093;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 968px) {
    font-size: 12px;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 500;
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 968px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;

  @media screen and (max-width: 968px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 500px;
  height: auto;
  padding-right: 0;

  @media screen and (max-width: 1080px) {
    width: 500px;
    height: auto;
  }

  @media screen and (max-width: 968px) {
    width: 450px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: auto;
  }

  @media screen and (max-width: 595px) {
    width: 420px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: auto;
  }

  @media screen and (max-width: 375px) {
    width: 295px;
    height: auto;
  }

  @media screen and (max-width: 320px) {
    width: 220px;
    height: auto;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
