import React from 'react';
import backgroundImage from '../public/mavis.jpeg';

const Banner = () => {

    return (
        <div className="bg-cover bg-center min-h-screen w-full"
            style={{ backgroundImage: `url(${backgroundImage.src})`,
                    width: '100%',
                    height: '100%', 
                }}
            >
        </div>
    );
  };

export default Banner;
