import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="process">
        <Process />
      </div>
      <Pricing />
      <Testimonials />
      <div id="contact">
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}
