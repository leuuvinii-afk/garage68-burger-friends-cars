import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Differentials from "@/components/Differentials";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import Delivery from "@/components/Delivery";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Differentials />
      <Numbers />
      <Testimonials />
      <Instagram />
      <Delivery />
      <MapSection />
      <Footer />
    </div>
  );
}
