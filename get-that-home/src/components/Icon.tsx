import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IProps {
  children: ReactNode
}

const StyledIcon = styled.i`
  width: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;
  & > svg {
    font-size: 20px;
  }
`

export default function Icon(props: IProps) {
  const { children } = props
  return <StyledIcon>{children}</StyledIcon>
}
