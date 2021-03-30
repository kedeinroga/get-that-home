import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid ${colors.pink};
  background-color: ${colors.white};
  padding-bottom: 6px;
  h4 {
    font-family: var(--font-inter);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1.25px;
    color: ${colors.darkGray};
  }
  transition: all 1s;
  &:hover {
    border-bottom: 1px solid ${colors.darkPink};
    color: ${colors.gray};
  }
  &:disabled {
    color: ${colors.lightGray};
    border-bottom: 1px solid ${colors.gray4};
  }
`;

export default function SomeTitle({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
