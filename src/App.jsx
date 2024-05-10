import React from "react"
import Exercicio from './aula02Jsx.jsx'
import Array from './array.jsx'
import Exercicio2 from './exercico2.jsx'
import Componentes from './Componentes.jsx'
import Props from './Props.jsx'
import PropsEx from './PropsEx.jsx'
import Produtos from './Produtos.jsx'
import Home from './Home.jsx'
import UseState from './UseState.jsx'
import ButtonModal from './ButtonModal.jsx'
import Modal from "./Modal.jsx"
import Exercico3 from "./Exercico3.jsx"
import Effects from "./Effects.jsx"
import CustomHooks from "./CustomHooks.js"
import Exercicio4 from "./Exercicio4.jsx"
import Produtinhos from "./Produtinhos.jsx"
import { GlobalStorage } from "./UserContext.jsx"

const App = () => {
  const [produto, setProduto] = CustomHooks('produto', '0')

  function handleClick(){
    setProduto((contador) => Number(contador)+1)
  }

  return (
    <>
      <p>Produto Preferido {produto}</p>
      <button onClick={handleClick}>01</button>
      <button onClick={handleClick}>02</button>
    </>
    )
}
export default App
