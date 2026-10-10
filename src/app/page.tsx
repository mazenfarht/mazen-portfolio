import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CaseStudy from "./components/CaseStudy";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhySection from "./components/WhySection";
import ProcessSection from "./components/ProcessSection";
import About from "./components/About";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import RevealObserver from "./components/RevealObserver";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <CaseStudy />
      <Services />
      <Projects />
      <WhySection />
      <ProcessSection />
      <About />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
    </>
  );
}
