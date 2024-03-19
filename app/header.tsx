"use client";

import React, { useRef } from "react"
import Social from "./social";
import Navigation from "./navigation";
import Menu from "./menu";
import { useEffect, useState } from 'react';

const Header = () => {

    const [isHidden, setIsHidden] = useState(false);
    const [isMid, setIsMid] = useState(false);

    const elementRef = useRef(null);

    const animationClass: string = isMid ? 'scrollUp' : (isHidden ? 'scrolled' : '');

    /**
     * TODO: clean this up
     */
    useEffect(() => {
        const handleScroll = (): void => {
        const scrollTop = window.scrollY;

        const element = elementRef.current;

            setIsHidden(scrollTop > 512);

            if (element.classList.contains("scrolled")) {
                if (scrollTop > 256 && scrollTop < 512) {
                    setIsMid(true);
                } else {
                    setIsMid(false);
                }
            }

            if (scrollTop <= 200) {
                setIsHidden(false);
                setIsMid(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
        <header
        ref={elementRef}
        className={`header-animate bg-black w-full flex justify-between absolute z-10 p-16 ${animationClass}`}>
            <Menu />
            <Navigation display={"hidden lg:flex"} />
            <h1 className="text-white font-avenir text-6xl md:text-8xl uppercase font-bold absolute center-absolute">Mavis</h1>
            <Social align={"right-8"} display={'hidden lg:flex'} />
        </header>
    );
}

export default Header;
