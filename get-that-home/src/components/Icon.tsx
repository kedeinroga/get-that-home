import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors } from '../ui'

interface IProps {
  children: ReactNode
  color?: string
  size?: string
}

const StyledIcon = styled.i`
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;
  & > svg {
    font-size: ${(props: IProps) => props.size};
    fill: ${(props: IProps) => props.color};
  }
`

export default function Icon(props: IProps) {
  const { children, color, size } = props
  return (
    <StyledIcon color={color} size={size}>
      {children}
    </StyledIcon>
  )
}

Icon.defaultProps = {
  color: colors.darkGray,
  size: '20px',
}
