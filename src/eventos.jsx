import React from "react"
function handleClick (event){
  alert(`Comprou: ${event.target.innerText}`)
}

const Eventos = () => {
  return (
    <section>
      <button onClick={handleClick}>Alerta</button>
    </section>
  )
}
export default Eventos
