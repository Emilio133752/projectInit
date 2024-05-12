import React from 'react'

const Input = ({label, id, value, setValue, style}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text" 
      style={style}
      id={id} 
      name={id} 
      value={value}
      onChange={({target}) => setValue(target.value)} />
    </>
  ) 
}

export default Input
