import React from 'react'
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// Mostre uma mensagem na tela, caso a resposta da API seja positiva



const InputOne = () => {
  const [load, setLoad] = React.useState(false)
  const [response, setResponse] = React.useState(null)
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  })


  async function handleSubmit(event) {
    setLoad(true)
    event.preventDefault();
    await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then(reponse => setResponse(reponse)) 
    setLoad(false)
  }

  function handleChange({ target }){
    const {id, value} = target
    setForm({ ...form, [id]: value });
    console.log(form)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
      id='nome'
      value={form.nome} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input 
      id='email'
      value={form.email} 
      type="email" 
      onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input 
      id='senha'
      value={form.senha} 
      type="password" 
      onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input 
      id='cep'
      value={form.cep} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input 
      id='rua'
      value={form.rua} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="numero">Numero</label>
      <input 
      id='numero'
      value={form.numero} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input 
      id='bairro'
      value={form.bairro} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input 
      id='cidade'
      value={form.cidade} 
      type="text" 
      onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input 
      id='estado'
      value={form.estado} 
      type="text" 
      onChange={handleChange}
      />
      <button>Enviar</button>
      {load && <div>Enviando...</div>}
      {response && response.ok && <div>Usuário Criado</div>}
    </form>
  )
}

export default InputOne

