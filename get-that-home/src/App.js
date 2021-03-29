import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'

import { Landing } from './pages/Landing'
import { Login } from './pages/Login'

const Container = styled.div`
  background-color: red;
`

var App = function () {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App;
