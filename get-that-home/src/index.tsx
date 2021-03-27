import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { Global, css } from '@emotion/react'
import { colors } from './ui'
import store from './store'
import App from './App'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql',
  cache: new InMemoryCache(),
})

const EXCHANGE_RATES = gql`
  query {
    fetchProperties {
      id
      address
      rent
      area
      photos
      userId
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>
  return data.fetchProperties.map(({ address }: { address: any }) => (
    <div key={address}>
      <p>{address}</p>
    </div>
  ))
}

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

  body {
    background-color: ${colors.white};
  }

  h1 {
    font-weight: 300;
    font-size: 96px;
    line-height: 128px;
    letter-spacing: -1.5px;
    margin: 0;
  }

  h2 {
    font-weight: 300;
    font-size: 64px;
    line-height: 88px;
    letter-spacing: -0.5px;
    margin: 0;
  }

  h3 {
    font-size: 48px;
    line-height: 64px;
    margin: 0;
  }

  h4 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.25px;
    margin: 0;
  }

  h5 {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }

  h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin: 0;
  }
`

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <App />
      <ExchangeRates />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
