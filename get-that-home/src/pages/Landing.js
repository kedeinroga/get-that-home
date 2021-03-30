import styled from "@emotion/styled";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageHero from "../assets/image-hero.svg";

const StyledLanding = styled.div``;

const StyledLandingHero = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${ImageHero});
  background-position: center center;
  background-size: cover;

  & > div {
    display: grid;
    place-items: center;
    gap: 8px;
  }
`;

export function Landing() {
  return (
    <StyledLanding>
      <Header />
      <StyledLandingHero>
        <div>
          <h2>Meet your new Home</h2>
          <h5>The easiest way to find where you belong</h5>
        </div>
      </StyledLandingHero>
      <Card />
      <Card landlord type="sale" />
    </StyledLanding>
  );
}
