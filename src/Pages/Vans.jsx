import React, { useEffect, useState } from "react"

const Vans = () => {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return <h1>Vans page goes here</h1>
}

export default Vans