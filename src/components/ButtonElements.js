import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: transparent;
  border: 2px solid;
  border-color: #fff;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
  color: #fff;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
