import Link from "next/link"
import React from "react"

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4 right-16 fixed z-10">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <Link className="text-white" href="#tour">
            Tour
          </Link>
          <Link className="text-white" href="#video">
            Watch
          </Link>
          <Link
            className="text-white"
            href="https://wearemavis.bandcamp.com/merch/smile-t-shirt"
          >
            Store
          </Link>
          <Link className="text-white" href="#contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
