import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "./CurrentUser";

import styled from "@emotion/styled";
import Button from "../Button";

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

const StyledLogin = styled.div`
  background-color: green;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    space-content: center;
  }
`;

const Login = () => {
  useQuery(GET_CURRENT_USER_QUERY);

  const [login] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.user.token);
    },
    update(cache, { data }) {
      console.log(data);
      console.log(cache);
      cache.writeQuery({
        query: GET_CURRENT_USER_QUERY,
        data: {
          currentUser: data.login.user,
        },
      });
    },
  });

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
    <StyledLogin>
      <h5>Login</h5>
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

        <Button type="submit">Login</Button>
        <button type="submit">Submit</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
