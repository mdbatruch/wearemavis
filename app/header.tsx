"use client";

import React, { useRef } from "react"
import Menu from "./menu";
import Navigation from "./navigation";
import Social from "./social";

const Header = () => {

    const elementRef = useRef<HTMLDivElement | null>(null);

    return (
        <header
        ref={elementRef}
        className={`header-animate bg-black w-full flex justify-between fixed z-10 p-16`}>
            <Menu />
            <Navigation display={"hidden lg:flex"} />
            <h1 className="text-white font-avenir text-6xl md:text-8xl uppercase font-bold absolute center-absolute">Mavis</h1>
            <Social align={"right-8"} display={'hidden lg:flex'} />
        </header>
    );
}

export default Header;
