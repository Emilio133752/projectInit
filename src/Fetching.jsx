import React from 'react'

const Fetching = ({state}) =>{
    return(
        <div>
            {state.results.map((item) => {
               return <p key={item.name}>{item.name}</p>
            })}
        </div>

    )
}

export default Fetching
