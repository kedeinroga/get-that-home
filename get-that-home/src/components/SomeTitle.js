import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

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
    border-bottom: 1px solid ${colors.pink};
  }
  transition: all 1s;
  &:hover {
    h4 {
      border-bottom: 1px solid ${colors.darkPink};
      color: ${colors.gray};
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      h4 {
        color: ${colors.lightGray};
        border-bottom: 1px solid ${colors.gray4};
      }
      &:hover {
        h4 {
          color: ${colors.lightGray};
          border-bottom: 1px solid ${colors.gray4};
        }
      }
    `}
`;

export default function SomeTitle({ children, disabled = false }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}
