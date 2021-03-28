import React from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $about: String
    $address: String!
    $area: Float!
    $bathrooms: Int
    $bedrooms: Int
    $maintanance: Int
    $operationType: Int
    $pets: Boolean
    $photos: String!
    $propertyType: Int
    $rent: Int!) 
    {
    addProperty(params: { 
      about: $about, 
      address: $address, 
      area: $area, 
      bathrooms: $bathrooms,
      bedrooms: $bedrooms,
      maintanance: $maintanance,
      operationType: $operationType,
      pets: $pets,
      photos: $photos,
      propertyType: $propertyType,
      rent: $rent
      }) {
      property {
        about
        address
        area
        bathrooms
        bedrooms
        maintanance
        operationType
        pets
        photos
        propertyType
        rent  
      }
    }
  }
`

export const AddProperty: React.FC = () => {
  const [addProperty, { data }] = useMutation(ADD_PROPERTY)
  if (data) {
    console.log(data)
  }

  return (
    <div>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()
          const target = e.target as typeof e.target & {
            operationType: { value: number }
            address: { value: string }
            rent: { value: number }
            maintanance: { value: number }
            propertyType: { value: number }
            bedrooms: { value: number }
            bathrooms: { value: number }
            area: { value: number }
            // pets: { value: boolean }
            about: { value: string }
            photos: { value: string }
          }
          const operationType = +target.operationType.value
          const address = target.address.value
          const rent = +target.rent.value
          const maintanance = +target.maintanance.value
          const propertyType = +target.propertyType.value
          const bedrooms = +target.bedrooms.value
          const bathrooms = +target.bathrooms.value
          const area = +target.area.value
          // const pets = target.pets.value
          const about = target.about.value
          const photos = target.photos.value
          addProperty({ variables: { operationType, address, rent, maintanance, propertyType, bedrooms, bathrooms, area, about, photos } })
        }}
      >
        <div>
            <input id="rent" type="radio" name="operationType" value="0"/>Rent
            <input id="sale" type="radio" name="operationType" value="1"/>Sale
        </div>
        <div>
          <label htmlFor="address">
            Address:
            <input id="address" type="text" name="address" />
          </label>
        </div>
        <div>
          <label htmlFor="rent">
            Monthly Rent:
            <input id="rent" type="number" name="rent" />
          </label>
        </div>
        <div>
          <label htmlFor="maintanance">
            Maintanance:
            <input id="maintanance" type="number" name="maintanance" />
          </label>
        </div>
        <div>
            <input id="aparment" type="radio" name="propertyType" value="0"/>Apartment
            <input id="house" type="radio" name="propertyType" value="1"/>House
        </div>
        <div>
          <label htmlFor="bedrooms">
            Bedrooms:
            <input id="bedrooms" type="number" name="bedrooms" />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            Bathrooms:
            <input id="bathrooms" type="number" name="bathrooms" />
          </label>
        </div>
        <div>
          <label htmlFor="area">
            Area:
            <input id="area" type="number" name="area" />
          </label>
        </div>
        {/* <div>
          <label htmlFor="pets">
            Pets Allowed:
            <input id="pets" type="checkbox" value="pets"/>
          </label>
        </div> */}
        <div>
          <label htmlFor="about">
            About:
            <textarea id="about" name="about" placeholder="My apartment is great because..."/>
          </label>
        </div>
        <div>
          <label htmlFor="photos">
            Image:
            <input id="photos" type="text" name="photos" />
          </label>
        </div>
        <div>
          <input type="submit" value="Publish property listing " />
        </div>
      </form>
    </div>
  )
}
