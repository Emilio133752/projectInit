import React from 'react'
import { UserContext } from './UserContext'

const Produtinhos = () => {
    const global = React.useContext(UserContext) 
    function handleClick(){
        console.log(global.valor)
    }
  return (  
    <div>
        <button onClick={() => global.LimparDados()}>Limpar Dados</button>
        <button onClick={handleClick}>Enviar</button>
 </div>
  )
}

export default Produtinhos