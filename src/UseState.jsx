import React from 'react'

const UseState = () => {

  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Emilio', idade: '19'})
function handleClick(){
  setAtivo(!handleClick)
  setDados({...dados, faculdade: 'possui faculdade'})
}

  return (
    <section>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Invite'}</button>
    </section>
  )
}

export default UseState

