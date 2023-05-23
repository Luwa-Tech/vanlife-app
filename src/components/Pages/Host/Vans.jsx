import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getVans } from "../../../ApiCall"

export const loader = () => {
    return getVans()
}

const HostVans = () => {
    const hostVans = useLoaderData()
    console.log(hostVans)
 
    return (
        <section className="mt-[40px]">
            <h1 className="text-2xl font-bold">Your listed vans</h1>
         
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
        </section>
    )
}

export default HostVans