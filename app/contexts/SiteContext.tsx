"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export interface SiteContextInterface {
    activeMobile: boolean;
    setActiveMobile: Dispatch<SetStateAction<boolean>>;
}

export const SiteContext = createContext<SiteContextInterface | undefined>(
    undefined
  );

interface SiteProviderProps {
    children: ReactNode;
}

export const SiteProvider = ({ children }: SiteProviderProps) => {
    const [activeMobile, setActiveMobile] = useState<boolean>(false);

    return (
        <SiteContext.Provider
            value={{
                activeMobile,
                setActiveMobile
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}

export function getSiteContext() {
    const context = useContext(SiteContext);
  
    if (context === undefined) {
      throw new Error('site context is undefined');
    } 

    return context;
  }