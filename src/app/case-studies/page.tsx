import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Zenith Tech Rebrand",
    tag: "Design & Creative",
    desc: "A full visual identity overhaul for a global tech firm.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    result: "+200% Engagement",
  },
  {
    title: "Luminare E-commerce",
    tag: "IT & Software",
    desc: "High-performance headless e-commerce for luxury brands.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    result: "+300% ROI",
  },
  {
    title: "Pulse Media Strategy",
    tag: "Digital Marketing",
    desc: "Data-driven marketing for high-growth media startups.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    result: "+150% Leads",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Our Portfolio"
        title="We Deliver Results."
        subtitle="Explore our most impactful case studies and see how we've helped brands scale through design and technology."
      />
      <section className="py-24 lg:py-48 bg-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col space-y-6 overflow-hidden border border-white/10 p-6 lg:p-8 hover:bg-surface transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {study.result}
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="label-tag text-white/40">{study.tag}</span>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-white/80 transition-colors">
                    {study.title}
                  </h3>
                  <p className="body-text text-white/50 text-sm leading-relaxed">
                    {study.desc}
                  </p>
                  <Link 
                    href="/case-studies" 
                    className="pt-4 flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-white transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
