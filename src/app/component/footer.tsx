import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer className="text-[#cad2c5] body-font bg-[#0f4c5c]">
    <div className="container px-5 py-4 mx-auto flex items-center justify-between">
      {/* Logo Text */}
      <a className="title-font font-bold text-xl text-white">
        Journal Journey
      </a>
      {/* Center Text */}
      <p className="text-sm text-center">
        Created with ❤️ by <span className="font-bold">AK</span>.
      </p>
    </div>
  </footer>
</div>

  )
}

export default Footer