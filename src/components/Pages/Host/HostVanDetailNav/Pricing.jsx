import { useOutletContext } from "react-router-dom"

const Pricing = () => {
    const van = useOutletContext()

    return <p>{`${van.price}/day`}</p>
}

export default Pricing