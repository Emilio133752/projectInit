import React from 'react'
import styles from './Buttons.module.css'
import { NavLink } from 'react-router-dom';

const Buttons = ( {handleClick} ) => {
  return (
    <div className={styles.containerButt}>
        <nav>
            <NavLink to='/'>
                <button 
                className={styles.buttons}>Produtos</button>
            </NavLink>
            <NavLink to='/contato'>
                <button className={styles.buttons}>Contato</button>
            </NavLink>
        </nav>
    </div>
  )
}

export default Buttons
