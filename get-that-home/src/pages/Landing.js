import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, TextSubtitle2 } from "../ui";
import Container from "../contents/Container";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageHero from "../assets/image-hero.svg";
import Button from "../components/Button";
import CardTeam from "../components/CardTeam";
import Footer from "../components/Footer";
import AlvaroImage from "../assets/alvaro-torres.jpg";
import KedeinImage from "../assets/kedein-rodriguez.jpg";
import HeraldoImage from "../assets/heraldo-fortuna.jpg";

import CurrentUser from "../components/auth/CurrentUser";

const BEST_PROPERTIES = gql`
  query {
    fetchProperties {
      id
      about
      address
      area
      bathrooms
      bedrooms
      maintanance
      operationType
      pets
      photos
      propertyType
      rent
      userId
    }
  }
`;

const StyledLanding = styled.div`
  #landing__content {
  }
`;

const StyledLandingHero = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${ImageHero});
  background-position: center center;
  background-size: cover;
  padding: 60px 0;
  margin: 72px 0 0 0;

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

const StyledLandingSignup = styled.section`
  background-color: ${colors.shallowPink};
  padding: 64px 0;

  & > div {
    display: grid;
    place-items: center;
    gap: 32px;
    text-align: center;
  }
`;

const StyledLandingWorkteam = styled.section`
  padding: 64px 0;

  & > div {
    display: grid;
    place-items: center;
    gap: 26px;

    & > h3 {
      color: ${colors.darkPink};
      text-align: center;
    }

    & > ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      gap: 16px;
    }
  }
`;

export function Landing() {
  const { loading, error, data } = useQuery(BEST_PROPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const _ = require("lodash");
  var sortedProperties = _.sortBy(data.fetchProperties, "rent");

  return (
    <CurrentUser>
      {({ loaded, currentUser }) => (
        <StyledLanding>
          <div id="landing__content">
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
                  {sortedProperties.slice(0, 3).map((property) => (
                    <Link to={`/properties/${property.id}`} key={property.id}>
                      <Card
                        landlord={loaded && currentUser.role === "landlord"}
                        operationType={property.operationType}
                        image={property.photos.split("|")[0]}
                        rent={property.rent}
                        propertyType={property.propertyType}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        area={property.area}
                        pets={property.pets}
                        address={property.address}
                      />
                    </Link>
                  ))}
                </ul>
              </Container>
            </StyledLandingProperties>
            <StyledLandingSignup>
              <Container>
                <h4>
                  Getting someone to rent your apartment has never been this
                  easy
                </h4>
                <Link to="/register">
                  <Button size="large">Create an account now</Button>
                </Link>
              </Container>
            </StyledLandingSignup>
            <StyledLandingWorkteam>
              <Container>
                <h3>Meet the team</h3>
                <ul>
                  <CardTeam
                    image={AlvaroImage}
                    name="??lvaro Torres"
                    github="https://github.com/AlvaroJTorres"
                    linkedin="https://www.linkedin.com/in/alvaro-julian-torres-malla/"
                  />
                  <CardTeam
                    image={KedeinImage}
                    name="Kedein Rodriguez"
                    github="https://github.com/kedeinroga"
                    linkedin="https://www.linkedin.com/in/kedein-rodriguez-gatica/"
                  />
                  <CardTeam
                    image={HeraldoImage}
                    name="Heraldo Fortuna"
                    github="https://github.com/heraldofortuna"
                    linkedin="https://www.linkedin.com/in/heraldo-fortuna/"
                  />
                </ul>
              </Container>
            </StyledLandingWorkteam>
            <Footer landing />
          </div>
        </StyledLanding>
      )}
    </CurrentUser>
  );
}
