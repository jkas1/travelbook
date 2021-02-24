import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const GalleryContainer = styled.div`
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
  margin: -1px;

  @media screen and (max-width: 968px) {
    height: 1250px;
  }

  @media screen and (max-width: 768px) {
    height: 1250px;
  }

  @media screen and (max-width: 595px) {
    height: 1250px;
    margin-bottom: -50px;
  }

  @media screen and (max-width: 480px) {
    height: 1050px;
    margin-bottom: -70px;
    margin-right: -1px;
  }

  @media screen and (max-width: 320px) {
    height: 1100px;
  }
`;

export const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 64px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const GalleryCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const GalleryIcon = styled.img`
  width: 330px;
  height: auto;

  @media screen and (max-width: 1080px) {
    width: 270px;
    height: auto;
  }

  @media screen and (max-width: 968px) {
    width: 350px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: auto;
  }

  @media screen and (max-width: 320px) {
    width: 240px;
    height: auto;
  }
`;

export const GalleryH = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 690px) {
    font-size: 2rem;
  }
`;

export const GalleryP = styled.p`
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin-top: 10px;
  font-family: "Raleway", sans-serif;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
