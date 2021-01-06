import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-top: 10px;
  min-height: 692px;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(148, 190, 202, 1) 0%,
    rgba(189, 222, 232, 1) 100%
  );
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  background: linear-gradient(to right, #fff 0%, #d8979c 50%, #cf8093 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 45px;
  margin-left: 124px;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  font-family: "Teko", sans-serif;
  letter-spacing: 3px;
`;

export const FormContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #000;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: auto auto 100px auto;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: #94beca;
  padding: 16px 0;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export const Text = styled.span`
  margin-top: 24px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
`;
