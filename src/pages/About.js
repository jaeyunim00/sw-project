import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import WarmingData from "../components/Data/WarmingData";

const SplitContainer = styled.div`
  height: 100vh;
  background-color: yellow;
  padding: 500px;
`;

const StyledAboutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  &.animation {
    animation-name: opacity;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;

const AboutTitle = styled.h2`
  font-size: 1.5rem;
  margin-right: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
  margin-left: 15px;
`;

const StyledAboutImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.desktop} {
    width: 700px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 600px;
  }
  @media ${(props) => props.theme.tablet} {
    width: 550px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 300px;
  }
  object-fit: contain;
`;

function About() {
  const element = useRef(null);
  const [InviewPort, setInviewPort] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInviewPort(true);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (element.current) {
      observer.observe(element.current);
    }
  }, []);

  return (
    <div>
      <SplitContainer>
        <WarmingData></WarmingData>
      </SplitContainer>
      <StyledAboutContainer
        ref={element}
        className={InviewPort ? "animation" : ""}
      >
        <StyledAboutImage src={"/assets/polar-1.png"}></StyledAboutImage>
        <div>
          <AboutTitle>
            가까운 위치의 카페, 은행, 편의점 등을 알 수 있어요
          </AboutTitle>
          <AboutTitle>NearBy가 알려드립니다</AboutTitle>
          <Link to="/">홈으로</Link>
        </div>
      </StyledAboutContainer>
    </div>
  );
}

export default About;
