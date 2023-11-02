import styled from "styled-components";

import WarmingData from "../components/Data/WarmingData";
import IceWeight from "../components/Data/IceWeight";
import greenland from "../components/Data/GreenLand";
import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <>
      <SectionTwo2>
        <SectionTwoContainer>
          <PolarImg
            variants={polarVeriants}
            initial="initial"
            animate="animate"
          ></PolarImg>
          <IceContainer
            variants={iceVeriants}
            initial="initial"
            animate="animate"
          >
            <IceWeight data={greenland}></IceWeight>
            <IceWeightDesc>
              약
              <span>
                {" "}
                {greenland[0].data[greenland[0].data.length - 1].y}gt{" "}
              </span>
              감소
            </IceWeightDesc>
          </IceContainer>
        </SectionTwoContainer>
      </SectionTwo2>
    </>
  );
}

const SectionTwo2 = styled.div`
  border: 5px solid black;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
`;

const SectionTwoContainer = styled.div`
  width: 1500px;
  height: 700px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background-color: gray;
`;
const PolarImg = styled(motion.div)`
  width: 650px;
  height: 650px;
  background-image: url(/assets/polar-1.png);
  background-size: cover;
  filter: drop-shadow(5px 3px 3px #fff);
  position: absolute;
  transform: translate(-50%, -50%);
`;

const polarVeriants = {
  initial: {
    opacity: 0,
    left: "-20%",
    top: "50%",
  },
  animate: {
    opacity: 1,
    left: "20%",
    transition: {
      duration: 1,
    },
  },
};

const iceVeriants = {
  initial: {
    opacity: 0,
    left: "120%",
    top: "50%",
  },
  animate: {
    opacity: 1,
    left: "75%",
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const IceContainer = styled(motion.div)`
  width: 800px;
  height: 550px;
  position: relative;
  transform: translate(-50%, -50%);
`;

const IceWeightDesc = styled.div`
  font-size: 20px;
  color: white;
`;

export default SectionTwo;
