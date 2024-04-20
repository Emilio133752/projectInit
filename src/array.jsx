import React from "react"

const Array = () => {
  
  const produtos = ["Valores", "EM "
  ]

  return (
    <div> 
      {produtos.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
    );
}
export default Array
