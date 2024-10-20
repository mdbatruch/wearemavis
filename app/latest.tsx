import Image from "next/image"
import React from "react"

const Latest: React.FC = () => {

    return (
        <div
        id="listen"
        className="bg-white p-16 w-full flex justify-evenly flex-col md:flex-row">
            <div className="img-container p-8 flex justify-center">
                <Image src="/HolyShitImSorry.png" width={500} height={500} alt="logo" />
            </div>
            <div className="text-container p-8 relative">
                <h2 className="font-avenir font-black text-black text-6xl uppercase">Holy Shit, I&apos;m Sorry</h2>
                <p className="text-3xl text-black">new single out now</p>
                <a
                className="btn my-1 md:absolute bottom-0 lg:bottom-1/2 w-3/6 text-xl"
                href="https://open.spotify.com/track/7pTb1pVcQo67cHRanPJcOR?si=98834df758cf4f11"
                rel="noopener noreferrer"
                target="_blank">Listen</a>
            </div>
        </div>
    );
}

export default Latest;
