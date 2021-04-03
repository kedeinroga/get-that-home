import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "../auth/CurrentUser";

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
  const dataUser = useQuery(GET_CURRENT_USER_QUERY);

  let emailDataUser =
    dataUser.data === undefined ? "" : dataUser.data.currentUser.email;
  let nameDataUser =
    dataUser.data === undefined ? "" : dataUser.data.currentUser.name;
  let phoneDataUser =
    dataUser.data === undefined
      ? ""
      : parseInt(dataUser.data.currentUser.phone);

  const [updateUser, { data }] = useMutation(UPDATE_USER);
  if (data) {
    console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      email: `${emailDataUser}`,
      name: `${nameDataUser}`,
      password: "",
      phone: `${phoneDataUser}`,
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
