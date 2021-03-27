import React from 'react'
import styled from '@emotion/styled'
import imageDefault from '../assets/image-default.png'

interface IProps {
  image?: string
  name?: string
  github?: string
  linkdin?: string
}

const StyledTeamCard = styled.div``

export default function TeamCard(props: IProps) {
  const { image, name, github, linkdin } = props

  return (
    <StyledTeamCard>
      {image}
      {name}
      {github}
      {linkdin}
    </StyledTeamCard>
  )
}

TeamCard.defaultProps = {
  image: imageDefault,
  name: 'Unnamed',
  github: 'No link',
  linkdin: 'No link',
}
