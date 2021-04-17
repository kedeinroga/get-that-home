import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import UrlCloud from "../helpers/UrlCloud";

import styled from "@emotion/styled";
import { TextOverline } from "../ui";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { useHistory } from "react-router";

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $about: String
    $address: String!
    $area: Float!
    $bathrooms: Int
    $bedrooms: Int
    $maintanance: Int
    $operationType: Int
    $pets: Boolean
    $photos: String!
    $propertyType: Int
    $rent: Int!
  ) {
    addProperty(
      params: {
        about: $about
        address: $address
        area: $area
        bathrooms: $bathrooms
        bedrooms: $bedrooms
        maintanance: $maintanance
        operationType: $operationType
        pets: $pets
        photos: $photos
        propertyType: $propertyType
        rent: $rent
      }
    ) {
      property {
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
      }
    }
  }
`;

const StyledAddProperty = styled.div`
  & > main {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 32px 0;
    margin: 72px auto 0 auto;

    & > form {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .form__select {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }

      .propertyType {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & > .propertyType__content {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
      }
    }
  }
`;

export default function AddProperty() {
  let history = useHistory();
  const [addProperty, { data }] = useMutation(ADD_PROPERTY);
  if (data) {
    console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      about: "",
      address: "",
      area: 0,
      bathrooms: 0,
      bedrooms: 0,
      maintanance: 0,
      operationType: 0,
      pets: false,
      photos: "",
      propertyType: 0,
      rent: 0,
    },

    onSubmit: async (values) => {
      const photos = await UrlCloud(values.photos);
      console.log(photos);
      addProperty({
        variables: {
          about: values.about,
          address: values.address,
          area: values.area,
          bathrooms: values.bathrooms,
          bedrooms: values.bedrooms,
          maintanance: values.maintanance,
          operationType: values.operationType,
          pets: values.pets,
          photos: photos.join("|"),
          propertyType: values.propertyType,
          rent: values.rent,
        },
      });
      history.replace("/");
    },
  });

  return (
    <StyledAddProperty>
      <Header />
      <main>
        <h4>Create a Property Listing</h4>
        <form onSubmit={formik.handleSubmit}>
          <Select label="Operation Type" dual />
          <Input
            name="address"
            onChange={formik.handleChange}
            label="address"
            type="text"
            placeholder="start typing to autocomplete"
            icon={<RiSearchLine />}
          />
          <Input
            name="rent"
            onChange={formik.handleChange}
            label="montly rent"
            type="number"
            icon={<RiMoneyDollarCircleLine />}
            borderColor="#BF5F82"
          />
          <Input
            name="maintanance"
            onChange={formik.handleChange}
            label="maintanance"
            type="number"
            icon={<RiMoneyDollarCircleLine />}
            borderColor="#BF5F82"
          />
          <div className="propertyType">
            <TextOverline>Property Type</TextOverline>
            <div className="propertyType__content">
              <Checkbox label="Apartment" />
              <Checkbox label="House" />
            </div>
          </div>
          <div className="form__select">
            <Select label="Bedrooms" />
            <Select label="Bathrooms" />
            <Select label="Area in m2" />
          </div>
          <Checkbox
            label="Pets Allowed"
            message="Allowing pets increases the likehood of renters  liking the property by 9001%. It also makes you a better person."
          />
          <Input
            name="about"
            onChange={formik.handleChange}
            label="About this property"
            type="text"
            textarea
          />
          <h6>Photos</h6>
          <Input
            name="photos"
            onChange={(e) => {
              formik.setFieldValue("photos", e.currentTarget.files);
            }}
            label="photos"
            type="file"
            multiple
          />
          <Button size="large">Publish property listing</Button>
        </form>
      </main>
      <Footer />
    </StyledAddProperty>
  );
}
