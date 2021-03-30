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
  display: none;
  place-items: center;

  & > div {
    display: grid;
    place-items: center;
    gap: 16px;
    background-color: ${colors.white};
    width: fit-content;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 16px;
    margin: 0 auto;

    & > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      space-content: center;
      gap: 8px;

      & > button {
        margin: 8px 0 0 0;
      }
    }
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
    <StyledLogin id="login__overlay">
      <div>
        <h5>Login</h5>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Email"
            type="email"
            placeholder="user@mail.com"
          />
          <Input
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
            type="password"
            placeholder="******"
          />
          <Button icon={<RiUserReceivedLine />}>Login</Button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
