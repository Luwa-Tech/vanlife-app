import React, { useEffect, useState } from "react"


const Vans = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                 const response = await fetch("/api/vans")
                 const data = await response.json()
        
                 return data
             }, 2000)
        
              console.log(data)
           } 
        
           fetchData().catch(err => console.log(err))
    }, [])

    return <h1>Vans page goes here</h1>
}

export default Vans