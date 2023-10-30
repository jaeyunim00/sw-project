import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiPolarBear } from "react-icons/gi";

const NavContainer = styled.div`
  // background-color: black;
  position: absolute;
  width: 100%;
`;

const NavSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ;
`;

function Navigation() {
  return (
    <NavContainer>
      <NavSubContainer>
        <LogoContainer>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              fontSize: 20,
            }}
          >
            <GiPolarBear
              size="80"
              color="#FFF"
              style={{ marginRight: "15px" }}
            ></GiPolarBear>
            GNI
          </Link>
        </LogoContainer>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "#FFF", fontSize: 20 }}
        >
          About Us
        </Link>
      </NavSubContainer>
    </NavContainer>
  );
}

export default Navigation;
