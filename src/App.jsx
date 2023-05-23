import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Vans, {loader as VansLoader} from "./components/Pages/vans/Vans"
import VanDetail from "./components/Pages/vans/VanDetail"
import NotFoundPage from "./components/Pages/NotFoundPage"
import HostLayout from "./components/HostLayout"
import Dashboard from "./components/Pages/Host/Dashboard"
import Income from "./components/Pages/Host/Income"
import HostVans, {loader as HostVansLoader} from "./components/Pages/Host/Vans"
import Reviews from "./components/Pages/Host/Reviews"
import HostVanDetail from "./components/Pages/Host/HostVanDetail"
import Photos from "./components/Pages/Host/HostVanDetailNav/Photos"
import Details from "./components/Pages/Host/HostVanDetailNav/Details"
import Pricing from "./components/Pages/Host/HostVanDetailNav/Pricing"

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/vans" element={<Vans />} loader={VansLoader}/>
    <Route path="/vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<HostVans />}  loader={HostVansLoader}/>
      
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<Details />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="Photos" element={<Photos />} />
      </Route>

      <Route path="reviews" element={<Reviews />} />
    </Route>

    <Route path="*" element={<NotFoundPage />} />
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App