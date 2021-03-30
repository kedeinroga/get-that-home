import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const Property = () => {
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
    <div key={data.fetchProperty.id}>
      <p>{data.fetchProperty.address}</p>
      <img
        src={data.fetchProperty.photos.split("|")[0]}
        alt="Property"
        width="300"
        height="200"
      />
      <p>{data.fetchProperty.about}</p>
    </div>
  );
};

export default Property;
