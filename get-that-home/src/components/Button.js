import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, TextButton } from "../ui";

const StyledButton = styled.button`
  width: 161px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.pink};
  border: 1px solid ${colors.pink};
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;

  & > p {
    color: ${colors.white};
  }
  ${(props) =>
    props.type === "secundary" &&
    css`
      background-color: ${colors.white};
      border-color: ${colors.pink};

      & > p {
        color: ${colors.gray};
      }
    `}
  ${(props) =>
    props.type === "disabled" &&
    css`
      background-color: ${colors.shallowGray};
      border-color: ${colors.shallowGray};

      & > p {
        color: ${colors.lightGray};
      }
    `}
  ${(props) =>
    props.type === "ghost" &&
    css`
      background-color: transparent;
      border-color: transparent;

      & > p {
        color: ${colors.gray};
      }
    `}
`;

function Button({ children, type = "primary", color = "cyan" }) {
  return (
    <StyledButton type={type} color={color}>
      <TextButton>{children}</TextButton>
    </StyledButton>
  );
}

export default Button;
