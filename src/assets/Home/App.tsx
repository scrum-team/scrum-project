import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import BrandSection from "./Brands/BrandSection";
import CaseSection from "./Cases/CaseSection";
import HeroSection from "./Hero/HeroSection";
import MapSection from "./Map/MapSection";
import TeamSection from "./Team/TeamSection";

export interface SectionProps {
  id: string;
}

function App() {
  const { menuOpen, toggleMenu, closeMenu } = useHeaderNavigation();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [location, scrollToSection]);

  return (
    <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      {menuOpen && (
        <NavigationMenu
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      )}
      <HeroSection id="hero" />
      <TeamSection id="team" />
      <BrandSection id="clients" />
      <CaseSection id="cases" />
      <MapSection id="map" />
      <Footer />
    </>
  );
}

export default App;
