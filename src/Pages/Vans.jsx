import React, { useEffect, useState } from "react"

const Vans = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
                 const response = await fetch("/api/vans")
                 const data = await response.json()

            setVans(data.vans)
           } 
        
           fetchData().catch(err => console.log(err))
    }, [])

    console.log(vans)

    return <h1>Vans page goes here</h1>
}

export default Vans

