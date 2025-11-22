import React from "react"
import Header from "./component/header"
import Footer from "./component/footer"

import { Outlet } from "react-router-dom"
//use this layout as the base and changes other things

function Layout() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default Layout