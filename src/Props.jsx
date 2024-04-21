import React from 'react'

const Titulo = (props) =>{
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}

const Props = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu titulo 01"/>
      <Titulo cor="green" texto="Meu titulo 02"/>
      <Titulo  texto="Meu titulo 03"/>
      <Titulo  texto="Meu titulo 04"/>
    </div>
  )
}

export default Props
