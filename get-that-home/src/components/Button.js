import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, TextButton } from "../ui";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.pink};
  border: 1px solid ${colors.pink};
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.4s all;

  & > p {
    color: ${colors.white};
  }

  :hover {
    background-color: ${colors.darkPink};
  }

  ${(props) =>
    props.type === "secundary" &&
    css`
      background-color: ${colors.white};
      border-color: ${colors.pink};

      & > p {
        color: ${colors.gray};
      }

      :hover {
        background-color: ${colors.shallowPink};
        border-color: ${colors.darkPink};
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

      :hover {
        background-color: ${colors.shallowGray};
        border-color: ${colors.shallowGray};
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

      :hover {
        background-color: ${colors.shallowPink};
        border-color: ${colors.shallowPink};
      }
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      padding: 16px 24px;
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      border-radius: 8px;
      padding: 4px 8px;
    `}
`;

function Button({ children, type = "primary", size = "normal" }) {
  return (
    <StyledButton type={type} size={size}>
      <TextButton>{children}</TextButton>
    </StyledButton>
  );
}

export default Button;
