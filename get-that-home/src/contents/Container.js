import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
