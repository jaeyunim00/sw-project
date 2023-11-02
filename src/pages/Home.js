import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import scrollLottie from "../assets/lottie/jPCLTYIE5U.json";

// COMPONENTS
import Snowfall from "../components/Snowfall";

//SECTIONS
import SectionOne from "../section/SectionOne";
import SectionTwo from "../section/SectionTwo";

function Home() {
  return (
    <Wrapped>
      <Snowfall count={50}></Snowfall>
      <ScrollLottie animationData={scrollLottie} />
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  background-image: url(/assets/home-background.jpg); /* 이미지 파일 경로를 수정하세요 */
  background-attachment: fixed;
  background-size: cover;
  height: 300vh;
  width: 100%;
`;

const ScrollLottie = styled(Lottie)`
  width: 100px;
  position: fixed;
  font-color: blue;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
`;

export default Home;
