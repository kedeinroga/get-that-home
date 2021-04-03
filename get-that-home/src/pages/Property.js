import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import styled from "@emotion/styled";
import { colors, TextSubtitle1, TextBody1 } from "../ui";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import Icon from "../components/Icon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../contents/Container";
import PropertyContact from "../components/PropertyContact";

const StyledProperty = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex: 5;
    gap: 36px;
    padding: 32px 0;
    margin: 72px auto 0 auto;

    & > aside, button {
      flex: 1;
    }

    & > main {
      flex: 4;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > img {
        width: 50%;
        height: 100%;
        padding: 0 0 32px 0;
      }

      .property__data {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        & > div {
          width: 100%;

          & > div {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            & > p, h6 {
              color: ${colors.gray};
            }

            & > span {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 12px;
            }
          }
        }

        & > ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid ${colors.pink};
          border-bottom: 1px solid ${colors.pink};
          padding: 16px 0;

          & > li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;

            & > h5 {
              color: ${colors.gray};
            }
          }
        }

        .property__data--element {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;

          & > h6 {
            color: ${colors.darkPink};
          }

          & > iframe {
            width: 100%;
            border: 0;
          }
        }
      }
    }
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
      <Container>
        <main key={data.fetchProperty.id}>
          <img
            src={data.fetchProperty.photos.split("|")[0]}
            alt="Property"
            width="300"
            height="200"
          />
          <div className="property__data">
            <div>
              <div>
                <h4>{data.fetchProperty.address}</h4>
                <span>
                  <Icon size="40px">
                    <RiMoneyDollarCircleLine />
                  </Icon>
                  <h4>{data.fetchProperty.rent}</h4>
                </span>
              </div>
              <div>
                <TextSubtitle1>Miraflores, Lima</TextSubtitle1>
                <h6>+ 100</h6>
              </div>
            </div>
            <ul>
              <li>
                <Icon color={colors.gray} size="26px">
                  <BiBed />
                </Icon>
                <h5>{data.fetchProperty.bedrooms} bedrooms</h5>
              </li>
              <li>
                <Icon color={colors.gray} size="26px">
                  <BiBath />
                </Icon>
                <h5>{data.fetchProperty.bathrooms} bathrooms</h5>
              </li>
              <li>
                <Icon color={colors.gray} size="26px">
                  <BiArea />
                </Icon>
                <h5>{data.fetchProperty.area} m2</h5>
              </li>
              {data.fetchProperty.pets && (
                <li>
                  <Icon color={colors.gray} size="26px">
                    <MdPets />
                  </Icon>
                  <h5>Pets allowed</h5>
                </li>
              )}
            </ul>
            <section className="property__data--element">
              <h6>About this property</h6>
              <TextBody1>{data.fetchProperty.about}</TextBody1>
            </section>
            <section className="property__data--element">
              <h6>Location</h6>
              <TextBody1>{data.fetchProperty.address}</TextBody1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3918117858298!2d-96.16968368498391!3d19.178081787029384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c343f61527e927%3A0x83d8e79159820310!2sCalle%20Siempre%20Viva%2C%20Dos%20Caminos%2C%2091726%20Veracruz%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1617171991648!5m2!1ses-419!2spe"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                title="Address of property in Google Maps"
              ></iframe>
            </section>
          </div>
        </main>
        <PropertyContact />
      </Container>
      <Footer />
    </StyledProperty>
  );
};

export default Property;
