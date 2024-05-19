import React from 'react'
import styles from './css/Produtos.module.css'
import { NavLink } from 'react-router-dom'
import DescProdutos from './DescProdutos'
import Head from './Head'

const Produtos = ({ dados, carregando }) => {

  if(carregando){
    return <>
      <div className={styles.containerLoader}>
        <div className={styles.loader}></div>
      </div>   
    </>
  }
  if (!Array.isArray(dados) || dados.length === 0) {
    return <DescProdutos dados={dados}/>;
  }
  return(
    <div>
      <Head title={`Dogs | Home`}/>
      <div className={styles.container}>
        {dados.map((items) => (
            <div key={items.id}>
                <NavLink  to={`/produtos/${items.id}`}>
                  <img className={styles.img} src={items.fotos[0].src}></img>
                </NavLink>
                <p className={styles.paragrafo}>{items.nome}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos
