import React from 'react'
import styled from '@emotion/styled'
import { RiCoinsLine } from 'react-icons/ri'
import { TextBody2 } from '../ui'

interface IPropsCL {
  type?: string
}

const StyledCard = styled.div`
  background-color: yellow;
  height: 100px;
  width: 100px;
`

const StyledCardLabel = styled.div`
  background-color: black;
`

function CardLabel(props: IPropsCL) {
  const { type } = props

  switch(type) { 
    case 'rental': {
      return (
        <StyledCardLabel>
          <RiCoinsLine />
          <TextBody2>
            For Rental
          </TextBody2>
        </StyledCardLabel>
      )
    } 
    case 'sale': { 
      return (
        <StyledCardLabel>
          <RiCoinsLine />
          <TextBody2>
            For Rental
          </TextBody2>
        </StyledCardLabel> 
      )
    } 
    default: { 
       break; 
    } 
 } 
}

export default function Card() {

  return (
    <StyledCard>
      <CardLabel />
    </StyledCard>
  )
}

CardLabel.defaultProps = {
  type: 'rental'
}
