import React, { useEffect } from 'react'
import Produto from './Produto'

const Exercicio4 = () => {

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo -- feito
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js) -- feito
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

    const [prefer, setPrefer] = React.useState(null)


    React.useEffect(() => {
      const produtoLocal = window.localStorage.getItem('prefer');
      if (produtoLocal !== 'null') setPrefer(produtoLocal);
    }, []);

    React.useEffect(() =>{
      if (prefer !== null) window.localStorage.setItem('prefer', prefer)
    }, [prefer])

    const handleClick = ({target}) =>{
      setPrefer(target.innerText)
    }

  return (
    <div> 
      <h1>Preferencia: {prefer}</h1>
      <button style={{margin: '5px',}} onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      {<Produto prefer={prefer}/>}
    </div>
  )
}

export default Exercicio4
