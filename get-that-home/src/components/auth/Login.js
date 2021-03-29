import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(params: { email: $email, password: $password }) {
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

const Login = () => {
  const [login, { data }] = useMutation(LOGIN);
  if (data) {
    console.log(data.login.user.token);
    localStorage.setItem("token", data.login.user.token);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      login({ variables: { email: values.email, password: values.password } });
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

export default Login;