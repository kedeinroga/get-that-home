import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Global, css } from '@emotion/react'
import { colors } from './ui'
import store from './store'
import App from './App'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@300;400;500;700&display=swap');

  * {
    color: ${colors.darkGray};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 300;
    font-size: 96px;
    line-height: 128px;
    letter-spacing: -1.5px;
  }

  h2 {
    font-weight: 300;
    font-size: 64px;
    line-height: 88px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 48px;
    line-height: 64px;
  }

  h4 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-size: 24px;
    line-height: 32px;
  }

  h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <App />
  </Provider>,
  document.getElementById('root')
)
