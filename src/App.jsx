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
import Checkbox from "./Form/Checkbox.jsx"
import useForm from "./Form/useForm.jsx"
import Desafio from "./Form/Desafio.jsx"
import Radio from "./Form/Radio.jsx"
import { flushSync } from "react-dom"
import Slide from "./Slide.jsx"
import Rotas from "./Routes/Rotas.jsx"
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook



const App = () => {
  return(
    <Rotas />
  )
}

export default App
