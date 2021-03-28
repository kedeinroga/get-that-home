import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'

import { About } from './pages/About'
import { Home } from './pages/Home'
import { AddProperty } from './pages/AddProperty'

const Container = styled.div``

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/addProperty" component={AddProperty} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
