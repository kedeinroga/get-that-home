import styled from "@emotion/styled";
import { colors, TextBody2, TextSubtitle2, TextCaption } from "../ui";
import Icon from "./Icon";
import { DiRuby, DiReact } from "react-icons/di";
import { RiGithubFill } from "react-icons/ri";
import Logo from "../assets/logo.svg";

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

  .footer-default {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    padding: 16px 0;

    p {
      color: ${colors.gray};
    }

    span {
      color: ${colors.darkPink};
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      & > .footer__logo {
        height: 40px;
      }

      & > .teamwork {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4px 0;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
        }
      }

      & > .source {
        display: flex;
        flex-direction: column;
        gap: 4px;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
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
      {!landing && (
        <div className="footer-default">
          <div>
            <img className="footer__logo" src={Logo} />
            <TextBody2>© 2021 - Get That Job</TextBody2>
            <TextBody2>Codeable - Cohort 3 Final Project</TextBody2>
          </div>
          <div>
            <TextCaption>
              Build with <span>❤</span> by:
            </TextCaption>
            <div className="teamwork">
              <div>
                <Icon size="16px">
                  <RiGithubFill />
                </Icon>
                <TextBody2>Álvaro Torres</TextBody2>
              </div>
              <div>
                <Icon size="16px">
                  <RiGithubFill />
                </Icon>
                <TextBody2>Kedein Rodríguez</TextBody2>
              </div>
              <div>
                <Icon size="16px">
                  <RiGithubFill />
                </Icon>
                <TextBody2>Heraldo Fortuna</TextBody2>
              </div>
            </div>
          </div>
          <div>
            <TextCaption>Source code:</TextCaption>
            <div className="source">
              <div>
                <Icon size="16px">
                  <DiRuby />
                </Icon>
                <TextBody2>Ruby on Rails GRAPHQL API</TextBody2>
              </div>
              <div>
                <Icon size="16px">
                  <DiReact />
                </Icon>
                <TextBody2>React Responsive SPA</TextBody2>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledFooter>
  );
}
