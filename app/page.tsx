// import { useEffect } from 'react';

import Banner from "./banner"
import Latest from "./latest"
import Video from "./video"
import Tour from "./tour"
import Footer from "./footer"
import Header from "./header"
import MobileMenu from "./mobileMenu"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header />
      <Banner />
      <Latest />
      <Video />
      <Tour />
      <MobileMenu />
      <Footer />
    </main>
  )
}

export default Home
