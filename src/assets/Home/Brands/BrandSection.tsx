import styled from 'styled-components';

export default function BrandSection() {
  return (
    <Background>
      <div className="grid-container">
        <div className="grid">
          <Header>Clients we've worked with</Header>
        </div>
      </div>
      <BrandContainer>
        <BrandLogo src="./client-brand-logos/aesop-logo.svg" alt="aesop logo" />
        <BrandLogo src="./client-brand-logos/ikea-logo.svg" alt="ikea logo" />
        <BrandLogo src="./client-brand-logos/hay-logo.svg" alt="hay logo" />
        <BrandLogo src="./client-brand-logos/teurn-logo.svg" alt="teurn logo" />
        <BrandLogo
          src="./client-brand-logos/new-works-logo.svg"
          alt="new works logo"
        />
        <BrandLogo src="./client-brand-logos/bosch-logo.svg" alt="bosch logo" />
        <BrandLogo src="./client-brand-logos/prada-logo.svg" alt="prada logo" />
        <BrandLogo src="./client-brand-logos/volvo-logo.svg" alt="volvo logo" />
        <BrandLogo src="./client-brand-logos/vitra-logo.svg" alt="vitra logo" />
        <BrandLogo src="./client-brand-logos/sonos-logo.svg" alt="sonos logo" />
        <BrandLogo src="./client-brand-logos/skf-logo.svg" alt="skf logo" />
        <BrandLogo
          src="./client-brand-logos/flattered-logo.svg"
          alt="flattered logo"
        />
        <BrandLogo
          src="./client-brand-logos/polestar-logo.svg"
          alt="polestar logo"
        />

        <BrandLogo
          src="./client-brand-logos/electrolux-logo.svg"
          alt="electrolux logo"
        />
      </BrandContainer>
    </Background>
  );
}

const Background = styled.div`
  background: var(--color-dark);
  padding: 9rem 0;
`;

const BrandContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  background: var(--color-dark);

  @media (max-width: 1440px) {
    max-width: 1440px;
  }

  @media (max-width: 912px) {
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 414px) {
    gap: 1.6rem;
  }

  @media (max-width: 375px) {
    gap: 1.4rem 0.8rem;
  }

  @media (max-width: 360px) {
    gap: 1.4rem;
  }
`;

const Header = styled.h4`
  color: var(--color-light);
  padding-bottom: 4rem;

  @media (max-width: 540px) {
    padding-bottom: 2rem;
  }
`;

const BrandLogo = styled.img`
  width: auto;
  height: 1.6rem;

  @media (max-width: 1024px) {
    height: 1.2rem;
  }

  @media (max-width: 912px) {
    height: 1rem;
  }

  @media (max-width: 768px) {
    height: 1.3rem;
  }

  @media (max-width: 540px) {
    height: 1.2rem;
  }

  @media (max-width: 414px) {
    height: 0.7rem;
  }

  @media (max-width: 375px) {
    height: 1rem;
  }

  @media (max-width: 360px) {
    height: 0.8rem;
  }

  @media (max-width: 280px) {
    height: 0.6rem;
  }
`;
