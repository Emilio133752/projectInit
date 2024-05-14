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

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setResposta] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  })
  const [slide, setSlide] = React.useState(0) 
  const [resultado, setResultado] = React.useState(null)
  function handleChange({target}){
    setResposta({...respostas, [target.id]: target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  function resultadoFinal(){
    const corretas = perguntas.filter(
      ({id, resposta}) =>  respostas[id] === resposta)    
      setResultado(`Vocẽ acertou ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick({target}){
    console.log(slide)
    if(target.innerText === 'Anterior'){
      if(slide === 0){
        return null
      }else{
        setSlide(slide - 1)
      }
    }
    if(slide < perguntas.length - 1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => 
      <Radio 
       active={slide === index}
       key={index} 
       value={respostas[pergunta.id]} 
       onChange={handleChange} 
       {...pergunta} /> )}
       {resultado && <p>{resultado}</p>}
      <button onClick={handleClick}>Próximo</button>
      <button onClick={handleClick}>Anterior</button>
    </form>
  )
}

export default App
