import React from 'react'
import styled from '@emotion/styled'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import userDefault from '../assets/user-default.jpg'
import Icon from './Icon'
import { colors } from '../ui'

interface IProps {
  image?: string
  name?: string
  github?: string
  linkedin?: string
}

export default function TeamCard(props: IProps) {
  const { image, name, github, linkedin } = props

  const StyledTeamCard = styled.li`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    & > section {
      width: 180px;
      height: 180px;
      background-image: url(${image});
      background-size: cover;
      background-position: center center;
      border-radius: 100px;
    }

    & > h5 {
      color: ${colors.black};
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }
  `

  return (
    <StyledTeamCard>
      <section />
      <h5>{name}</h5>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          <Icon color={colors.gray} size="18px">
            <RiGithubFill />
          </Icon>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Icon color={colors.gray} size="18px">
            <RiLinkedinBoxFill />
          </Icon>
        </a>
      </div>
    </StyledTeamCard>
  )
}

TeamCard.defaultProps = {
  image: userDefault,
  name: 'Unnamed',
  github: 'https://wwww.github.com/',
  linkedin: 'https://www.linkedin.com/',
}
