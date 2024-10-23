import About from '@/components/About/About';
import Advantages from '@/components/Advantages/Advantages';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Map from '@/components/Map/Map';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Advantages />
        <Map />
      </main>
      <Footer />
    </>
  );
}
