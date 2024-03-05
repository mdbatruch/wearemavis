"use client";

import React, { useState } from "react"
import Social from "./social";
import Navigation from "./navigation";
import { getSiteContext } from "./contexts/SiteContext";

const MobileMenu = () => {

    const { activeMobile } = getSiteContext();

    return (
        <div className={activeMobile ? '' : "hidden"}>
            <Navigation />
            <Social display={"flex"} />
        </div>
    );
};

export default MobileMenu;
