import React from 'react'

function Footer() {
  return (
    <footer className="bg-red-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} MovieApp. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-yellow-300 transition">Privacy</a>
          <a href="#" className="hover:text-yellow-300 transition">Terms</a>
          <a href="#" className="hover:text-yellow-300 transition">Support</a>
        </div>

        {/* Right */}
        <p className="text-sm opacity-80">
          Built with ❤️ using React
        </p>

      </div>
    </footer>
  )
}

export default Footer