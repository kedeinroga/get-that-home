import React, { Fragment } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Card type="sale" />
    </Fragment>
  )
}
