import React from 'react'
import styled from '@emotion/styled'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import userDefault from '../assets/user-default.jpg'
import Icon from './Icon'

interface IProps {
  image?: string
  name?: string
  github?: string
  linkdin?: string
}

export default function TeamCard(props: IProps) {
  const { image, name, github, linkdin } = props

  const StyledTeamCard = styled.div`
    & > section {
      width: 180px;
      height: 180px;
      background-image: url(${image});
      background-size: cover;
      background-position: center center;
      border-radius: 100px;
    }
  `

  return (
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
  )
}

TeamCard.defaultProps = {
  image: userDefault,
  name: 'Unnamed',
  github: 'https://wwww.github.com/',
  linkdin: 'https://www.linkedin.com/',
}
