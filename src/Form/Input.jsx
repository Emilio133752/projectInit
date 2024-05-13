import React from 'react'
import Props from '../Props'

const Input = ({ label, id, onChange, ...props} ) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />
    </>
  ) 
}

export default Input
