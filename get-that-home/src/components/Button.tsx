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
  background-color: ${(props: IProps) =>
    props.secundary ? colors.white : colors.pink};
  background-color: ${(props: IProps) => props.ghost && 'transparent'};
  background-color: ${(props: IProps) => props.disabled && colors.shallowGray};
  color: ${colors.white};
  border: 1px solid
    ${(props: IProps) => (props.secundary ? colors.pink : colors.white)};
  border: 1px solid ${(props: IProps) => props.ghost && 'transparent'};
  border: 1px solid
    ${(props: IProps) => props.disabled && colors.shallowGray};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  padding: ${(props: IProps) => props.large && '16px 24px'};
  padding: ${(props: IProps) => props.small && '4px 8px'};
  transition: 0.45s all;
  cursor: pointer;

  :hover {
    background-color: ${(props: IProps) =>
      props.secundary && colors.shallowPink};
    background-color: ${(props: IProps) => props.ghost && colors.shallowGray};
    background-color: ${(props: IProps) =>
      props.disabled && colors.shallowGray};
    border: 1px solid ${(props: IProps) => props.secundary && colors.darkPink};
    border: 1px solid ${(props: IProps) => props.ghost && colors.shallowGray};
    border: 1px solid ${(props: IProps) =>
      props.disabled && colors.shallowPink};
  }

  & > p {
    color: ${(props: IProps) => props.secundary && colors.gray}
    color: ${(props: IProps) => props.ghost && colors.gray};
    color: ${(props: IProps) => props.disabled && colors.lightGray};
    margin: 0 12px;
  }

  & > svg {
    fill: ${(props: IProps) => props.secundary && colors.gray};
    fill: ${(props: IProps) => props.ghost && colors.gray};
    fill: ${(props: IProps) => props.disabled && colors.lightGray};
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
