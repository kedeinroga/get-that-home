import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

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
      <div className=""> 

      </div>
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
      <Footer />
    </StyledListProperties>
  );
}

export default ListProperties;
