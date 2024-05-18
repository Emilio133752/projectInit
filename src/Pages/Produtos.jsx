import React from 'react'
import styles from './css/Produtos.module.css'
const Produtos = ({ dados }) => {

  return(
    <div>
      <div className={styles.container}>
        {dados.map((items) => (
          <div>
            <img className={styles.img} src={items.fotos[0].src}></img>
            <p className={styles.paragrafo}>{items.nome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos
