import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutDoctor from "@/components/sections/AboutDoctor";
import Testimonials from "@/components/sections/Testimonials";
import Appointment from "@/components/sections/Appointment";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <AboutDoctor />
      <Testimonials />
      <Appointment />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
