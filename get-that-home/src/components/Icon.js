import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledIcon = styled.i`
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;
  & > svg {
    ${(props) =>
      css`
        font-size: ${props.size};
        fill: ${props.color};
      `}
  }
`;

export default function Icon({ children, color = "#616161", size = "20px" }) {
  return (
    <StyledIcon color={color} size={size}>
      {children}
    </StyledIcon>
  );
}
