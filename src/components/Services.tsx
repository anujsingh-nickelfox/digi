"use client";

import { useRef } from "react";
import { Code, TrendingUp, Briefcase, PenTool, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import HydrationSafe from "./ui/hydration-safe";

const services = [
  {
    title: "IT & Software Services",
    icon: Code,
    desc: "Web apps, mobile apps, cloud solutions, and software architecture designed to scale.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing Services",
    icon: TrendingUp,
    desc: "SEO, paid ads, social media, and content strategy driven by data and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Business & Consulting",
    icon: Briefcase,
    desc: "Strategy, growth planning, process optimization, and market analysis for modern brands.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Design & Creative Services",
    icon: PenTool,
    desc: "Brand identity, UI/UX, motion design, and print & digital assets that captivate.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 75%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 lg:py-48 bg-black text-white overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32 space-y-6">
          <span className="label-tag text-white/40">Our Expertise</span>
          <h2 className="section-h2">
            Tailored Solutions for <span className="text-white/40 italic">Global Impact</span>
          </h2>
          <p className="body-text text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">
            We deliver high-performance services across multiple disciplines to help 
            your business navigate and lead in the digital era.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group cursor-pointer"
            >
              {/* Background Image at 10% opacity */}
              <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <HydrationSafe><service.icon size={32} /></HydrationSafe>
                </div>

                <div className="space-y-3">
                  <h3 className="card-title text-white flex items-center justify-between">
                    {service.title}
                    <HydrationSafe>
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </HydrationSafe>
                  </h3>
                  <p className="body-text text-white/50 text-base leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
