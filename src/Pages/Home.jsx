import React from 'react'
import Produtos from '../Pages/Produtos'
import Buttons from '../Components/Buttons'
import styles from './css/Home.module.css'
import { Link, useParams } from 'react-router-dom';
import Head from '../Pages/Head';


const Home = ( ) => {
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false) 

  const params = useParams();

  React.useEffect(() => {
    if(params.id){
      setCarregando(true)
    }
    fetch(`https://ranekapi.origamid.dev/json/api/produto${params.id ? "/" + params.id : ''}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDados(data);
        setCarregando(false)
      })
      .catch(error => {
        setError(error);
      });
  }, [params.id]);


  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Buttons /> 
      {dados && <Produtos dados={dados} carregando={carregando}/> }
      <p className={styles.footerPar}>Alguns direitos reservados</p>
    </div>
    
  )
}

export default Home
