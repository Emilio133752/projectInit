import React from 'react'
import Fetching from './Fetching'

const Effects = () => {

    const [state, useState] =  React.useState(null)
    const [load, useLoading] = React.useState(null)
    const [contador, setCont] = React.useState(0)
    async function handleClick(){
        setCont(contador + 1)
        useLoading(true)
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const json = await response.json()
        useState(json)
        useLoading(false)
    }

  return (
    <>
      <button onClick={handleClick}>{contador}</button>
      {load && <p>Carregando...</p>}
      {!load && state && <Fetching state={state}/>}
    </>
  )
}

export default Effects
