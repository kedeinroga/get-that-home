import styled from "@emotion/styled";
import { TextBody2, TextCaption } from "../ui";

const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  & > .checkbox__message {
    width: 75%;
  }
`;

export default function Checkbox({ label, id, value, message }) {
  return (
    <StyledCheckbox>
      <div className="checkbox">
        <input type="checkbox" id={id} name={id} value={value} />
        <label for={id}>
          <TextBody2>{label}</TextBody2>
        </label>
      </div>
      <TextCaption className="checkbox__message">{message}</TextCaption>
    </StyledCheckbox>
  );
}
