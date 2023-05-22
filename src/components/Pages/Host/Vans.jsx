import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVans } from "../../../ApiCall"

const HostVans = () => {
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log(hostVans)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const data = await getVans()
                setHostVans(data)
            }catch(err) {
                setError(err)
            } finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if(loading) {
        return <h1>Loading data...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

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