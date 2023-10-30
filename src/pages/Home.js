import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// COMPONENTS
import Snowfall from "../components/Snowfall";
import WarmingData from "../components/Data/WarmingData";
import SeaLevel from "../components/Data/SeaLevel";
import IceWeight from "../components/Data/IceWeight";

const data = [
  {
    id: "japan",
    color: "hsl(325, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 64,
      },
      {
        x: "helicopter",
        y: 41,
      },
      {
        x: "boat",
        y: 269,
      },
      {
        x: "train",
        y: 19,
      },
      {
        x: "subway",
        y: 241,
      },
      {
        x: "bus",
        y: 163,
      },
      {
        x: "car",
        y: 23,
      },
      {
        x: "moto",
        y: 43,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 142,
      },
      {
        x: "skateboard",
        y: 98,
      },
      {
        x: "others",
        y: 42,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(237, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 128,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 111,
      },
      {
        x: "train",
        y: 164,
      },
      {
        x: "subway",
        y: 152,
      },
      {
        x: "bus",
        y: 200,
      },
      {
        x: "car",
        y: 85,
      },
      {
        x: "moto",
        y: 61,
      },
      {
        x: "bicycle",
        y: 104,
      },
      {
        x: "horse",
        y: 51,
      },
      {
        x: "skateboard",
        y: 296,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(307, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 102,
      },
      {
        x: "helicopter",
        y: 214,
      },
      {
        x: "boat",
        y: 179,
      },
      {
        x: "train",
        y: 51,
      },
      {
        x: "subway",
        y: 70,
      },
      {
        x: "bus",
        y: 49,
      },
      {
        x: "car",
        y: 207,
      },
      {
        x: "moto",
        y: 194,
      },
      {
        x: "bicycle",
        y: 86,
      },
      {
        x: "horse",
        y: 80,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 122,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(273, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 88,
      },
      {
        x: "helicopter",
        y: 59,
      },
      {
        x: "boat",
        y: 251,
      },
      {
        x: "train",
        y: 194,
      },
      {
        x: "subway",
        y: 165,
      },
      {
        x: "bus",
        y: 101,
      },
      {
        x: "car",
        y: 291,
      },
      {
        x: "moto",
        y: 86,
      },
      {
        x: "bicycle",
        y: 243,
      },
      {
        x: "horse",
        y: 147,
      },
      {
        x: "skateboard",
        y: 188,
      },
      {
        x: "others",
        y: 53,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(146, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 285,
      },
      {
        x: "helicopter",
        y: 131,
      },
      {
        x: "boat",
        y: 65,
      },
      {
        x: "train",
        y: 128,
      },
      {
        x: "subway",
        y: 72,
      },
      {
        x: "bus",
        y: 242,
      },
      {
        x: "car",
        y: 240,
      },
      {
        x: "moto",
        y: 150,
      },
      {
        x: "bicycle",
        y: 148,
      },
      {
        x: "horse",
        y: 72,
      },
      {
        x: "skateboard",
        y: 224,
      },
      {
        x: "others",
        y: 259,
      },
    ],
  },
];

const Wrapped = styled.div`
  background-image: url(/assets/home-background.jpg); /* 이미지 파일 경로를 수정하세요 */
  background-attachment: fixed;
  background-size: cover;
  height: 500vh;
  width: 100%;
`;

const PolarImg = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-image: url(/assets/polar-1.png);
  background-size: cover;
  filter: drop-shadow(5px 3px 3px #fff);
  position: absolute;
`;

const SectionOne = styled.div`
  border: 5px solid black;
  box-sizing: border-box;
  height: 100vh;
`;

const firstVeriants = {
  initial: {
    opacity: 0,
    left: "-20%",
    top: "20%",
  },
  animate: {
    opacity: 1,
    left: "20%",
    transition: {
      duration: 1,
    },
  },
};

function Home() {
  return (
    <Wrapped>
      <Snowfall count={50}></Snowfall>
      <SectionOne>
        <PolarImg
          variants={firstVeriants}
          initial="initial"
          animate="animate"
        ></PolarImg>
        <SeaLevel></SeaLevel>
        <IceWeight data={data}></IceWeight>
      </SectionOne>
    </Wrapped>
  );
}

export default Home;
