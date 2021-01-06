import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#94beca" : "transparent")};
  height: 80px;
  display: flex;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  background: linear-gradient(to right, #fff 0%, #d8979c 50%, #cf8093 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 45px;
  margin-left: 10px;
  margin-top: 10px;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  font-family: "Teko", sans-serif;
  letter-spacing: 3px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;

  &.active {
    border-bottom: 3px solid #cf8093;
    color: #cf8093;
  }

  &:hover {
    color: #cf8093;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: "transparent";
  border: 2px solid;
  border-color: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
