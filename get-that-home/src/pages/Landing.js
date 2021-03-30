import styled from "@emotion/styled";
import Container from "../contents/Container";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageHero from "../assets/image-hero.svg";
import { colors, TextSubtitle2 } from "../ui";

const StyledLanding = styled.div`
  margin: 72px 0 0 0;
`;

const StyledLandingHero = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${ImageHero});
  background-position: center center;
  background-size: cover;
  padding: 60px 0;

  & > div {
    display: grid;
    place-items: center;
    gap: 8px;

    & > h5 {
      color: ${colors.gray};
    }
  }
`;

const StyledLandingProperties = styled.section`
  padding: 64px 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    
    & > div {
      display: grid;
      place-items: center;
      gap: 16px;

      & > h4 {
        color: ${colors.darkPink};
      }
    }

    & > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
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
      <StyledLandingProperties>
        <Container>
          <div>
            <TextSubtitle2>Find an Apartment you Love</TextSubtitle2>
            <h4>Homes for rent at the best prices</h4>
          </div>
          <ul>
            <Card />
            <Card type="sale" />
            <Card />
          </ul>
        </Container>
      </StyledLandingProperties>
    </StyledLanding>
  );
}
