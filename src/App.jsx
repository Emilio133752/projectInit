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

const App = () => {
  const {request, data, load, error} = useFecth()

  React.useEffect(() =>{
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto')
      console.log(response.url)
    }  
    fetchData()
  }, [request])

    if(error) return <div>{error}</div>
    if(load == true) return <div>carregando</div>
    if(data)
      return (
        <>
          {data.map((produtos) => 
          <div key={produtos.id}>
            <h1>{produtos.nome}</h1>
          </div>)}
        </>
        )
    else return null
  }

export default App
