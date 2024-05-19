import React from 'react'
import styles from './css/Desc.module.css'
import Head from './Head'

const DescProdutos = ({dados}) => {
  return (
    <div>
        <Head title={`Dogs | ${dados.nome}`}/>
        <div className={styles.container}>
            <div className={styles.subContainer}>
                {dados.fotos.map((items,index) => (
                    <div key={index}>
                        <img className={styles.imagem} src={items.src}/>
                    </div>
                ))}
            </div>
            <div className={styles.subContainer}>
                <h1>{dados.nome}</h1>
                <h2>R$ {dados.preco}</h2>
                <p>{dados.descricao}</p>
            </div>
    </div>
    </div>
  )
}

export default DescProdutos
