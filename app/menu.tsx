"use client";

import React, { useEffect, useState } from "react"
import { getSiteContext } from "./contexts/SiteContext";

interface MenuComponentProps {
    /** Selected or not */
    active?: boolean;
  }

const Menu: React.FC<MenuComponentProps> = ({ active }) => {
    const {activeMobile, setActiveMobile } = getSiteContext();

    const toggleMenu = () => {
        setActiveMobile(!activeMobile);
    };
    
    return (
        <div id="menu" className={activeMobile ? 'active lg:hidden' : 'lg:hidden'} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Menu;