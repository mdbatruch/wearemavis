import React from "react"
import Social from "./social"

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black w-full flex flex-wrap relative p-16 justify-center"
    >
      <h2 className="row-100 text-white text-center sm:text-left font-avenir title">Contact</h2>

      <div className="flex flex-1 my-30 text-white text-center sm:text-left">
        <div className="flex-1 mr-4 mb-9 sm:mb-0">
          Band | MGMT
          <p>talktomavis@gmail.com</p>
        </div>
      </div>

      <Social align={"right-8"} display={"flex"} />
    </footer>
  )
}

export default Footer
