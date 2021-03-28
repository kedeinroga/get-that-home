import React from 'react'
import { gql, useQuery } from '@apollo/client'

const ALL_PROPERTIES = gql`
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

function AllProperties() {
  const { loading, error, data } = useQuery(ALL_PROPERTIES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>
  // console.log(data)

  return data.fetchProperties.map((properties: any) => (
    <div key={properties.id}>
      <p>Address: {properties.address}</p>
      <p>Area: {properties.area}</p>
      <img src={properties.photos} alt="property" />
    </div>
  ))
}

export { AllProperties }
