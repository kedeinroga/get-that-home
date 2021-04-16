import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const StyledUpdateProperty = styled.div`
  background-color: green;
  margin: 72px 0 0 0;
`;

export default function UpdateProperty() {
  const { loading, error, data } = useQuery(LIST_POPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledUpdateProperty>
      <Header />
      <h1>UpdateProperty</h1>
      <Footer />
    </StyledUpdateProperty>
  );
}
