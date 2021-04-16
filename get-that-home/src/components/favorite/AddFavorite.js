import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useParams } from "react-router";
import Button from "../Button";
import Input from "../Input";

const AddFavorite = () => {
  let { id } = useParams();

  const ADD_FAVORITE = gql`
  mutation {
    addFavorite(id: ${id}) {
      favorite {
        propertyId
        userId
        id
      }
    }
  }
`;

  const [addFavorite, { data }] = useMutation(ADD_FAVORITE);
  if (data) {
    console.log(data);
  }
  const formik = useFormik({
    initialValues: {
      id: `${data}` ? true : false,
    },

    onSubmit: (values) => {
      addFavorite({
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
      />
    </a>
  );
};

export default AddFavorite;
