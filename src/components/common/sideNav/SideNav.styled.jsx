import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;

  background-color: #1283a29f;
  box-shadow: inset 0 1px 1px #0340789a, 0 0 8px #1283a29f;
  font-family: "Cutive Mono", monospace;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 1px;

  & .menu-bars {
    margin-left: 1.8rem !important;
    font-size: 2rem;
    background: none;

    & svg path {
      fill: #034078;

      &:hover {
        fill: #fefcfb;
      }
    }
  }
`;

export const NavMenu = styled.nav`
  background-color: #0a1128;
  width: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 900ms;
  z-index: 2;

  &.active {
    left: 0;
    transition: 400ms;

    & .menu-times {
      visibility: visible;
    }
  }
`;

export const Ul = styled.ul`
  width: 100%;
  padding-left: 0 !important;

  & .nav-icon {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 0px;
    list-style: none;
    height: 12vh;

    & a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        fill: #6bb1c5;
        width: 60%;
        height: 100%;

        &:hover {
          fill: #fefcfb;
        }
      }
    }
  }
`;

export const NavToggle = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;

  & .menu-times {
    visibility: hidden;
    font-size: 2.5rem;
    margin-left: 1.2rem !important;

    & svg path {
      fill: #6bb1c5;
    }
  }
`;
