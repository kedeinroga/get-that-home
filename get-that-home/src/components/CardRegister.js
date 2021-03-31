import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledCardRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  background-color: ${colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  & > h6 {
    font-family: var(--font-montserrat);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.15px;
    text-align: center;
    color: ${colors.darkGray};
  }
  
  & > p {
    font-family: var(--font-montserrat);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    text-align: center;
    color: ${colors.darkGray};
  }
`;

export default function CardRegister({ children }) {
  return <StyledCardRegister>{children}</StyledCardRegister>;
}
