"use client";

import React from "react"
import backgroundImage from "../public/mavis.jpg"
import { useEffect, useState } from 'react';

const Banner = () => {

  const [imgOffset, setImgOffset] = useState<number>(450);

  const [danni, setDanni] = useState<number>(450);

  useEffect(() => {

    const handleScroll = (): void => {
      const currentWidth = window.innerWidth;
      if (currentWidth > 768) {
        setImgOffset(window.scrollY + imgOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div id="banner" className="bg-cover bg-center w-full relative">
      <div
        className="w-screen banner-container"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPositionX: "50%",
          backgroundPositionY: `${imgOffset * 0.15}px`,
        }}
      ></div>
    </div>
  )
}

export default Banner
