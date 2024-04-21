import React from "react"
import Exercicio from './aula02Jsx.jsx'
import Array from './array.jsx'
import Exercicio2 from './exercico2.jsx'
import Componentes from './Componentes.jsx'
import Props from './Props.jsx'
import PropsEx from './PropsEx.jsx'
import Produtos from './Produtos.jsx'
import Home from './Home.jsx'

// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Opcoes = () =>{
  return(
    <div>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./produtos">Produtos</a></li>
        </ul>
    </div>
  )
}

const Url = () => {
  const { pathname } = window.location;
  if(pathname == "/"){
    return <Home/>
  }else if(pathname == "/produtos"){
    return <Produtos/>
  }
}


const App = () => {
  return (
    <React.Fragment>
      <Opcoes/>
      <Url />
    </React.Fragment>
  )
}
export default App
