import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landlord from "../assets/landlord.svg";
import seeker from "../assets/seeker.svg";
import { colors } from "../ui";
import CardRegister from "../components/CardRegister";

const StyledRegister = styled.div`
  margin: 72px 0 0 0;
`;

const StyleContentCards = styled.div`
  display: flex;
  gap: 54px;
`;

const StyledCardRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 189px;
  background: linear-gradient(
    0deg,
    ${colors.white} 50%,
    ${colors.shallowPink} 50%
  );
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
      <StyledCardRegister>
        <h5>Selecciona el perfil con el que te identificas</h5>
        <h2>Que estas buscando?</h2>
        <StyleContentCards>
          <CardRegister>
            <img src={landlord} alt="Landlord" width="240" height="180" />
            <h6>Landlord</h6>
            <p>You want to rent or sell a home</p>
          </CardRegister>
          <CardRegister>
            <img src={seeker} alt="Landlord" width="240" height="180" />
            <h6>Home seeker</h6>
            <p>You want to find a home</p>
          </CardRegister>
        </StyleContentCards>
      </StyledCardRegister>
      <Footer landing />
    </StyledRegister>
  );
}
