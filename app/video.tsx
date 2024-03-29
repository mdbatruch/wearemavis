import React from "react"

const Video: React.FC = () => {
  return (
    <section id="video" className="bg-black py-24 px-16 w-full flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LMeKW6u3CKQ?si=xSbStuQFOi9vc-XI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  )
}

export default Video
