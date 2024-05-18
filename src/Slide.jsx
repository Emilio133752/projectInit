import React from 'react'
import styles from './Slide.module.css'


const Slide = ( {slides} ) => {
    const [ativo, setAtivo] = React.useState(0)
    const [posicao, setPosicao] = React.useState(0)
    const contextRef = React.useRef()


    React.useEffect( () => {
        const {width} = contextRef.current.getBoundingClientRect()
        setPosicao(-(width * ativo))
    }, [ativo])

    function handleClick({target}){
        if(target.innerText == 'Proximo'){
            if(ativo < slides.length - 1)setAtivo(ativo + 1)
        }else{
            if(ativo > 0) setAtivo(ativo - 1)
        }
    }

  return (
    <section className={styles.container}>
        <div 
        className={styles.content}
        ref={contextRef}
        style={{transform: `translateX(${posicao}px)`}}
        >
            {slides.map(slide => (
                <div key={slide.id} className={styles.item}>{slide.text}</div>
            ))}
        </div>
    <nav className={styles.nav}>
        <button onClick={handleClick}>Anterior</button>
        <button onClick={handleClick}>Proximo</button>
    </nav>
    </section>
  )
}

export default Slide
