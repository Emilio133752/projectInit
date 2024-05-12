import React from 'react'

const Select = () => {
    const [radio, setRadio] = React.useState('');
    function handleChange({ target }){
        setRadio(target.value)
    }
  return (
    <form>
        <label >
            <input 
            type="radio" 
            value="notebook"
            checked={radio === 'notebook'}
            onChange={handleChange}
            />
            Notebook
        </label>  
        <label >
            <input 
            type="radio" 
            value="smartphone"
            checked={radio === 'smartphone'}
            onChange={handleChange}
            />
            Smartphone
        </label> 
        {radio}
    </form>
  )
}

export default Select
