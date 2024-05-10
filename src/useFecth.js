import React from 'react'

const set = new Set()

const useFecth = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [load, setLoading] = React.useState(null)

 const request = React.useCallback(
 async (url, options) =>{
        let response;
        let json;
        try{
            setError(null)
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
            setLoading(false)
        }catch(erro){
            json = null
            setError(`Ocorreu um erro tente novamente mais tarde...`)
        } finally{
            setData(json)
            setLoading(false)
            return {response, json}
        }
    }, [])
set.add(request)
console.log(set)
    return {data, error, load, request}
}

export default useFecth
