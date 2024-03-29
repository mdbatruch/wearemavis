"use client"

import Banner from "./banner"
import Footer from "./footer"
import Header from "./header"
import Latest from "./latest"
import MobileMenu from "./mobileMenu"
import Tour from "./tour"
import Video from "./video"

const Home: React.FC = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header />
      <Banner />
      <Latest />
      <Video />
      <Tour/>
      <MobileMenu />
      <Footer />
    </main>
  )
}

export default Home
