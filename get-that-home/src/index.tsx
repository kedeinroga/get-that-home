import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Global, css } from "@emotion/react";
import { colors } from './ui';
import store from './store'
import App from './App'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;700&display=swap');
  
  * {
    color: ${colors.darkGray};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`

ReactDOM.render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <App />
  </Provider>,
  document.getElementById('root')
)
