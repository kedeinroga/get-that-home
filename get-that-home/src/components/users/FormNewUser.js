import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "../auth/CurrentUser";
import { colors } from "../../ui";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StyledFormNewUser = styled.div`
  width: 388px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > button {
      width: fit-content;
      margin: 16px auto 0 auto;
    }
  }
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
    <StyledFormNewUser id="form--register">
      <h5>Create your Account</h5>
      <form>
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          label="name"
          type="text"
        />
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="email"
          type="email"
        />
        <Input
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          label="phone"
          type="number"
        />
        <Input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="password"
          type="password"
        />
        <Input
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          label="password Confirmation"
          type="password"
        />
        <Button onClick={formik.handleSubmit} href="/">Create account</Button>
      </form>
    </StyledFormNewUser>
  );
};

export default FormNewUser;
