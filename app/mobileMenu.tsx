"use client";

import React, { useEffect, useState } from "react"
import { GetSiteContext } from "./contexts/SiteContext";

import Navigation from "./navigation";
import Social from "./social";

const MobileMenu = () => {

    const { activeMobile, setActiveMobile, hasFadedIn } = GetSiteContext();

    const animationClass: string = hasFadedIn ? (activeMobile ? 'fadeIn' : 'fadeOut') : '';

    const [prevWidth, setPrevWidth] = useState(() => {

        if (typeof window !== 'undefined') {
            return window.innerWidth;
        }
        return 0;
    });

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            if ((prevWidth <= 768 && currentWidth > 768)) {
                setActiveMobile(false);
            }

            setPrevWidth(currentWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize) };
    }, [activeMobile, hasFadedIn, prevWidth, setActiveMobile]);

    return (
        <div className={`mobile-nav-container ${animationClass}`}>
            <Navigation flexPosition={'justify-center'} uppercase={'uppercase'} weight={'font-bold'} size={'text-4xl'} margin={'mb-4'}/>
            <Social display={'flex'} />
        </div>
    );
};

export default MobileMenu;
