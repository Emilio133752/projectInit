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
import Exercicio4 from "./Exercicio4.jsx"
import Produtinhos from "./Produtinhos.jsx"
import { GlobalStorage } from "./UserContext.jsx"
import CustomHooks from "./CustomHooks.js"
import useFecth from "./useFecth.js"
import InputOne from "./inputOne.jsx"
import Select from "./Select.jsx"
import Input from "./Form/Input.jsx"


const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  return(
    <React.StrictMode>
      <Select />
      <form>
        <Input style={{color: 'green'}} id='nome' label='Nome' value={nome} setValue={setNome} />
        <Input style={{color: 'orange'}} id='email' label='Email'value={email} setValue={setEmail} />
      </form>
    </React.StrictMode>
  )
}

export default App
