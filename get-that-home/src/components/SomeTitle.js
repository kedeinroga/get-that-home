import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, TextButton } from "../ui";

const StyledSomeTitle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  p {
    font-family: var(--font-inter);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1.25px;
    color: ${colors.darkGray};
    padding-bottom: 6px;
    border-bottom: 2px solid ${colors.pink};
    transition: 0.4s all;
  }
  
  &:hover {
    p {
      border-bottom: 2px solid ${colors.darkPink};
      color: ${colors.gray};
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      p {
        color: ${colors.lightGray};
        border-bottom: 2px solid ${colors.gray4};
      }
      &:hover {
        p {
          color: ${colors.lightGray};
          border-bottom: 2px solid ${colors.gray4};
        }
      }
    `}
`;

export default function SomeTitle({ children, disabled = false }) {
  return (
    <StyledSomeTitle disabled={disabled}>
      <TextButton>{children}</TextButton>
    </StyledSomeTitle>
  );
}
