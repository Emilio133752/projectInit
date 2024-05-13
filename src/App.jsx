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

const App = () => {

  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);

  }

  function handleSubmit( event){
    event.preventDefault()
    if(validateCep(cep))
    console.log('envia')
    else
    console.log('nao envia')
  }


  return(
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='1020120321'
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App
