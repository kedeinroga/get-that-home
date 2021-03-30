import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledIcon = styled.i`
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;

  ${(props) =>
    css`
      & > svg {
        font-size: ${props.size};
        fill: ${props.color};
      }
    `}
`;

export default function Icon({ children, color, size = "20px" }) {
  return (
    <StyledIcon color={color} size={size}>
      {children}
    </StyledIcon>
  );
}
