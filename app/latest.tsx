import React from "react"
import Image from "next/image"

const Latest = () => {

    return (
        <div
        className="bg-white p-16 w-full flex justify-evenly">
            <div className="img-container p-8">
                <Image src="/lonely_show.jpeg" width={500} height={500} alt="logo" />
            </div>
            <div className="text-container p-8 relative">
                <h2 className="font-avenir font-black text-6xl uppercase">Lonely Show</h2>
                <p className="text-3xl">new single out now</p>
                <a
                className="btn my-1 absolute bottom-1/2 w-3/6 text-xl"
                href="https://open.spotify.com/track/4PGZZuMJOYWfg0juq84VbC?si=5baf63bce8cb4b0d"
                rel="noopener noreferrer">Listen</a>
            </div>
        </div>
    );
}

export default Latest;
