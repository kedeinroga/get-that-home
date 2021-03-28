import React from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

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

export { ExchangeRates, client }
