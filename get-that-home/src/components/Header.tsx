import React from 'react'
import styled from '@emotion/styled'
import { FiSearch } from 'react-icons/fi'
import { RiUserAddLine, RiUserReceivedLine } from 'react-icons/ri'
import { colors } from '../ui'
import Container from '../contents/Container'
import Logo from '../assets/logo.svg'
import Button from './Button'

const StyledHeader = styled.header`
  background-color: blue;
  height: 72px;
  background: ${colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="Get that home!" />
        <ul>
          <li>
            <Button childrenIcon={<FiSearch />} ghost>
              Button
            </Button>
          </li>
          <li>
            <Button childrenIcon={<RiUserAddLine />} secundary>
              Button
            </Button>
          </li>
          <li>
            <Button childrenIcon={<RiUserReceivedLine />} secundary>
              Button
            </Button>
          </li>
        </ul>
      </Container>
    </StyledHeader>
  )
}
