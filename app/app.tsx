"use client";

import { Inter } from "next/font/google"

import React from "react"
import { GetSiteContext } from "./contexts/SiteContext";

const inter = Inter({ subsets: ["latin"] })

const App: React.FC = ({ children }: any) => {

    const { activeMobile } = GetSiteContext();

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} ${activeMobile ? 'overflow-hidden' : ''}`}>{children}</body>
        </html>
    );
}

export default App;
