import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledUpdateProperty = styled.div`
  background-color: green;
  margin: 72px 0 0 0;
`;

export default function UpdateProperty() {
  let { id } = useParams();
  const SHOW_PROPERTY = gql`
  query {
    fetchProperty(id: ${id}) {
      about
      address
      area
      bathrooms
      bedrooms
      id
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
  const { loading, error, data } = useQuery(SHOW_PROPERTY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledUpdateProperty>
      <Header />
      <div key={data.fetchProperty.id}>
        <h1>{data.fetchProperty.address}</h1>
      </div>
      <Footer />
    </StyledUpdateProperty>
  );
}
