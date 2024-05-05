import React, { Children } from 'react'

export const UserContext = React.createContext()


// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global


export const GlobalStorage = ({ children }) => {

  const [valor, setValor] = React.useState(null)
  
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setValor(json));
  }, []);

  function LimparDados(){
    setValor(null)
  }


  return (
    <UserContext.Provider value={{valor, setValor, LimparDados}}>
      { children }
    </UserContext.Provider>
  )
}