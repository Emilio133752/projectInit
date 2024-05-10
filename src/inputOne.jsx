import React from 'react'
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFiles = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  }
  
  
]


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
  }
  return (
    <form onSubmit={handleSubmit}>
      {formFiles.map( ({id, label, type}) => 
      <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input 
        onChange={handleChange}
        value={form[type]}
        id={id}
        type={type}/>
      </div>)}
      <button>Enviar</button>
      {load && <p>carregando... </p>}
      {response && response.ok && <div>Usuário Criado</div>}
    </form>
  )
}

export default InputOne

