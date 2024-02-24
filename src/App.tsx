import { Route, Routes } from "react-router-dom"
import Layput from "./components/layout/Layput"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Guides from "./pages/Gueds/Guides"


const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Layput />}>
        <Route index element = {<Home />}  />
        <Route path="/about" element = {<About />} />
        <Route path="/gudes" element = {<Guides />} />
      </Route>
    </Routes>
  )
}

export default App
