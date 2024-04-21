import React from 'react'
// Replique a interface como a apresentada na aula -feito
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];


const Produtos = () => {
  return(
    <div>
      <h1 style={{color: "green"}}>Produtos</h1>
      {produtos.map((item) => (
        <div key={item.nome} style={{margin: "20px", width: "100%", height: "20vh", border:"2px solid black", padding:"5px"}}>{item.nome}
        <p>{item.propriedades.map((index) => (
          <li>{index}</li>
        ))}</p>
        </div>
      ))}
    </div>
  )
}

export default Produtos
