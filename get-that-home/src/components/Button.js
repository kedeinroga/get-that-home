import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, TextButton } from "../ui";
import Icon from "./Icon";
import { RiArrowDownSLine } from "react-icons/ri";

const StyledButton = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${colors.pink};
  border: 1px solid ${colors.pink};
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.4s all;

  & > p {
    color: ${colors.white};
  }

  svg {
    fill: ${colors.white};
    stroke: ${colors.white};
  }

  :hover {
    background-color: ${colors.darkPink};
    border-color: ${colors.darkPink};
  }

  ${(props) =>
    props.type === "secundary" &&
    css`
      background-color: ${colors.white};
      border-color: ${colors.pink};

      & > p {
        color: ${colors.gray};
      }

      svg {
        fill: ${colors.gray};
        stroke: ${colors.gray};
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

      svg {
        fill: ${colors.lightGray};
        stroke: ${colors.lightGray};
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

      i {
        color: ${colors.gray};
      }

      svg {
        fill: ${colors.gray};
        stroke: ${colors.gray};
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

function Button({
  children,
  type = "primary",
  size = "normal",
  icon,
  select = false,
  onClick,
}) {
  return (
    <StyledButton type={type} size={size} select={select} onClick={onClick}>
      {icon !== undefined && <Icon>{icon}</Icon>}
      <TextButton>{children}</TextButton>
      {select && (
        <Icon>
          <RiArrowDownSLine />
        </Icon>
      )}
    </StyledButton>
  );
}

export default Button;
