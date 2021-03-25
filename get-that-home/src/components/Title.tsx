import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IProps {
  children: ReactNode
}

const StyledTitle = styled.div`
  background-color: green;
`

export default function Title(props: IProps) {
  const { children } = props
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}
