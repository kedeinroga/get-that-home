import React from 'react'
import styled from '@emotion/styled'
import { RiCoinsLine, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TextBody2 } from '../ui'

interface IPropsCL {
  label?: string
}

interface IPropsC {
  type?: string
}

const StyledCard = styled.div`
  background-color: yellow;
  height: 100px;
  width: 100px;
`

const StyledCardLabel = styled.div`
  background-color: whitesmoke;

  & > p {
    text-transform: capitalize;
  }
`

function CardLabel(props: IPropsCL) {
  const { label } = props

  return (
    <StyledCardLabel>
      {label === 'rental' && <RiCoinsLine />}
      {label === 'sale' && <RiMoneyDollarCircleLine />}
      <TextBody2>For {label}</TextBody2>
    </StyledCardLabel>
  )
}

export default function Card(props: IPropsC) {
  const { type } = props

  return (
    <StyledCard>
      <CardLabel label={type} />
    </StyledCard>
  )
}

CardLabel.defaultProps = {
  label: 'rental',
}

Card.defaultProps = {
  type: 'rental',
}
