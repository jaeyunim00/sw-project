import styled from "styled-components";

function Slider() {
  <Wrapped>
    <Container>
      <Inner style={{ backgroundColor: "red" }}></Inner>
      <Inner style={{ backgroundColor: "blue" }}></Inner>
      <Inner style={{ backgroundColor: "green" }}></Inner>
    </Container>
  </Wrapped>;
}

const Wrapped = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  width: 300vw;
`;

const Inner = styled.div`
  width: 100vw;
  float: left;
  height: 500px;
`;

export default Slider;
