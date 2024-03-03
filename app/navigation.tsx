import Link from "next/link"
import React from "react"

const Navigation = () => {
  return (
    <nav className="bg-mavis-yellow p-4 right-16 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <Link className="text-black font-semibold" href="#tour">
            Tour
          </Link>
          <Link className="text-black font-semibold" href="#video">
            Watch
          </Link>
          <Link
            className="text-black font-semibold"
            href="https://wearemavis.bandcamp.com/merch/smile-t-shirt"
          >
            Store
          </Link>
          <Link className="text-black font-semibold" href="#contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
