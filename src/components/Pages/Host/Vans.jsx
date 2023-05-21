import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HostVans = () => {
    const [hostVans, setHostVans] = useState([])
    console.log(hostVans)
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    }, [])


    return (
        <section className="mt-[40px]">
            <h1 className="text-2xl font-bold">Your listed vans</h1>
            {
                hostVans.length > 0 ? (
                    <div className="mt-[40px] ">
                    {hostVans.map(van => (
                       <div key={van.id} className=" bg-white py-4 px-3 my-4 rounded-[6px] shadow-sm">
                        <Link to={van.id} className="flex flex-row gap-4">
                        <img className="w-[10%]" src={van.imageUrl} />
                        <div>
                            <h2>{van.name}</h2>
                            <p>{`${van.price}/day`}</p>
                        </div>
                        </Link>
                        </div>
                    ))}
                </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </section>
    )
}

export default HostVans