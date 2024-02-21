import React from 'react';

const Video = () => {
    return (
        <section className="bg-black p-16 w-screen flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nqgSsWjSHFg?si=Z_160GTIFm74P4WZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </section>
    );
};

export default Video;
