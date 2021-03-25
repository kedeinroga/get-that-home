import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
}

const StyledTitle = styled.div`
  width: fit-content;
  position: relative;
  ::after {
    content: '';
    background-color: ${colors.pink};
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -6px;
  }
`

export default function Title(props: IProps) {
  const { children } = props
  return (
    <StyledTitle>
      <TextButton>{children}</TextButton>
    </StyledTitle>
  )
}
