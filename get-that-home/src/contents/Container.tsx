import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IProps {
  children: ReactNode
}

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

export default function Container(props: IProps) {
  const { children } = props
  return <StyledContainer>{children}</StyledContainer>
}
