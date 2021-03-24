import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiUserLine, RiArrowDownSLine } from 'react-icons/ri'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  secundary: boolean
  active: boolean
}

const StyledButton = styled.button`
  background-color: ${(props: IProps) =>
    props.secundary ? colors.white : colors.pink};
  background-color: ${(props: IProps) =>
    props.active === false && colors.shallowGray};
  color: ${colors.white};
  border: 1px solid
    ${(props: IProps) => (props.secundary ? colors.pink : colors.white)};
  border: 1px solid
    ${(props: IProps) => props.active === false && colors.shallowGray};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  & > p {
    color: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};
    color: ${(props: IProps) => props.active === false && colors.lightGray};
    margin: 0 12px;
  }

  & > svg {
    fill: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};
    fill: ${(props: IProps) => props.active === false && colors.lightGray};
    font-size: 20px;
  }
`

export default function Button(props: IProps) {
  const { children, secundary, active } = props
  return (
    <StyledButton secundary={secundary} active={active}>
      <RiUserLine />
      <TextButton>{children}</TextButton>
      <RiArrowDownSLine />
    </StyledButton>
  )
}

Button.defaultProps = {
  // secundary: false
}
