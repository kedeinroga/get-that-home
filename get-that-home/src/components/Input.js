import styled from "@emotion/styled";
import { colors, TextOverline } from "../ui";
import Icon from "../components/Icon";
import { RiArrowDownSLine } from "react-icons/ri";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    background-color: ${colors.white};
    padding: 8px;
    border: 1px solid ${colors.pink};
    border-radius: 8px;

    input {
      border: none;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;

      :placeholder {
        color: ${colors.lightGray};
      }
    }
  }
`;

export default function Input({
  label = "Label",
  placeholder = "",
  icon,
  select = false,
}) {
  return (
    <StyledInput>
      <TextOverline>{label}</TextOverline>
      <div>
        <Icon>{icon}</Icon>
        <input placeholder={placeholder} />
        {select && (
          <Icon>
            <RiArrowDownSLine />
          </Icon>
        )}
      </div>
    </StyledInput>
  );
}
