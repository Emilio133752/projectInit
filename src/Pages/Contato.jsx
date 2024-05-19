import React from 'react'
import Imagem from '../img/foto.jpg?react'
import styles from './css/Contato.module.css'
import Buttons from '../Components/Buttons'

const Contato = () => {
  return (
    <>
    <Buttons />
    <div className={styles.container}>
            <div className={styles.subContainer}>
                <img className={styles.imagem} src={Imagem} alt="" />
            </div>
            <div className={styles.subContainer}>
                <h1>Entre em contato.</h1>
                <p>emilio@gmail.com</p>
                <p>00000-0000</p>
                <p>Rua Ali perto, 79</p>
            </div>
    </div>
    </>
  )
}

export default Contato
