import styled from "@emotion/styled";
import { colors, TextOverline, TextCaption } from "../ui";
import Icon from "../components/Icon";
import { RiArrowDownSLine } from "react-icons/ri";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
      width: 100%;
      border: none;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;

      :placeholder {
        color: ${colors.lightGray};
      }
    }
  }

  .textarea__text {
    color: ${colors.lightGray};
  }
`;

export default function Input({
  name,
  onChange,
  value,
  label = "Label",
  type = "text",
  placeholder = "",
  icon,
  select = false,
  readonly,
  textarea = false,
}) {
  return (
    <StyledInput>
      <TextOverline>{label}</TextOverline>
      <div>
        {icon !== undefined && <Icon>{icon}</Icon>}
        {!textarea ? (
          <input
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            autoComplete="on"
            readOnly={readonly}
          />
        ) : (
          <textarea
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            autoComplete="on"
            readonly={readonly}
          />
        )}
        {select && (
          <Icon>
            <RiArrowDownSLine />
          </Icon>
        )}
      </div>
      {textarea && (
        <TextCaption className="textarea__text">
          Renters will read this first, so highlight any features or important
          information the apartment has.
        </TextCaption>
      )}
    </StyledInput>
  );
}
