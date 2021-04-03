import styled from "@emotion/styled";
import { colors } from "../ui";
import UpdateUser from "../components/users/UpdateUser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledUpdateProfile = styled.div`
  background-color: ${colors.shallowGray};

  & > main {
    display: grid;
    place-items: center;
    padding: 64px 0 128px 0;
    margin: 72px 0 0 0;
  }
`;

export default function UpdateProfile() {
  return (
    <StyledUpdateProfile>
      <Header />
      <main>
        <UpdateUser />
      </main>
      <Footer />
    </StyledUpdateProfile>
  );
};
