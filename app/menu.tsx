"use client";

import React, { useCallback } from "react"
import { GetSiteContext } from "./contexts/SiteContext";

interface MenuComponentProps {
    /** Selected or not */
    active?: boolean;
  }

const Menu: React.FC<MenuComponentProps> = () => {
    const {activeMobile, setActiveMobile, setHasFadedIn } = GetSiteContext();

    const toggleMenu = useCallback(() => {
        setActiveMobile(!activeMobile);
        setHasFadedIn(true);
    }, [activeMobile, setActiveMobile, setHasFadedIn]);
    
    return (
        <div id="menu" className={activeMobile ? 'active lg:hidden' : 'lg:hidden'} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Menu;
