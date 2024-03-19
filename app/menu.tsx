"use client";

import React, { useCallback } from "react"
import { getSiteContext } from "./contexts/SiteContext";

interface MenuComponentProps {
    /** Selected or not */
    active?: boolean;
  }

const Menu: React.FC<MenuComponentProps> = ({ active }) => {
    const {activeMobile, setActiveMobile, setHasFadedIn } = getSiteContext();

    const toggleMenu = useCallback(() => {
        setActiveMobile(!activeMobile);
        setHasFadedIn(true);
    }, [activeMobile]);
    
    return (
        <div id="menu" className={activeMobile ? 'active lg:hidden' : 'lg:hidden'} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Menu;
