import Link from "next/link"
import React, { useCallback } from "react"
import { GetSiteContext } from "./contexts/SiteContext";

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

  const {activeMobile, setActiveMobile } = GetSiteContext();

  const linkStyles = `text-black ${uppercase} ${weight} ${size} ${margin}`;

  const handleClick = useCallback(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setActiveMobile(!activeMobile);
    }

  }, [activeMobile, setActiveMobile]);
  

  return (
    <nav className={`${display} bg-mavis-yellow p-4 right-16 z-10 navigation`}>
      <div className={`container mx-auto flex ${flexPosition} items-center`}>
        <ul className="flex space-x-4 link-container">
        <li className={linkStyles}>
          <Link href="#listen">
              <div onClick={handleClick}>
                Listen
              </div>
          </Link>
        </li>
        <li className={linkStyles}>
          <Link href="#tour">
            <div onClick={handleClick}>
              Tour
            </div>
          </Link>
        </li>
        <li className={linkStyles}>
          <Link href="#video">
            <div onClick={handleClick}>
              Watch
            </div>
          </Link>
        </li>
        <li  className={linkStyles}>
          <Link
            className={linkStyles}
            href="https://wearemavis.bandcamp.com/merch/smile-t-shirt"
          >
            Store
          </Link>
        </li>
        <li className={linkStyles}>
          <Link href="#contact">
            <div onClick={handleClick}>
              Contact
            </div>
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
