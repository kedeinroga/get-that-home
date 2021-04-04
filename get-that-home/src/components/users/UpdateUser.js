import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { GET_CURRENT_USER_QUERY } from "../auth/CurrentUser";

import styled from "@emotion/styled";
import { colors } from "../../ui";
import Button from "../Button";
import Input from "../Input";

const StyledFormUpdateUser = styled.div`
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
      phone: parseInt(`${phoneDataUser}`),
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
    <StyledFormUpdateUser>
      <h5>Your Profile</h5>
      <form>
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="email"
          type="email"
        />
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          label="name"
          type="text"
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
        <Button onClick={formik.handleSubmit} href="/">
          Submit
        </Button>
      </form>
    </StyledFormUpdateUser>
  );
};

export default UpdateUser;
