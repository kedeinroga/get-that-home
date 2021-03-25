import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../ui'
import Container from '../contents/Container'
import Logo from '../assets/logo.svg'

const StyledHeader = styled.header`
  background-color: blue;
  height: 72px;
  background: ${colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt='Get that home!'/>
        Header
      </Container>
    </StyledHeader>
  )
}
