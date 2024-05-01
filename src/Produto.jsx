import React from 'react'


const Produto = ({state}) => {
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)

  const nome = localStorage.getItem("nome")
  const preco = localStorage.getItem("preco")

  return (
    <div> 
      <p>{nome}</p>
      <p>R$ {preco}</p>
    </div>
  )
}

export default Produto
