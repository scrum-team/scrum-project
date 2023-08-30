import { useState } from "react";
import styled from "styled-components";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <StyledBurgerMenu onClick={toggleMenu}>
        <Burger $menuOpen={menuOpen} />
      </StyledBurgerMenu>
    </>
  );
}

const StyledBurgerMenu = styled.div`
  cursor: pointer;
  position: relative;
  height: 1.3rem;
  z-index: 104;
  mix-blend-mode: difference;
`;

const Burger = styled.div<{ $menuOpen: boolean }>`
  width: 2.9rem;
  height: 0.2rem;
  position: relative;
  top: 1rem;
  background-color: ${({ $menuOpen }) =>
    $menuOpen === true ? "transparent" : "#fff"};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: inherit;
    background-color: #fff;
    transition: width 0.4s ease;
    transition: rotate 0.5s 0.2s ease;
    width: inherit;
    height: inherit;
    transition: 0.3s ease;
  }

  &::after {
    rotate: ${({ $menuOpen }) => ($menuOpen ? "45deg" : "0")};
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "-0.9rem")};
  }

  &::before {
    width: ${({ $menuOpen }) => ($menuOpen ? "2.7rem " : "1.6rem")};
    rotate: ${({ $menuOpen }) => ($menuOpen ? "-45deg" : "0")};
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "0.9rem")};
    right: 0;
  }
`;