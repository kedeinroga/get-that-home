import styled from "@emotion/styled";
import { colors, TextSubtitle2 } from "../ui";
import Icon from "./Icon";
import { DiRuby, DiReact } from "react-icons/di";

const StyledFooter = styled.footer`
  background-color: ${colors.background};
  border-top: 1px solid ${colors.darkPink};

  .footer--landing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 85%;
    text-align: center;
    margin: 0 auto;
    padding: 16px 0;

    & > div {
      display: grid;
      place-items: center;
      gap: 4px;

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        space-between: center;
        gap: 16px;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          space-between: center;
          gap: 10px;
        }
      }
    }
  }
`;

export default function Footer({ landing = false }) {
  return (
    <StyledFooter landing={landing}>
      {landing && (
        <div className="footer--landing">
          <TextSubtitle2>© 2021 - Find That Home</TextSubtitle2>
          <div>
            <TextSubtitle2>Source Code</TextSubtitle2>
            <div>
              <div>
                <Icon size="12px">
                  <DiRuby />
                </Icon>
                <TextSubtitle2>Ruby on Rails REST API</TextSubtitle2>
              </div>
              <div>
                <Icon size="12px">
                  <DiReact />
                </Icon>
                <TextSubtitle2>React Responsive SPA</TextSubtitle2>
              </div>
            </div>
          </div>
          <TextSubtitle2>Codeable - Cohort 3 Final Project</TextSubtitle2>
        </div>
      )}
      {!landing && 
        <h1>Otro footer</h1>
      }
    </StyledFooter>
  );
}
