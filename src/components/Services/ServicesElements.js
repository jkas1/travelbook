import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ServicesContainer = styled.div`
  height: 655px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  margin: -1px;
  padding-top: 50px;

  @media screen and (max-width: 800px) {
    height: 650px;
    padding-top: 0px;
    margin-bottom: -100px;
  }

  @media screen and (max-width: 690px) {
    height: 1100px;
  }

  @media screen and (max-width: 595px) {
    height: 1050px;
    margin-bottom: -50px;
  }

  @media screen and (max-width: 480px) {
    height: 1180px;
    margin-bottom: -170px;
  }

  @media screen and (max-width: 375px) {
    height: 1050px;
    margin-bottom: -100px;
  }

  @media screen and (max-width: 320px) {
    height: 1200px;
    margin-bottom: -150px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: auto;
  width: 200px;

  @media screen and (max-width: 800px) {
    height: auto;
    width: 150px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;

  @media screen and (max-width: 690px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ServicesP = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 800px) {
    font-size: 12px;
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
