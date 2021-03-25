import React, { Fragment } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Button secundary>Button</Button>
      <Title>Some title</Title>
    </Fragment>
  )
}
