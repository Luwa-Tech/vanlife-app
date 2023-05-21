import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center my-[40px]">
            <h1 className="text-2xl mb-[20px]">Sorry the page you are looking for was not found</h1>
            <Link to="/" className="py-[10px] px-[40px] bg-black text-white">Return to Home</Link>
        </div>
    )
}

export default NotFoundPage