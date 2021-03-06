import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../ui";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landlord from "../assets/landlord.svg";
import seeker from "../assets/seeker.svg";
import CardRegister from "../components/CardRegister";

const StyledRegister = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(
    0deg,
    ${colors.white} 50%,
    ${colors.shallowPink} 50%
  );
  margin: 72px 0 0 0;

  & > div {
    padding: 64px 0 128px 0;
  }
`;

const StyleContentCards = styled.div`
  display: flex;
  gap: 54px;

  a {
    cursor: pointer;
  }
`;

const StyledCardRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h5 {
    font-family: var(--font-montserrat);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
    color: ${colors.teal};
  }

  & > h2 {
    font-family: var(--font-montserrat);
    font-size: 64px;
    font-style: normal;
    font-weight: 300;
    line-height: 88px;
    letter-spacing: -0.5px;
    text-align: left;
    color: ${colors.teal};
    margin-bottom: 57px;
  }
`;

export default function Register() {
  return (
    <StyledRegister>
      <Header />
      <div id="register__content">
        <StyledCardRegister id="card--register">
          <h5>Selecciona el perfil con el que te identificas</h5>
          <h2>¿Qué estas buscando?</h2>
          <StyleContentCards>
            <Link to="/signup/landlord">
              <CardRegister>
                <img
                  src={landlord}
                  alt="Landlord register"
                  width="240"
                  height="180"
                />
                <h6>Landlord</h6>
                <p>You want to rent or sell a home</p>
              </CardRegister>
            </Link>
            <Link to="/signup/seeker">
              <CardRegister>
                <img
                  src={seeker}
                  alt="Seeker register"
                  width="240"
                  height="180"
                />
                <h6>Home seeker</h6>
                <p>You want to find a home</p>
              </CardRegister>
            </Link>
          </StyleContentCards>
        </StyledCardRegister>
      </div>
      <Footer />
    </StyledRegister>
  );
}
