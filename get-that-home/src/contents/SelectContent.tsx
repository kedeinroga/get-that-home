import React from 'react'
// import chroma from 'chroma-js'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
// import { colors } from '../ui'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]
/*
const dot = (color = "#ccc") => ({  
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10
  }
})

const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: (styles: any) => ({ ...styles, ...dot() }),
  placeholder: (styles: any) => ({ ...styles, ...dot() }),
  singleValue: (styles: any, { data }: any) => ({ ...styles, ...dot(data.color) })
};
*/
const animatedComponents = makeAnimated()

export default function SelectContent() {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      label="Single select"
      placeholder="Select a category"
      options={options}
      // styles={colourStyles}
      components={animatedComponents}
    />
  )
}
