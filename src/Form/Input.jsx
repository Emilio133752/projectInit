import React from 'react'

const Input = ({ label, id, onChange, value, type, onBlur, placeholder, error } ) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        type={type}
      />
      {error && <p>{error}</p>}
    </>
  ) 
}

export default Input
