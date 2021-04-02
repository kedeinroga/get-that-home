import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledProperty = styled.div`
  background-color: yellow;

  & > main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 32px 0;
    margin: 72px 0 0 0;
  }
`;

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
    <StyledProperty>
      <Header />
      <main>
        <div key={data.fetchProperty.id}>
          <p>{data.fetchProperty.address}</p>
          <img
            src={data.fetchProperty.photos.split("|")[0]}
            alt="Property"
            width="300"
            height="200"
          />
          <p>{data.fetchProperty.about}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3918117858298!2d-96.16968368498391!3d19.178081787029384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c343f61527e927%3A0x83d8e79159820310!2sCalle%20Siempre%20Viva%2C%20Dos%20Caminos%2C%2091726%20Veracruz%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1617171991648!5m2!1ses-419!2spe"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h4>Holaaaa</h4>
        </div>
      </main>
      <Footer />
    </StyledProperty>
  );
};

export default Property;
