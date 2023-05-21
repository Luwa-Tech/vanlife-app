import { useParams, Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

const HostVanDetail = () => {
    const params = useParams()
    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [])
    console.log(van)
    if(!Object.keys(van)) {
        return <h1>Loading...</h1>
    }
    return (
        <main className="bg-white p-[3em] mt-[30px]">
            <Link to=".." relative="path"> ← Back to all Vans</Link>
            <section className="flex flex-row gap-4 items-center my-[20px]">
                <img className="w-[15%]" src={van.imageUrl} />
                <div>
                    <button className="bg-[#FF8C38] text-white text-[1.2rem] py-[.3em] px-[.7em] rounded-[5px]">{van.type}</button>
                    <h2 className="font-bold text-2xl my-[10px]">{van.name}</h2>
                    <p><strong>{van.price}</strong>/day</p>
                </div>
            </section>
            <nav className="nav-ul_link__container mb-[15px]">
                <Link className="nav-link-hover" to=".">Details</Link>
                <Link className="nav-link-hover" to="pricing">Pricing</Link>
                <Link className="nav-link-hover" to="photos">Photos</Link>
            </nav>
            <Outlet context={van} />
            {/* <h1>fixing error</h1> */}
        </main>
    )
}

export default HostVanDetail