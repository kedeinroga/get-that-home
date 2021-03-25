import React, { Fragment } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
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
    </Fragment>
  )
}
