import styled from "@emotion/styled";
import { colors, TextOverline, TextBody2 } from "../ui";

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  select {
    background-color: ${colors.white};
    min-width: 100px;
    height: 36px;
    border: 1px solid ${colors.darkPink};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px;

    color: ${colors.darkGray};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

const StyledDual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .operationType {
    width: fit-content;
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;

    button {
      border: none;
      padding: 10px;
      cursor: pointer;
      transition: 0.4s all;
    }

    .button--rent {
      background-color: ${colors.pink};
      border-radius: 8px 0 0 8px;

      :hover {
        background-color: ${colors.darkPink};
      }

      & > p {
        color: ${colors.white};
      }
    }

    .button--sale {
      background-color: ${colors.white};
      border-radius: 0 8px 8px 0;

      :hover {
        background-color: ${colors.shallowGray};
      }
    }
  }
`;

export default function Select({ label, dual = false }) {
  return !dual ? (
    <StyledSelect>
      <TextOverline>{label}</TextOverline>
      <select>
        <option value="4">4</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </StyledSelect>
  ) : (
    <StyledDual>
      <TextOverline>{label}</TextOverline>
      <div className="operationType">
        <button className="button--rent">
          <TextBody2>Rent</TextBody2>
        </button>
        <button className="button--sale">
          <TextBody2>Sale</TextBody2>
        </button>
      </div>
    </StyledDual>
  );
}
