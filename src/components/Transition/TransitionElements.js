import styled from "styled-components";

export const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
  height: 150px;
  margin: -1px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const TransitionImg = styled.img`
  height: auto;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: auto;
    padding: 40px 0 20px;
  }

  @media screen and (max-width: 599px) {
    width: 500px;
    height: auto;
  }

  @media screen and (max-width: 568px) {
    width: 415px;
    height: auto;
    padding: 30px 0 0;
    margin-top: -50px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
    height: auto;
    padding: 30px 0 0;
    margin-top: -50px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: auto;
    padding: 30px 0 0;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
    height: auto;
    padding: 30px 0 0;
  }
`;
