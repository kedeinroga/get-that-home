import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors, TextButton } from '../ui'

interface IProps {
  children: ReactNode
  inactive?: boolean
}

const StyledTitle = styled.div`
  width: fit-content;
  position: relative;
  cursor: pointer;

  ::after {
    content: '';
    background-color: ${colors.pink};
    background-color: ${(props: IProps) => props.inactive && '#BDBDBD'};
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -6px;
    transition: 0.4s all;
  }

  & > p {
    color: ${(props: IProps) => props.inactive && colors.lightGray};
    transition: 0.4s all;
  }

  :hover {
    & > p {
      color: ${(props: IProps) => props.inactive === false && colors.gray};
    }
    ::after {
      background-color: ${(props: IProps) =>
        props.inactive === false && colors.darkPink};
    }
  }
`

export default function Title(props: IProps) {
  const { children, inactive } = props

  return (
    <StyledTitle inactive={inactive}>
      <TextButton>{children}</TextButton>
    </StyledTitle>
  )
}

Title.defaultProps = {
  inactive: false,
}
