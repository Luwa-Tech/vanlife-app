import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)

    const locationState = useLocation()
    const searchType = locationState.state.search
    console.log(searchType)
   

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [])

    return (
        <div className="px-[65px]">
        <Link to="/vans">
        <h1 className="font-bold underline">{searchType ? `← Back to ${searchType} Vans` : "← Back to all Vans"}</h1>
        </Link>
                <section className="flex items-center justify-center flex-col mt-[20px]">
                {
            van ? (
                <div className="w-[30%]">
                <img className=" mb-[20px]" src={van.imageUrl} />
                <div className="flex flex-col gap-[20px] ">
                    <span className="bg-black py-3 px-5 self-start rounded-[10px] text-white">{van.type}</span>
                    <h1 className="text-2xl font-bold">{van.name}</h1>
                    <p>{van.description}</p>
                    <button className="bg-[#FF8C38] p-3 rounded-[5px]">Rent this van</button>
                </div>
            </div>
            ): (
                <h1>Loading...</h1>
            )
        }
        </section>
        </div>
    )
}

export default VanDetail

//image, name, type, description, price