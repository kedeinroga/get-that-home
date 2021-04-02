import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
`;

function ListProperties() {
  const { loading, error, data } = useQuery(LIST_POPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledListProperties>
      <Header />
      {data.fetchProperties.map((property) => (
        <div key={property.id}>
          <p>{property.address}</p>
          <Link to={`/properties/${property.id}`}>
            <img
              src={property.photos.split("|")[0]}
              alt="Property"
              width="300"
              height="200"
            />
          </Link>
        </div>
      ))}
      <Footer />
    </StyledListProperties>
  );
}

export default ListProperties;
