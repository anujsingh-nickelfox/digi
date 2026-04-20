import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Our Story"
        title="We Are the Future of Digital."
        subtitle="Vexor Solutions is a team of visionary designers, expert engineers, and strategic thinkers dedicated to building the next generation of digital products."
      />
      <About />
      <section className="py-24 lg:py-48 bg-surface border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-8">
              <span className="label-tag text-white/40">Our Values</span>
              <h2 className="section-h2 text-white">The Pillars of <span className="text-white/40 italic">Excellence</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
                { title: "Precision", desc: "Meticulous attention to every single pixel." },
                { title: "Integrity", desc: "Building trust through radical transparency." },
                { title: "Impact", desc: "Creating solutions that drive real growth." },
              ].map((value, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white">{value.title}</h3>
                  <p className="body-text text-white/50">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
