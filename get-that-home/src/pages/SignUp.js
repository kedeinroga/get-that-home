import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "../components/auth/CurrentUser";

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

const Signup = () => {
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: 0,
      role: 0,
    },

    onSubmit: (values) => {
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
            role: values.role,
          },
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  );
};

export default Signup;
