import Link from "next/link"
import React, { useCallback, useRef } from "react"
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

  const componentElement = useRef<null | HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setActiveMobile(!activeMobile);
    }

    if (componentElement.current) {

      componentElement.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }, [activeMobile, setActiveMobile]);

  return (
    <nav className={`${display} bg-mavis-yellow p-4 right-16 z-10 navigation`}>
      <div className={`container mx-auto flex ${flexPosition} items-center`}>
        <ul className="flex space-x-4 link-container">
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#listen" onClick={handleClick}>
            Listen
          </Link>
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#tour" onClick={handleClick}>
            Tour
          </Link>
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#video" onClick={handleClick}>
            Watch
          </Link>
          <Link
            className={`text-black ${uppercase} ${weight} ${size} ${margin}`}
            href="https://wearemavis.bandcamp.com/merch/smile-t-shirt"
          >
            Store
          </Link>
          <Link className={`text-black ${uppercase} ${weight} ${size} ${margin}`} href="#contact" onClick={handleClick}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
