import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="h-48 relative overflow-hidden py-10 border-2 border-blue-950 bg-blue-950 flex justify-between gap-5 p-4">

                {/* Logo & About */}
                <div className="text-white max-w-sm">
                    <h1 className="text-3xl font-bold font-serif cursor-pointer">
                        LOGO
                    </h1>
                    <p className="text-sm text-gray-300 mt-3">
                        A platform dedicated to innovation, learning, and technology.
                        Building skills and ideas for the future.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-white">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                        <li >
                            <Link to="/" className="hover:text-white cursor-pointer">
                            Home</Link>
                        </li>
                        <li >
                            <Link to="/" className="hover:text-white cursor-pointer">
                            About
                            </Link>
                        </li>
                        <li >
                            <Link to="/" className="hover:text-white cursor-pointer">
                            Events
                            </Link>

                        </li>
                        <li >
                            <Link to="/" className="hover:text-white cursor-pointer">
                            Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-white">
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-sm text-gray-300">📍 Your College Name</p>
                    <p className="text-sm text-gray-300">📧 info@example.com</p>
                    <p className="text-sm text-gray-300">📞 +91 98765 43210</p>
                </div>

            </div>


        </>
    )
}

export default Footer