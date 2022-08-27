import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Outlet />
    </main>
  )
}

export default Layout
