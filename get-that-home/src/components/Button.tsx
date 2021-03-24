import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  childrenIcon: string
  icon: boolean
  secundary: boolean
  disabled: boolean
  ghost: boolean
  large: boolean
  small: boolean
}

const StyledButton = styled.button`
  border: 0 solid pink;
  border-radius: 16px;
  background-color: transparent;

  :active,
  :focus {
    background-color: transparent;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid;

    background-color: ${colors.pink};
    background-color: ${(props: IProps) => props.secundary && colors.white};
    background-color: ${(props: IProps) => props.ghost && 'transparent'};
    background-color: ${(props: IProps) =>
      props.disabled && colors.shallowGray};

    border-color: ${colors.pink};
    border-color: ${(props: IProps) => props.secundary && colors.pink};
    border-color: ${(props: IProps) => props.ghost && 'transparent'};
    border-color: ${(props: IProps) => props.disabled && colors.shallowGray};

    padding: 8px 16px;
    padding: ${(props: IProps) => props.large && '16px 24px'};
    padding: ${(props: IProps) => props.small && '4px 8px'};

    border-radius: 16px;
    transition: 0.45s all;
    cursor: pointer;

    & > p {
      color: ${colors.white};
      color: ${(props: IProps) => props.secundary && colors.gray};
      color: ${(props: IProps) => props.ghost && colors.gray};
      color: ${(props: IProps) => props.disabled && colors.lightGray};
      margin: 0 12px;
    }

    & > svg {
      fill: ${colors.white};
      fill: ${(props: IProps) => props.secundary && colors.gray};
      fill: ${(props: IProps) => props.ghost && colors.gray};
      fill: ${(props: IProps) => props.disabled && colors.lightGray};
      font-size: 20px;
    }

    :hover {
      background-color: ${colors.darkPink};
      background-color: ${(props: IProps) =>
        props.secundary && colors.shallowPink};
      background-color: ${(props: IProps) => props.ghost && colors.shallowPink};
      background-color: ${(props: IProps) =>
        props.disabled && colors.shallowGray};

      border-color: ${colors.darkPink};
      border-color: ${(props: IProps) => props.secundary && colors.darkPink};
      border-color: ${(props: IProps) => props.ghost && colors.shallowPink};
      border-color: ${(props: IProps) => props.disabled && colors.shallowGray};
    }
  }
`

const StyledButtonIcon = styled.i`
  display: grid;
  place-items: center;
  font-size: 20px;
  padding: 8px;
  border-radius: 50px;
  transition: 0.45s all;
  cursor: pointer;

  :hover {
    background-color: ${colors.shallowPink};
  }

  :focus {
    background-color: black;
  }
`

export default function Button(props: IProps) {
  const {
    children,
    childrenIcon,
    icon,
    secundary,
    disabled,
    ghost,
    large,
    small,
  } = props

  return (
    <StyledButton
      childrenIcon={childrenIcon}
      icon={icon}
      secundary={secundary}
      disabled={disabled}
      ghost={ghost}
      large={large}
      small={small}
    >
      {icon === false && (
        <div>
          childrenIcon
          <TextButton>{children}</TextButton>
          <RiArrowDownSLine />
        </div>
      )}
      {icon && (
        <StyledButtonIcon>
          <FiBell />
        </StyledButtonIcon>
      )}
    </StyledButton>
  )
}

Button.defaultProps = {
  // ghost: false
}
