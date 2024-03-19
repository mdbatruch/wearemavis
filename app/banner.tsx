"use client";

import React from "react"
import Image from "next/image"
import backgroundImage from "../public/mavis.jpeg"
import { useEffect, useState } from 'react';

const Banner = () => {

  const [imgOffset, setImgOffset] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentWidth = window.innerWidth;

      if (currentWidth > 768) {
        setImgOffset(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div className="bg-cover bg-center w-full h-dvh relative">
      <div
        className="w-screen"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPositionX: "50%",
          backgroundPositionY: `${imgOffset * 0.25}px`,
          width: "100%",
          height: "100%",
          bottom: "0",
          position: "fixed",
          zIndex: "-1",
        }}
      ></div>
    </div>
  )
}

export default Banner
