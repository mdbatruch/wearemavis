import Image from "next/image"
import React from "react"

const Latest: React.FC = () => {

    return (
        <div
        id="listen"
        className="bg-white p-16 w-full">
            <div className="flex justify-evenly flex-col xl:flex-row">
                <div className="img-container p-8 flex justify-center">
                    <Image src="/Lot6.png" width={500} height={500} alt="logo" />
                </div>
                <div className="text-container p-8 relative xl:w-2/4">
                    <h2 className="font-avenir font-black text-black text-6xl uppercase">Lot 6</h2>
                    <p className="text-3xl text-black my-5">New single, out now!</p>
                    <a
                    className="btn my-1 xl:absolute bottom-0 xl:bottom-1/3 w-3/6 text-xl"
                    href="https://open.spotify.com/track/1nFBLa9z3aNQReOtonsTFY"
                    rel="noopener noreferrer"
                    target="_blank">Listen</a>
                </div>
            </div>
            <div className="bio-container">
                <p className="text-1xl text-black">
                    <br/>
                    Toronto, Ontario’s Mavis probably started sometime in 2018, though no one’s quite sure. Why it’s called “Mavis,” that’s also a mystery. No one really remembers. There’s nothing pretentious about them. They’re five guys in their thirties, all partnered or married, steady jobs, dogs, clean laundry. They are desperately uncool and they don’t seem to care. 
                    <br/><br/>
                    And yet, one senses turmoil. It is not the turmoil of younger men. There’s something introspective to their midwestern punk alternative bombast—like they’ve put the ex-lovers behind them but also haven’t entirely forgotten.
                    <br/><br/>
                    Now, they seem to be unusually active. They’re releasing a string of new recordings with an increasingly literary bent. They’re up to something. Mavis has never cared what other people think, but it looks like they have something they want to tell us.
                </p>
            </div>
        </div>
    );
}

export default Latest;
