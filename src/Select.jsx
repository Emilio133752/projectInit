import React from 'react'

const Select = () => {
    const [select, selected] = React.useState('');
  return (
    <form>
        <select 
        id="produtos" 
        value={select} 
        onChange={({target}) => selected(target.value)}
        >
            <option disabled value="">escolha </option>
            <option value="sm0">sm0</option>
            <option value="sm1">sm1</option>
            <option value="sm2">sm2</option>
        </select>
        {select}
    </form>
  )
}

export default Select
