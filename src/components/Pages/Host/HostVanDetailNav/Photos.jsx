import { useOutletContext } from "react-router-dom"

const Photos = () => {
    const {imageUrl} = useOutletContext()
    return <img className="w-[10%]" src={imageUrl} />
}

export default Photos