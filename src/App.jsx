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

const App = () => {
  const [produto, setProduto] = CustomHooks('produto', 'setProduct')

  function handleClick({ target }){
    setProduto(target.innerText)
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
