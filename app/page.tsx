import Banner from './banner';
import Navigation from './navigation';
import Video from './video';
import Tour from './tour';
import Footer from './footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navigation />
        <Banner />
        <Video />
        <Tour />
        <Footer />
    </main>
  );
}
