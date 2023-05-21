import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="background ">
            <div className="hero-container">
                <h1 className="font-extrabold text-[2.5rem]">You got the travel plans, we got the travel vans.</h1>
                <p className="font-medium text-[1.2rem]">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans">
                <p className="w-[100%] bg-[#FF8C38] py-[1.2rem] rounded-[3px] font-bold text-center text-[1.2rem] cursor-pointer hover:opacity-80">Find your van</p>
                </Link>
            </div>
            
        </section>
    )
}

export default Home