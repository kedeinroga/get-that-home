import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiUserLine, RiArrowDownSLine } from 'react-icons/ri'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  secundary: boolean
}

const StyledButton = styled.button`
  background-color: ${(props: IProps) =>
    props.secundary ? colors.white : colors.pink};
  color: ${colors.white};
  border: ${colors.pink};
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  & > p {
    color: ${colors.white};
    margin: 0 12px;
  }

  & > svg {
    fill: ${colors.white};
    font-size: 20px;
  }
`

export default function Button(props: IProps) {
  const { children, secundary } = props
  return (
    <StyledButton secundary={secundary}>
      <RiUserLine />
      <TextButton>{children}</TextButton>
      <RiArrowDownSLine />
    </StyledButton>
  )
}

Button.defaultProps = {
  // secundary: false
}
