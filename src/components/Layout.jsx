import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <>
    <Header/>
    <main className="main">
        {/* Inyectar codigo*/}
        <Outlet/>
    </main>
    <Footer/>

    </>
  )
}

export default Layout