import React from 'react'
import Select from 'react-select'
import styled from '@emotion/styled'
import makeAnimated from 'react-select/animated'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const StyledSelect = styled.div``

const animatedComponents = makeAnimated()

export default function SelectContent() {
  return (
    <StyledSelect>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
      />
    </StyledSelect>
  )
}
