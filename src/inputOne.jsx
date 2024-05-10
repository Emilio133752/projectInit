import React from 'react'


const InputOne = () => {
    const [state, setState] = React.useState('')
    const [save, setSave] = React.useState([])

    React.useEffect(()=>{
       document.title = state
    }, [state]);

    function handleChange({target}){
        setState(target.value)
    }

    function handleClick(event){
        if(state == '') return console.log('error')
            setSave([...save, state])
    }
  return (
    <div>
      <input value={state} onChange={handleChange} type="text" />
      <button onClick={handleClick}> Enviar </button>
      <div>
        {save.map((mapear, index) =>(
            <p key={index}>{mapear}</p>
        ))}
        </div>
        <p style={{color: 'blue'}}>{state}</p>
    </div>
  )
}

export default InputOne
