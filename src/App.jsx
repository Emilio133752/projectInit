import React from "react"

const App = () => {
  const random = Math.random().toFixed(2)
  const style = {
   color: "blue", 
   width: "100%",
   height: "70px",
   borderRadius: "2%",
   background: "red",
  }

  const title = () =>{
    return <p>Is the tittle for Origamid</p>
  }

  const isActive = true;
  return (
    <React.Fragment>
      <h1>{title()}</h1>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p style={style} className={isActive == true ? "active" : "noActive" }>{random}</p>
      <button>Remove</button>
    </React.Fragment>
  )
}

export default App
