import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-dark);
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  z-index: 800;
  overflow-y: auto;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledNavigationMenu = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  font-size: 4rem;
  font-weight: 500;
  margin: 1rem 0;
  text-decoration: none;
  color: var(--color-darker-light);
  transition: font-size 0.3s, color 0.3s;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-height: 660px) {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }

  @media (max-height: 540px) {
    font-size: 2rem;
    margin: 0.3rem 0;
  }

  @media (max-height: 430px) {
    font-size: 1.5rem;
    margin: 0.2rem 0;
  }

  @media (max-height: 390px) {
    font-size: 1rem;
    margin: 0.1rem 0;
  }

  &:hover {
    font-size: 4.2rem;
    color: var(--color-white);

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-height: 660px) {
      font-size: 2.7rem;
    }

    @media (max-height: 540px) {
      font-size: 2.2rem;
    }

    @media (max-height: 430px) {
      font-size: 1.7rem;
    }

    @media (max-height: 390px) {
      font-size: 1.2rem;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-darker-light);
  margin: 0.5rem 0;

  @media (max-height: 660px) {
    margin: 0.3rem 0;
  }

  @media (max-height: 540px) {
    margin: 0.2rem 0;
  }

  @media (max-height: 430px) {
    margin: 0.1rem 0;
  }

  @media (max-height: 390px) {
    margin: 0.05rem 0;
  }
`;

const Number = styled.span`
  font-size: 1rem;
  margin-right: 8rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

interface NavigationMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

function NavigationMenu({
  isOpen,
  toggleMenu,
  closeMenu,
}: NavigationMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    closeMenu();
    toggleMenu();
  };

  return (
    <NavigationContainer>
      <div className="grid-container">
        <div className="grid">
          <Container>
            <StyledNavigationMenu>
              <NavLink to="/#team" onClick={handleLinkClick}>
                <Number>01</Number> Meet the team
              </NavLink>
              <Divider />
              <NavLink to="/#clients" onClick={handleLinkClick}>
                <Number>02</Number> Clients
              </NavLink>
              <Divider />
              <NavLink to="/#cases" onClick={handleLinkClick}>
                <Number>03</Number> Client cases
              </NavLink>
              <Divider />
              <NavLink to="/#map" onClick={handleLinkClick}>
                <Number>04</Number> Find us
              </NavLink>
            </StyledNavigationMenu>
          </Container>
        </div>
      </div>
    </NavigationContainer>
  );
}

export default NavigationMenu;
