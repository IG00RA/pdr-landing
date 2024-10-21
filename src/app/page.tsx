import About from '@/components/About/About';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
