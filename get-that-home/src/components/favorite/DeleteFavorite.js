import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useParams } from "react-router";
import Input from "../Input";

const RemoveFavorite = () => {
  let { id } = useParams();

  const REMOVE_FAVORITE = gql`
  mutation {
    removeFavorite(propertyId: ${id}, id: 12) {
      success
    }
  }
`;

  const [removeFavorite, { data }] = useMutation(REMOVE_FAVORITE);
  if (data) {
    console.log(data);
  }
  const formik = useFormik({
    initialValues: {
      id: `${data}` ? true : false,
    },

    onSubmit: (values) => {
      removeFavorite({
        variables: {
          id: values.id,
        },
      });
    },
  });

  return (
    <a onClick={formik.handleSubmit}>
      <Input
        name="id"
        onChange={formik.handleChange}
        value={formik.values.id}
        label=""
        type="checkbox"
        checked
      />
    </a>
  );
};

export default RemoveFavorite;
