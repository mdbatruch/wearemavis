import Image from "next/image"
import React from "react"

const Latest: React.FC = () => {

    return (
        <div
        id="listen"
        className="bg-white p-16 w-full">
            <div className="flex justify-evenly flex-col xl:flex-row">
                <div className="img-container p-8 flex justify-center">
                    <Image src="/HolyShitImSorry.png" width={500} height={500} alt="logo" />
                </div>
                <div className="text-container p-8 relative xl:w-2/4">
                    <h2 className="font-avenir font-black text-black text-6xl uppercase">Holy Shit, I&apos;m Sorry</h2>
                    <p className="text-3xl text-black my-5">new single out now</p>
                    <a
                    className="btn my-1 xl:absolute bottom-0 xl:bottom-1/3 w-3/6 text-xl"
                    href="https://open.spotify.com/track/7pTb1pVcQo67cHRanPJcOR?si=98834df758cf4f11"
                    rel="noopener noreferrer"
                    target="_blank">Listen</a>
                </div>
            </div>
            <div className="bio-container">
                <p className="text-1xl text-black">
                    <br/>
                    Mavis does not care what you think of them. That much is clear with their new single, “Holy Shit, I&#39;m Sorry.” This marks their third collaboration with esteemed Canadian producer Steve Rizun (NOFX, The Flatliners), and their fourth wild swing for the bleachers. From its austere, new wave beginning, to its anthemic ending, Mavis is going on a journey and they&#39;re inviting you to get in the car.<br/><br/>
                    “Holy Shit, I&#39;m Sorry” shows Mavis&#39; ability to effortlessly integrate multiple punk styles on full display, and their capacity to layer hook over hook over hook. But more than the music, “Holy Shit, I&#39;m Sorry” displays a mastery of what they do best: lyrics that are simultaneously courageous and vulnerable. “Holy Shit, I&#39;m Sorry” is ostensibly a song about lead singer Patrick Gilson&#39;s early acting career, but more so, it&#39;s a song about reckoning with the mirror&#39;s reflection and looking that person in the mirror in the eyes. It&#39;s their bravest, most transparently emotional work so far.<br/><br/>
                    It&#39;s now clear that Mavis has a lot to say, and they hate repeating themselves. Gilson rattles on line after line of dense poetry over music that shifts from stanza to stanza as if it was quicksand. They bombastically push their music in every direction they can think of, and Rizun is proving to be their perfect curator.<br/><br/>
                    It&#39;s also the best definition of what this band is to date: an uncompromising, chaotic, and fearless band. Mavis doesn&#39;t care about what you think. They care about what they do. They&#39;re a working-class band with a Michelin Star musical complexity. They are the storytellers of the bad nights and the fights with your girlfriend and the “Better Luck Next Time” lottery players. They&#39;re the friends of the permanently unlucky and the soundtrack to your fifth and sixth chance.
                </p>
            </div>
        </div>
    );
}

export default Latest;
