import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiUserLine, RiArrowDownSLine } from 'react-icons/ri'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  secundary: boolean
  disabled: boolean
  ghost: boolean
  large: boolean
  small: boolean
}

const StyledButton = styled.button`
  background-color: ${(props: IProps) => props.ghost === true && 'transparent'};
  background-color: ${(props: IProps) =>
    props.secundary ? colors.white : colors.pink};
  background-color: ${(props: IProps) =>
    props.disabled === true && colors.shallowGray};
  color: ${colors.white};
  border: 1px solid ${(props: IProps) => props.ghost === true && 'transparent'};
  border: 1px solid
    ${(props: IProps) => (props.secundary ? colors.pink : colors.white)};
  border: 1px solid
    ${(props: IProps) => props.disabled === true && colors.shallowGray};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props: IProps) => (props.large ? '16px 24px' : '8px 16px')};
  padding: ${(props: IProps) => (props.small ? '4px 8px' : '8px 16px')};

  & > p {
    color: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};
    color: ${(props: IProps) => props.disabled === true && colors.lightGray};
    margin: 0 12px;
  }

  & > svg {
    fill: ${(props: IProps) => (props.secundary ? colors.gray : colors.white)};
    fill: ${(props: IProps) => props.disabled === true && colors.lightGray};
    font-size: 20px;
  }
`

export default function Button(props: IProps) {
  const { children, secundary, disabled, ghost, large, small } = props
  return (
    <StyledButton
      secundary={secundary}
      disabled={disabled}
      ghost={ghost}
      large={large}
      small={small}
    >
      <RiUserLine />
      <TextButton>{children}</TextButton>
      <RiArrowDownSLine />
    </StyledButton>
  )
}

Button.defaultProps = {
  // ghost: false
}
