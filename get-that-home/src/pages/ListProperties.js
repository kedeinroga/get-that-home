import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "../contents/Container";
import { colors } from "../ui";

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

const StyledListProperties = styled.div`
  background-color: blue;

  & > main {
    background-color: yellow;
    padding: 32px 0;
    margin: 72px 0 0 0;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 16px;

      & > h6 {
        color: ${colors.gray};
      }

      .list-properties {
        background-color: red;
        display: grid;
        grid-template-columns: repeat(3, 1fr);a
        align-items: center;
        justify-items: center;
        gap: 16px;
      }
    }
  }
`;

function ListProperties() {
  const { loading, error, data } = useQuery(LIST_POPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledListProperties>
      <Header />
      <main>
        <Container>
          <h6>{data.fetchProperties.length} Properties found</h6>
          <div className="list-properties">
            {data.fetchProperties.map((property) => (
              <Card
                key={property.id}
                landlord
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
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </StyledListProperties>
  );
}

export default ListProperties;
