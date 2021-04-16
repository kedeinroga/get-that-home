import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SomeTitle from "../components/SomeTitle";
import Container from "../contents/Container";
import Card from "../components/Card";
import Button from "../components/Button";

import CurrentUser from "../components/auth/CurrentUser";

const LIST_POPERTIES = gql`
  query {
    userProperties {
      id
      address
      rent
      area
      photos
      userId
      maintanance
      propertyType
      operationType
      pets
      bathrooms
      bedrooms
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

  return (
    <CurrentUser>
      {({ loaded, currentUser }) => (
        <StyledMyProperties>
          <Header />
          <Container>
            <div className="properties__state">
              <SomeTitle>Active</SomeTitle>
              <Link to={"/addproperty"}>
                <Button type="secundary">New Property</Button>
              </Link>
            </div>
            <h6>{data.userProperties.length} Properties found</h6>
            <ul className="list-myProperties">
              {data.userProperties.map((property) => (
                <>
                  {loaded && currentUser.id === property.userId ? (
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
                  ) : (
                    ""
                  )}
                </>
              ))}
            </ul>
          </Container>
          <Footer />
        </StyledMyProperties>
      )}
    </CurrentUser>
  );
}
