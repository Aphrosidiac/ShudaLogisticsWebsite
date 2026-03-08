import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Routes from "@/components/Routes";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Routes />
      <WhyUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
