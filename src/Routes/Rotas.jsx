import React from 'react'
import Home from '../Pages/Home.jsx'
import Contato from '../Pages/Contato.jsx'
import Produtos from '../Pages/Produtos.jsx'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


const Rotas = () => {
    
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produtos/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Rotas
