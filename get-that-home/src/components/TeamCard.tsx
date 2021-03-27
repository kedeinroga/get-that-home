import React from 'react'
import styled from '@emotion/styled'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import userDefault from '../assets/user-default.jpg'
import Icon from './Icon'

export const Teamwork = {
  evair: {
    name: 'Evair Macollunco',
  },
  alvaro: {
    name: 'Alvaro Torres',
  },
  kedein: {
    name: 'Kedein Rodriguez',
  },
  heraldo: {
    name: 'Heraldo Fortuna',
  },
}

interface IProps {
  image?: string
  name?: string
  github?: string
  linkdin?: string
}

export default function TeamCard(props: IProps) {
  const { image, name, github, linkdin } = props

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

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }
  `

  const StyledTeamCardList = styled.ul`
  
  `

  return (
    <StyledTeamCardList>
      <StyledTeamCard>
        <section />
        <h5>{name}</h5>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            <Icon size="18px">
              <RiGithubFill />
            </Icon>
          </a>
          <a href={linkdin} target="_blank" rel="noreferrer">
            <Icon size="18px">
              <RiLinkedinBoxFill />
            </Icon>
          </a>
        </div>
      </StyledTeamCard>
    </StyledTeamCardList>
  )
}

TeamCard.defaultProps = {
  image: userDefault,
  name: 'Unnamed',
  github: 'https://wwww.github.com/',
  linkdin: 'https://www.linkedin.com/',
}
