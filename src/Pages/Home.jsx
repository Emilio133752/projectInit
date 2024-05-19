import React from 'react'
import Produtos from '../Pages/Produtos'
import Buttons from '../Components/Buttons'
import { Link, useParams } from 'react-router-dom';

const Home = ( ) => {
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDados(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);


  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Buttons /> 
      {dados && <Produtos dados={dados} />}
    </div>
  )
}

export default Home
