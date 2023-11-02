import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

function SectionOne() {
  const blockVariants = {
    initial: {
      rotate: 0,
    }, // 처음 컴포넌트 나타날 때 상태
    target: {
      rotate: 360,
    }, // 애니메이션 끝날 때 상태
  };

  const rotate = useMotionValue(0); // 변수이름 달라도 됨, 애니메이션 상태 구독
  const scale = useTransform(rotate, [0, 360], [0, 1]); // 변수이름 달라도 된다.

  return (
    <SectionOneContainer>
      <SectionOneItem
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "300px",
          width: "300px",
          borderRadius: "80px",
          rotate, // rotate: rotate 와 동일
          scale, // scale : scale 과 동일
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
      ></SectionOneItem>
    </SectionOneContainer>
  );
}

const SectionOneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SectionOneItem = styled(motion.div)``;

export default SectionOne;
