import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const StyledButton = styled.button(
  (props) => css`
    background-color: ${colors.pink};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;

    width: 161px;
    height: 40px;
    border: 1px solid ${colors.pink};
    border-radius: 16px;
    cursor: pointer;

    & > svg {
      font-size: 16px;
    }
  `
);

function Button({ children, type = "primary", color = "cyan" }) {
  return (
    <StyledButton type={type} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
