import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <nav className="nav">
            <ul className="nav-ul">
                <li ><Link className="nav-logo nav-link-hover" to="/">#vanlife</Link></li>
                <div className="nav-ul_link__container">
                    <li className="nav-link-hover"><Link to="/host">Host</Link></li>
                    <li className="nav-link-hover"><Link to="/about">About</Link></li>
                    <li className="nav-link-hover"><Link to="/vans">Vans</Link></li>
                </div>
            </ul>
        </nav>
        </>
    )
}

export default NavBar