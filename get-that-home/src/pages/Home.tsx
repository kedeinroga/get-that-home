import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Card from '../components/Card'
import SelectContent from '../contents/SelectContent'

const StyledHomeTitle = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <StyledHomeTitle>
        <h2>Meet your new Home</h2>
        <h5>The easiest way to find where you belong</h5>
      </StyledHomeTitle>
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
