import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import UrlCloud from "../helpers/UrlCloud";

import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";

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
    }
  }
`;

export default function AddProperty() {
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
    },
  });

  return (
    <StyledAddProperty>
      <Header />
      <main>
        <h4>Create a Property Listing</h4>
        <form onSubmit={formik.handleSubmit}>
          <p>Operation Type</p>
          <label htmlFor="rent">
            Rent
            <input type="radio" id="rent" name="operationType" value="rent" />
          </label>
          <label htmlFor="sale">
            sale
            <input type="radio" id="sale" name="operationType" value="sale" />
          </label>

          <p>Property Type</p>
          <label htmlFor="apartment">
            Apartment
            <input
              type="radio"
              id="apartment"
              name="propertyType"
              value="apartment"
            />
          </label>
          <label htmlFor="house">
            House
            <input type="radio" id="house" name="propertyType" value="house" />
          </label>

          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.bedrooms}
          />

          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.bathrooms}
          />

          <label htmlFor="area">Area in M2</label>
          <input
            id="area"
            name="area"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.area}
          />

          <label htmlFor="pets">
            Pets Allowed
            <input
              type="checkbox"
              id="pets"
              name="pets"
              value={formik.values.pets}
            />
          </label>

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
          />
          <Input
            name="maintanance"
            onChange={formik.handleChange}
            label="maintanance"
            type="number"
            icon={<RiMoneyDollarCircleLine />}
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
