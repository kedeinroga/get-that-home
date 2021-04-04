import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";
import { RiGithubFill, RiLinkedinBoxLine } from "react-icons/ri";
import UserDefault from "../assets/user-default.jpg";
import Icon from "./Icon";

const StyledCardTeam = styled.div`
  display: grid;
  place-items: center;
  gap: 16px;

  & > header {
    width: 180px;
    height: 180px;
    ${(props) =>
      css`
        background-image: url(${props.image});
      `}
    background-position: center center;
    background-size: cover;
    border-radius: 100px;
  }

  & > h5 {
    color: ${colors.black};
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
`;

export default function CardTeam({
  image = UserDefault,
  name = "Unnamed",
  github = "https://github.com/",
  linkedin = "https://www.linkedin.com/",
}) {
  return (
    <StyledCardTeam image={image}>
      <header></header>
      <h5>{name}</h5>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          <Icon size="18px">
            <RiGithubFill />
          </Icon>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Icon size="18px">
            <RiLinkedinBoxLine />
          </Icon>
        </a>
      </div>
    </StyledCardTeam>
  );
}
