import React from 'react'
import styled from '@emotion/styled'
import { RiCoinsLine, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TextBody2, colors } from '../ui'
import imageDefault from '../assets/image-default.png'

// CardLabel function:

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
    border-radius: 0 8px 0 0;
    position: absolute;
    top: 0;
    right: 0;

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

// Card function:

interface IPropsC {
  type?: string
  image?: string
}

export default function Card(props: IPropsC) {
  const { type, image } = props

  const StyledCard = styled.div`
    background-color: ${colors.white};
    width: 300px;
    height: 360px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    position: relative;

    & > header {
      width: 100%;
      height: 200px;
      background-image: url(${image});
      background-size: cover;
      background-position: center center;
    }
  `

  return (
    <StyledCard>
      <CardLabel label={type} />
      <header />
    </StyledCard>
  )
}

Card.defaultProps = {
  type: 'rental',
  image: imageDefault,
}
