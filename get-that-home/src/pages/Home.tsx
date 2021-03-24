import React, { Fragment } from 'react'
import Button from '../components/Button'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>
        Hello and welcome! :) This app was generated by the Create React App
        template and bootstrapped with Redux, React Router, TypeScript, ESlint,
        Prettier for you. Take a look around ;)
      </p>
      <Button secundary active={false}>
        Button
      </Button>
    </Fragment>
  )
}
