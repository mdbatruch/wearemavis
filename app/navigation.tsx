import Link from "next/link"
import React from "react"

interface NavComponentProps {
  /** Toggle View */
  display?: string;
  /** Flex Position */
  flexPosition?: string;
  /** Link Uppercase */
  uppercase?: string;
  /** Link weight */
  weight?: string;
  /** Link size */
  size?: string;
  /** Link margin */
  margin?: string;
}

const Navigation: React.FC<NavComponentProps> = ({ display, flexPosition = 'justify-between', uppercase = '', weight = 'font-semibold', size = '', margin = ''}) => {

  return (
    <nav className={`${display} bg-mavis-yellow p-4 right-16 z-10 navigation`}>
      <div className={`container mx-auto flex ${flexPosition} items-center`}>
        <ul className="flex space-x-4 link-container">
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#tour">
            Tour
          </Link>
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#video">
            Watch
          </Link>
          <Link
            className={`text-black ${uppercase} ${weight} ${size} ${margin}`}
            href="https://wearemavis.bandcamp.com/merch/smile-t-shirt"
          >
            Store
          </Link>
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
