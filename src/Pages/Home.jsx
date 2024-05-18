import React from 'react'
import Produtos from '../Pages/Produtos'
import styles from './css/Home.module.css'
import { NavLink } from 'react-router-dom';

const Home = ( ) => {
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDados(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className={styles.containerButt}>
      <nav>
        <NavLink to='/'>
        <button className={styles.buttons}>Produtos</button>
        </NavLink>
        <NavLink to='contato'>
        <button className={styles.buttons}>Contato</button>
        </NavLink>
      </nav>
      </div>
      {!loading && dados && <Produtos dados={dados} />}
    </div>
  )
}

export default Home
