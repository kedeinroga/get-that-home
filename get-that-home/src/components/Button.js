import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const StyledButton = styled.button(
  (props) => css`
    background-color: ${props.color === "cyan" ? colors.cyan : "transparent" };
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid #0F0A0A;
    box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.25);
    border-radius: 90px;
    padding: 13px 24px;
    cursor: pointer;

    & > svg {
      font-size: 16px;
    }
  `
);

function Button({ children, color="cyan" }) {
  return (
    <StyledButton
      color={color}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
