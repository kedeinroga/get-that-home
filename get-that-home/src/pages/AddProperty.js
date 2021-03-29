import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";

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

const AddProperty = () => {
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

    onSubmit: (values) => {
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
          photos: values.photos,
          propertyType: values.propertyType,
          rent: values.rent,
        },
      });
    },
  });

  return (
    <>
      <h1>Create a Property Listing</h1>
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

        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />

        <label htmlFor="address">Monthly Rent</label>
        <input
          id="rent"
          name="rent"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rent}
        />

        <label htmlFor="maintanance">Maintanance</label>
        <input
          id="maintanance"
          name="maintanance"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.maintanance}
        />

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

        <label htmlFor="about">About this property</label>
        <textarea
          id="about"
          name="about"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.about}
        >
          My apartment is great because...
        </textarea>

        <label htmlFor="photos">Photos </label>
        <p>Upload as many photos as you wish</p>
        <input
          id="photos"
          name="photos"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.photos}
        />

        <button type="submit">Publish property listing </button>
      </form>
    </>
  );
};

export default AddProperty;
