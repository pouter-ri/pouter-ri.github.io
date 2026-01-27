import { useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Sections/Hero";
import CarrierApp from "../components/Sections/CarrierApp";
import ShipperApp from "../components/Sections/ShipperApp";
import Features from "../components/Sections/Features";
import Testimonials from "../components/Sections/Testimonials";
import CTA from "../components/Sections/CTA";
import Pricing from "../components/Sections/Pricing";
import BackToTop from "../components/UI/BackToTop";
import FAQ from "../components/Sections/FAQ";

const Home = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <CarrierApp />
        <ShipperApp />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
