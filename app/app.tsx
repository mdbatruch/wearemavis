"use client";

import React from "react"
import { getSiteContext } from "./contexts/SiteContext";

import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const App = ({ children }: any) => {

    const { activeMobile } = getSiteContext();

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} ${activeMobile ? 'overflow-hidden' : ''}`}>{children}</body>
        </html>
    );
}

export default App;
