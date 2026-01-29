import React from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">

            <NavBar />
            <main className="flex-1 flex items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout