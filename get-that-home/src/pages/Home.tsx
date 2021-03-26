import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { colors } from '../ui'
import Header from '../components/Header'
import Card from '../components/Card'
import SelectContent from '../contents/SelectContent'
import illustrationHero from '../assets/illustration-1.svg'

const StyledHero = styled.section`
  height: 600px;
  width: 100%;
  background-image: url(${illustrationHero});
`

const StyledHomeTitle = styled.div`
  background-color: rgba(40, 40, 40, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > h5 {
    color: ${colors.gray};
  }
`

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <StyledHero>
        <StyledHomeTitle>
          <h2>Meet your new Home</h2>
          <h5>The easiest way to find where you belong</h5>
        </StyledHomeTitle>
      </StyledHero>
      <Card
        landlord
        type="sale"
        rent="4,000"
        propertyType="house"
        address="Av. Alfredo Mendiola 897 Urb. Palao"
        bedrooms={5}
        bathrooms={2}
        area={100}
      />
      <SelectContent />
    </Fragment>
  )
}
