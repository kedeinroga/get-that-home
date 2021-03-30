import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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

function ListProperties() {
  const { loading, error, data } = useQuery(LIST_POPERTIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
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
    </div>
  );
}

export default ListProperties;
