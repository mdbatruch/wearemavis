// import { useEffect } from 'react';

import Banner from "./banner"
import Latest from "./latest"
import Video from "./video"
import Tour from "./tour"
import Footer from "./footer"
import Header from "./header"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Banner />
      <Latest />
      <Video />
      <Tour />
      <Footer />
    </main>
  )
}

export default Home
