import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Prelaunch from "./Pages/Prelaunch"
import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Description from "./Pages/Description"
import Products from "./Pages/Products"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/description" element={<Description />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Prelaunch />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App
