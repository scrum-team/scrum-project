import { IconArrowRight } from "@tabler/icons-react";
import styled, { css } from "styled-components";
import { SectionProps } from "../App";
import video from "/videos/hero-video-bg.mp4";

function HeroSection({ id }: SectionProps) {
  return (
    <HeroLayout id={id}>
      <Video>
        <video id="background-video" autoPlay loop muted poster={video}>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Transforming Ideas Into Digital Reality</h1>
      </Video>
      <TextContainer className="textContainer">
        <p>
          Crafting immersive digital experiences through expert web development,
          app creation, and tailored software solutions.
        </p>
        <Work>
          <Link href="#team">
            <h5>Work with us</h5>
            <IconArrowRight size={24} />
          </Link>
        </Work>
      </TextContainer>
    </HeroLayout>
  );
}

export default HeroSection;

const sharedStyles = css`
  color: var(--color-light);
`;

const HeroLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  position: relative;
  overflow: hidden;
`;

const Video = styled.div`
  background-color: var(--color-dark);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
  }

  h1 {
    position: absolute;
    inset: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: var(--color-dark);
    color: var(--color-white);
    line-height: 0.95;
    font-weight: 900;
    opacity: 0.7;
    padding-left: 5.8rem;
    cursor: default;

    &:hover {
      transition: opacity 4s 14s ease-in-out;
      opacity: 1;
      mix-blend-mode: multiply;

      h1 {
        opacity: 1;
      }
    }

    @media (min-width: 1464px) {
      padding: 0% 14% 10%;
      line-height: 1.2;
    }

    @media (max-width: 1100px) {
      padding: 0% 3rem 10%;
      line-height: 1;
    }

    @media (max-width: 790px) {
      font-size: 12.5vw;
    }

    @media (max-width: 650px) {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 13.25vw;
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0rem;
  bottom: 3rem;
  z-index: 4;
  ${sharedStyles}
  max-width: 25rem;
  right: 5rem;

  @media (max-width: 1100px) {
    right: 3rem;
  }

  @media (max-width: 850px) {
    left: 3rem;
  }

  @media (max-width: 650px) {
    left: 1rem;
  }
`;

const Work = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  ${sharedStyles}
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    ${sharedStyles}
  }
`;
