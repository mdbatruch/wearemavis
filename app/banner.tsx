import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/mavis.jpeg';
import Social from './social';

const Banner = () => {

    return (
        <div className="bg-cover bg-center min-h-screen w-full h-dvh relative">
            <div className="top-0 fixed">
                <Image
                    src="/MAVIS.png"
                    width={500}
                    height={500}
                    alt="logo"
                />
            </div>
            <div className="bg-cover bg-center min-h-screen w-full"
                style={{ backgroundImage: `url(${backgroundImage.src})`,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        zIndex: '-1',
                    }}
                >
            </div>
            <Social align="left-8"/>
        </div>
    );
  };

export default Banner;
