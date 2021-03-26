import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { colors, TextSubtitle2 } from '../ui'
import Header from '../components/Header'
import Card from '../components/Card'
import SelectContent from '../contents/SelectContent'
import illustrationHero from '../assets/illustration-1.svg'

const StyledHero = styled.section`
  height: 600px;
  width: 100%;
  background-image: url(${illustrationHero});
  padding: 64px 0;
`

const StyledHeroTitle = styled.div`
  background-color: rgba(40, 40, 40, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > h5 {
    color: ${colors.gray};
  }
`

const StyledProperties = styled.section`
  background-color: green;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const StyledPropertiesTitle = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const StyledPropertiesList = styled.ul`
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  margin: 0 auto;
`

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <StyledHero>
        <StyledHeroTitle>
          <h2>Meet your new Home</h2>
          <h5>The easiest way to find where you belong</h5>
        </StyledHeroTitle>
      </StyledHero>
      <StyledProperties>
        <StyledPropertiesTitle>
          <TextSubtitle2>Find an Apartment you Love</TextSubtitle2>
          <h4>Homes for rent at the best prices</h4>
        </StyledPropertiesTitle>
        <StyledPropertiesList>
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
        </StyledPropertiesList>
      </StyledProperties>
      <SelectContent />
    </Fragment>
  )
}
