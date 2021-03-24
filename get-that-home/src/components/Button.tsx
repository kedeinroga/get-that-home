import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiUserLine, RiArrowDownSLine } from 'react-icons/ri'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  secundary: boolean
  disabled: boolean
}

const StyledButton = styled.button`
  background-color: ${(props: IProps) =>
    props.disabled === true && colors.shallowGray};
  background-color: ${(props: IProps) =>
    props.secundary ? colors.white : colors.pink};
  color: ${colors.white};
  border: 1px solid
    ${(props: IProps) => props.disabled === true && colors.shallowGray};
  border: 1px solid
    ${(props: IProps) => (props.secundary ? colors.pink : colors.white)};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  & > p {
    color: ${(props: IProps) => props.disabled === true && colors.lightGray};
    color: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};
    margin: 0 12px;
  }

  & > svg {
    fill: ${(props: IProps) => props.disabled === true && colors.lightGray};
    fill: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};   
    font-size: 20px;
  }
`

export default function Button(props: IProps) {
  const { children, secundary, disabled } = props
  return (
    <StyledButton secundary={secundary} disabled={disabled}>
      <RiUserLine />
      <TextButton>{children}</TextButton>
      <RiArrowDownSLine />
    </StyledButton>
  )
}

Button.defaultProps = {
  // secundary: false
}
