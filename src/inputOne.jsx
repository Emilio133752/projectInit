import React from 'react'


const InputOne = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [form, setForm] = React.useState({
        nome: '',
        email: ''
    })
    function handleSubmit(event){
        event.preventDefault()
        console.log(nome)
    }
    function handleChange({ target }){
        const {id, value} = target;
        setForm({ ...form, [id]: value })
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
  )
}

export default InputOne
