import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";

const UPDATE_USER = gql`
  mutation UpdateUser(
    $email: String!
    $password: String!
    $name: String!
    $phone: Int!
  ) {
    updateUser(
      params: { email: $email, name: $name, password: $password, phone: $phone }
    ) {
      user {
        name
        token
      }
    }
  }
`;

const UpdateUser = () => {
  const [updateUser, { data }] = useMutation(UPDATE_USER);
  if (data) {
    console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
    },

    onSubmit: (values) => {
      updateUser({
        variables: {
          email: values.email,
          name: values.name,
          password: values.password,
          phone: values.phone,
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <label htmlFor="password">Password </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateUser;
