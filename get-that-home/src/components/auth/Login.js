import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "./CurrentUser";

import styled from "@emotion/styled";
import { colors } from "../../ui";
import { RiUserReceivedLine, RiSearchLine } from "react-icons/ri";
import Button from "../Button";
import Input from "../Input";

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
  background-color: rgba(97, 97, 97, 0.25);
  min-height: 100vh;
  display: grid;
  place-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    space-content: center;
    gap: 16px;

    background-color: ${colors.white};
    width: fit-content;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 16px;
    margin: 0 auto;
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
      <form onSubmit={formik.handleSubmit}>
        <h5>Login</h5>
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

        <Input placeholder="Placeholder" icon={<RiSearchLine />} select />

        <Button type="secundary" type="submit" icon={<RiUserReceivedLine />}>
          Login
        </Button>
        <button type="submit">Submit</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
