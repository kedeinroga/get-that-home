import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  childrenIcon?: ReactNode
  select?: boolean
  icon?: boolean
  secundary?: boolean
  disabled?: boolean
  ghost?: boolean
  large?: boolean
  small?: boolean
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
    gap: 12px;

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
    padding: ${(props: IProps) => props.icon && '8px'};

    border-radius: 16px;
    border-radius: ${(props: IProps) => props.icon && '50px'};

    transition: 0.4s all;
    cursor: pointer;

    & > p {
      color: ${colors.white};
      color: ${(props: IProps) => props.secundary && colors.gray};
      color: ${(props: IProps) => props.ghost && colors.gray};
      color: ${(props: IProps) => props.disabled && colors.lightGray};
    }

    & > svg {
      stroke: ${colors.white};
      fill: ${colors.white};
      stroke: ${(props: IProps) => props.secundary && colors.gray};
      fill: ${(props: IProps) => props.secundary && colors.gray};
      stroke: ${(props: IProps) => props.ghost && colors.gray};
      fill: ${(props: IProps) => props.ghost && colors.gray};
      stroke: ${(props: IProps) => props.disabled && colors.lightGray};
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
      border-color: ${(props: IProps) => props.ghost && colors.darkPink};
      border-color: ${(props: IProps) => props.disabled && colors.shallowGray};

      & > p {
        color: ${(props: IProps) => props.secundary && colors.darkGray};
        color: ${(props: IProps) => props.ghost && colors.darkGray};
        color: ${(props: IProps) => props.disabled && colors.lightGray};
      }

      & > svg {
        stroke: ${colors.white};
        fill: ${colors.white};
        stroke: ${(props: IProps) => props.secundary && colors.darkGray};
        fill: ${(props: IProps) => props.secundary && colors.darkGray};
        stroke: ${(props: IProps) => props.ghost && colors.darkGray};
        fill: ${(props: IProps) => props.ghost && colors.darkGray};
        stroke: ${(props: IProps) => props.disabled && colors.lightGray};
        fill: ${(props: IProps) => props.disabled && colors.lightGray};
        font-size: 20px;
      }
    }
  }
`

export default function Button(props: IProps) {
  const {
    children,
    childrenIcon,
    select,
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
      select={select}
      icon={icon}
      secundary={secundary}
      disabled={disabled}
      ghost={ghost}
      large={large}
      small={small}
    >
      {icon === false && (
        <div>
          {childrenIcon}
          <TextButton>{children}</TextButton>
          {select === true && <RiArrowDownSLine />}
        </div>
      )}
      {icon && <div>{children}</div>}
    </StyledButton>
  )
}

Button.defaultProps = {
  childrenIcon: '',
  icon: false,
  select: false,
  secundary: false,
  disabled: false,
  ghost: false,
  large: false,
  small: false,
}
