import { Outlet, Link } from "react-router-dom"

const HostLayout = () => {
    return (
        <main className="px-[3.9em] py-[2em]">
            <nav className="nav-ul_link__container">
                <Link className="nav-link-hover" to="/host" >Dashboard</Link>
                <Link className="nav-link-hover" to="income">Income</Link>
                <Link className="nav-link-hover" to="vans">Vans</Link>
                <Link className="nav-link-hover" to="reviews">Reviews</Link>
            </nav>

            <Outlet />
        </main>
    )
}

export default HostLayout