import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SomeTitle from "../components/SomeTitle";
import Container from "../contents/Container";
import Card from "../components/Card";

import CurrentUser from "../components/auth/CurrentUser";

const LIST_POPERTIES = gql`
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

const StyledMyProperties = styled.div`

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 0;
  }

  .properties__state {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin: 72px 0 0 0;
  }

  .list-myProperties {
    display: grid;
    grid-template-columns: repeat(3, 1fr);a
    align-items: center;
    justify-items: center;
    gap: 16px;
  }
`;

export default function MyProperties() {
  const { loading, error, data } = useQuery(LIST_POPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const numProperties = 0;

  return (
    <CurrentUser>
      {({ loaded, currentUser }) => (
        <StyledMyProperties>
          <Header />
          <Container>
            <div className="properties__state">
              <SomeTitle>Active</SomeTitle>
              <SomeTitle>Closed</SomeTitle>
            </div>
            <h6>20 Properties found</h6>
            <div className="list-myProperties">
              {data.fetchProperties.map((property) => (
                <Link to={`/properties/${property.id}`}>
                  <Card
                    key={property.id}
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
            </div>
          </Container>
          <Footer />
        </StyledMyProperties>
      )}
    </CurrentUser>
  );
}
