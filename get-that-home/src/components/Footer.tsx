import React from 'react'
import styled from '@emotion/styled'
import { colors, TextSubtitle2 } from '../ui'

interface IProps {
  landing?: boolean
}

const StyledFooter = styled.footer`
  background-color: ${colors.background};
  border-top: 1px solid ${colors.darkPink};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px 32px;

  & > div {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > section {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

export default function Footer(props: IProps) {
  const { landing } = props

  let footer

  if (landing) {
    footer = (
      <StyledFooter>
        <div>
          <TextSubtitle2>© 2021 - Find That Home</TextSubtitle2>
          <TextSubtitle2>Source Code</TextSubtitle2>
          <TextSubtitle2>Codeable - Cohort 3 Final Project</TextSubtitle2>
        </div>
        <section>
          <div>
            <TextSubtitle2>Ruby on Rails REST API</TextSubtitle2>
          </div>
          <div>
            <TextSubtitle2>React Responsive SPA</TextSubtitle2>
          </div>
        </section>
      </StyledFooter>
    )
  } else {
    footer = <h1>Gaaa</h1>
  }
  return footer
}

Footer.defaultProps = {
  landing: false,
}
