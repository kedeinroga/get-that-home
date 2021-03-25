import React from 'react'
import styled from '@emotion/styled'
import { RiCoinsLine, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TextBody2, colors } from '../ui'

interface IPropsCL {
  label?: string
}

function CardLabel(props: IPropsCL) {
  const { label } = props

  const StyledCardLabel = styled.div`
    background-color: ${label === 'sale' ? colors.darkPink : colors.pink};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 6px;
    width: 115px;
    height: 28px;

    & > svg {
      font-size: 16px;
      fill: ${colors.white};
    }

    & > p {
      text-transform: capitalize;
      color: ${colors.white};
    }
  `

  return (
    <StyledCardLabel>
      {label === 'rental' && <RiCoinsLine />}
      {label === 'sale' && <RiMoneyDollarCircleLine />}
      <TextBody2>For {label}</TextBody2>
    </StyledCardLabel>
  )
}

CardLabel.defaultProps = {
  label: 'rental',
}

interface IPropsC {
  type?: string
}

const StyledCard = styled.div`
  background-color: ${colors.white};
  width: 300px;
  height: 360px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

export default function Card(props: IPropsC) {
  const { type } = props

  return (
    <StyledCard>
      <CardLabel label={type} />
    </StyledCard>
  )
}

Card.defaultProps = {
  type: 'rental',
}
