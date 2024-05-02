import React from 'react'


const Produto = ({prefer}) => {
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)

  const [state, setState] = React.useState(null)

  React.useEffect(() =>{
    if (prefer !== null) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${prefer}`)
    .then((response) => response.json())
    .then((json) => setState(json))
    }
  }, [prefer])

  if (state === null) return null;
  return (
    <div> 
      <p>{state.nome}</p>
      <p>R$ {state.preco}</p>
    </div>
  )
}

export default Produto
