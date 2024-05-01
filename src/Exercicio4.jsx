import React, { useEffect } from 'react'
import Produto from './Produto'

const Exercicio4 = () => {

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo -- feito
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js) -- feito
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

    const [state, setState] = React.useState(null)

    async function apis(event){
        const selected = event.target.innerText
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${selected}`)
        const json = await response.json()
        setState(json)
        localStorage.setItem("prefer", selected)
        localStorage.setItem("nome", json.nome)
        localStorage.setItem("preco", json.preco)
    }

  return (
    <div> 
      <h1>Preferencia: {localStorage.getItem("prefer")}</h1>
      <button style={{margin: '5px',}} onClick={apis}>smartphone</button>
      <button onClick={apis}>notebook</button>
      {<Produto state={state}/>}
    </div>
  )
}

export default Exercicio4
