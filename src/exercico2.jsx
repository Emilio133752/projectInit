import React from "react"


const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Exercicio2 = () => {
  return (
    <section>
      {produtos
      .filter((produto) => Number(produto.preco.replace('R$', '')) > 1500)
      .map((produto) =>(
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <p>{produto.preco}</p>
          {produto.cores.map((item) => (
            <ul key={item} style={{
              color: "white",
              padding: "0px",
              margin: "20px",
              backgroundColor: item,
            }}>{item}
            </ul>
          ))}
        </div>
      ))
      }
    </section>
  )
}
export default Exercicio2
