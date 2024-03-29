"use client";

import React, { useCallback, useEffect, useState } from 'react';
import backgroundImage from "../public/mavis.jpg"

const Banner = () => {

  const [imgOffset, setImgOffset] = useState<number>(450);

  const handleScroll = useCallback((): void => {
    const currentWidth = window.innerWidth;
    if (currentWidth > 768) {
      setImgOffset(window.scrollY + imgOffset);
    }

    console.log(window.scrollY, imgOffset);
  }, [imgOffset]);

  useEffect(() => {
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
