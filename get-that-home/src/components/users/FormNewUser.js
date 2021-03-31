import React from "react";
import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "../auth/CurrentUser";
import { colors } from "../../ui";

const StyledFormNewUser = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 16px;
`;

const FormNewUser = ({ role }) => {
  const SIGNUP = gql`
    mutation AddUser(
      $email: String!
      $name: String!
      $password: String!
      $phone: Int!
      $role: Int
    ) {
      addUser(
        params: {
          email: $email
          name: $name
          password: $password
          phone: $phone
          role: $role
        }
      ) {
        user {
          token
          id
          name
          email
          phone
          role
        }
      }
    }
  `;

  useQuery(GET_CURRENT_USER_QUERY);

  const [addUser] = useMutation(SIGNUP, {
    onCompleted({ addUser }) {
      localStorage.setItem("token", addUser.user.token);
    },
    update(cache, { data }) {
      cache.writeQuery({
        query: GET_CURRENT_USER_QUERY,
        data: {
          currentUser: data.addUser.user,
        },
      });
    },
  });
  const role_user = role;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: 0,
      role: role_user,
    },

    onSubmit: (values) => {
      console.log(role_user);
      const password = values.password;
      const confirmPassword = values.confirmPassword;
      if (password !== confirmPassword) {
        alert("Passwords don't match");
      } else {
        addUser({
          variables: {
            email: values.email,
            password: values.password,
            name: values.name,
            phone: values.phone,
            role: role_user,
          },
        });
      }
    },
  });

  return (
    <StyledFormNewUser onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
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

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password">Password </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label htmlFor="confirmPassword">Password Confirmation </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <button type="submit">Create account</button>
    </StyledFormNewUser>
  );
};

export default FormNewUser;
