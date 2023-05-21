import { useEffect, useState } from "react"
import {Link, useSearchParams} from "react-router-dom"

const Vans = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        const fetchData = async () => {
                 const response = await fetch("/api/vans")
                 const data = await response.json()

            setVans(data.vans)
           } 
        
           fetchData().catch(err => console.log(err))
    }, [])

    ///filter out vans based on user preference
    const filteredVans = typeFilter ?
     vans.filter(item => item.type === typeFilter)
     : vans

    const vansElements = filteredVans.map(van => {
        return (
            <div key={van.id} className="van-container">
                <Link to={`/vans/${van.id}`} state={{search: typeFilter}}>
                <img className="mb-5 rounded-[10px]" src={van.imageUrl}/>
                    <div className="mb-2 flex flex-row justify-between">
                        <p className="text-[1.5rem] font-bold">{van.name}</p>
                        <p className="text-[1.5rem] font-bold">{`$${van.price}`}<span>/day</span></p>
                    </div>
                    <p className="bg-black py-3 px-7 w-[40%] text-white text-[1.2rem] rounded-[10px]">{van.type}</p>    
                </Link>       
            </div>
        )
    })

    return (
        <div className="mt-[20px]">
        <h1 className="font-bold text-[32px] text-[#161616]">Explore our van options</h1>
        <section className="my-[20px]">
            <Link to="?type=simple" className="type-button">Simple</Link>
            <Link to="?type=luxury" className="type-button">Luxury</Link>
            <Link to="?type=rugged" className="type-button">Rugged</Link>
            <Link to="." className="underline text-bold text-[#4D4D4D] text-[1.3rem] cursor-pointer">Clear filters</Link>
        </section>
        <section className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-3  gapy-5 mb-[40px]">
        {vansElements}
        </div>
        </section>
        </div>
    )
}

export default Vans

