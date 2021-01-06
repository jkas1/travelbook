import styled from "styled-components";

export const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
`;

export const TransitionImg = styled.img`
  height: auto;
  width: 650px;
  padding: 0 0 30px;

  @media screen and (max-width: 768px) {
    width: 500px;
    padding: 40px 0 20px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    padding: 30px 0 0;
  }
`;
