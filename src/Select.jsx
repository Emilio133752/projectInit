import React from 'react'

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


const Select = () => {
    const [cores, setCores] = React.useState(['verde']);

    function handleChange({ target }) {
      if (target.checked) {
        setCores([...cores, target.value]);
      } else {
        setCores(cores.filter((cor) => cor !== target.value));
      }
    } 

    return (
      <form>
        {
            coresArray.map((valores, index) => 
            <label key={index}>
                <input 
                type="checkbox"
                value={valores}
                checked={cores.includes(valores)}
                onChange={handleChange}
                />
                {valores}
            </label>
            )
        }
        <ul>
          {cores.map((cor) => (
            <li key={cor}>{cor}</li>
          ))}
        </ul>
      </form>
  )
}

export default Select
