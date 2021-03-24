import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  // any other props that come into the component
}

const StyledButton = styled.button`
  background-color: black;
`

export default function Button({ children }: IProps) {
  return (
    <StyledButton>{ children }</StyledButton>
  );
}
