import React from "react"
import Social from "./social"

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black p-16 w-screen flex flex-wrap relative"
    >
      <h2 className="text-4xl row-100 mb-4 text-white font-avenir uppercase font-black">Contact:</h2>

      <div className="flex flex-1 my-30 text-white">
        <div className="flex-1 mr-4">
          Band | MGMT
          <p>talktomavis@gmail.com</p>
        </div>
        <div className="flex-1 mr-4 text-white">
          North America booking
          <p>None!</p>
        </div>
        <div className="flex-1 mr-4 text-white">
          Europe booking
          <p>None!</p>
        </div>
      </div>

      <Social align="right-8" />
    </footer>
  )
}

export default Footer
