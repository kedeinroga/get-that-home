import React from 'react'
import styled from '@emotion/styled'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
import userDefault from '../assets/user-default.jpg'

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
        <a href={github}>
          <RiGithubFill />
        </a>
        <a href={linkdin}>
          <RiLinkedinBoxFill />
        </a>
      </div>
    </StyledTeamCard>
  )
}

TeamCard.defaultProps = {
  image: userDefault,
  name: 'Unnamed',
  github: 'No link',
  linkdin: 'No link',
}
