import React from 'react'

const Fetching = ({state}) =>{
    return(
        <div>
            {console.log(state)}
            {state.results.map((item) => {
               return <p key={item.name}>{item.name}</p>
            })}
        </div>

    )
}

export default Fetching
