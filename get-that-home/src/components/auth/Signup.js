import styled from "@emotion/styled";
import { colors } from "../../ui";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormNewUser from "../../components/users/FormNewUser";

const StyledSignup = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(
    0deg,
    ${colors.white} 50%,
    ${colors.shallowPink} 50%
  );
  margin: 72px 0 0 0;

  & > div {
    padding: 64px 0 128px 0;
  }
`;

export default function Signup({ role }) {
  return (
    <StyledSignup>
      <Header />
      <div>
        <FormNewUser role={role} />
      </div>
      <Footer />
    </StyledSignup>
  );
}
