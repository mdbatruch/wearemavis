"use client";

import React from "react"
import Social from "./social";
import Navigation from "./navigation";
import Menu from "./menu";
import { useEffect, useState } from 'react';

const Header = () => {

    const [isHidden, seIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            seIsHidden(scrollTop > 150);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
        <header
        className={`header-animate bg-black w-full flex justify-between absolute z-10 p-16 ${isHidden ? 'scrolled' : ''}`}>
            <Menu />
            <Navigation display={"hidden lg:flex"} />
            <h1 className="text-white font-avenir text-8xl uppercase font-bold absolute center-absolute">Mavis</h1>
            <Social align={"right-8"} display={'hidden lg:flex'} />
        </header>
    );
}

export default Header;
