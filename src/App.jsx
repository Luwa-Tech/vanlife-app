import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Vans />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App