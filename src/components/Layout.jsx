import { Outlet} from "react-router-dom"
import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
                <Footer />
        </div>
    )
}

export default Layout