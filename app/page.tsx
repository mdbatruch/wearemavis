// import { useEffect } from 'react';

import Banner from "./banner"
import Navigation from "./navigation"
import Video from "./video"
import Tour from "./tour"
import Footer from "./footer"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <Banner />
      <Video />
      <Tour />
      <Footer />
    </main>
  )
}

export default Home
