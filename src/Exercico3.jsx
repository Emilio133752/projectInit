import React from 'react'
import Fetch from './Fetch'

const Exercico3 = () => {

    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);
  
    async function handleClick(event) {
      setCarregando(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );
      const json = await response.json();
      setDados(json);
      setCarregando(false);
    }

    return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Fetch dados={dados} />}
    </>
  )
}

export default Exercico3
