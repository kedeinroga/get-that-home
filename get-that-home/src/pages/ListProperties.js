import { gql, useQuery } from "@apollo/client";

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
          <img
            src={property.photos.split("|")[0]}
            alt="Property"
            width="300"
            height="200"
          />
        </div>
      ))}
    </div>
  );
}

export default ListProperties;
