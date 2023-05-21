import { Link } from "react-router-dom"

const About = () => {
    return (
        <section>

            <div>
                <img src="./src/assets/images/about2.png" />
            </div>

            <section className="w-[50%] text-center mx-auto">
                <h1 className="font-bold text-[32px] my-[10px]">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="font-medium text-[1.2rem] mb-[25px]">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>

                <p className="font-medium text-[1.2rem]">    
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="mt-[20px] bg-[#FFCC8D] p-[1.7rem] mb-[40px] w-full text-start">
                    <div className="w-[70%] ">
                        <h2 className="text-[24px] text-[#161616] mb-[20px]">
                            Your destination is waiting.
                            Your van is ready.
                        </h2>
                        <Link to="/vans">
                        <button className="p-[1rem] text-white rounded-[3px] bg-[#161616] font-bold hover:opacity-80">Explore our vans</button>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About