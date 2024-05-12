import React from 'react'

const Select = () => {
    const [termos, setTermos] = React.useState(false);
  return (
    <form>
        <label>
            <input type="checkbox" value='termo accept' checked={termos}onChange={({target}) => setTermos(target.checked)}/>
            Aceito os termos
        </label>
        {termos && <p>Aceitou os termos</p>}
    </form>
  )
}

export default Select
