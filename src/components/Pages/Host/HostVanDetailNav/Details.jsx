import { useOutletContext } from "react-router-dom"

const Details = () => {
    const {name, type, description} = useOutletContext()
    return (
        <>
        <p className="my-[15px]"><span className="font-extrabold">Name</span>: {name}</p>
        <p className="my-[15px]"><span className="font-extrabold">Category</span>: {type}</p>
        <p className="my-[15px] w-[40%]"><span className="font-extrabold">Description</span>: {description}</p>
        <p className="my-[15px]"><span className="font-extrabold">Visibility</span>: Public</p>
        </>
    )
}

export default Details