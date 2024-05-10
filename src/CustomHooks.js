import React from 'react'

const CustomHooks = (key, inicial) => {
    const [state, setState] = React.useState(() =>{
        const local = window.localStorage.getItem(key)
        return local ? local : inicial
    })
    
    React.useEffect(() =>{
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export default CustomHooks
