import React from "react"

const Array = () => {
  
  const produtos = ["Valores", "EM "
  ]

  return (
    <div> 
      <hr />
      {produtos.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <hr />
    </div>
    );
}
export default Array
