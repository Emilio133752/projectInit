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



const App = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <React.StrictMode>
      <Effects/>
    </React.StrictMode>
  )
}
export default App
