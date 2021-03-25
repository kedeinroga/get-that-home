import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors } from '../ui'

interface IProps {
  children: ReactNode
  color?: string
}

const StyledIcon = styled.i`
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;
  & > svg {
    font-size: 20px;
    fill: ${(props: IProps) => props.color};
  }
`

export default function Icon(props: IProps) {
  const { children, color } = props
  return <StyledIcon color={color}>{children}</StyledIcon>
}

Icon.defaultProps = {
  color: colors.darkGray,
}
