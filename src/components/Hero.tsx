"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SpotlightBackground from "@/components/ui/spotlight-background";
import HydrationSafe from "./ui/hydration-safe";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from(".hero-tag", { 
      opacity: 0, 
      y: 30, 
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".hero-h1 span", { 
      opacity: 0, 
      y: 60, 
      stagger: 0.1, 
      duration: 0.8, 
      ease: "power4.out" 
    }, "-=0.3")
    .from(".hero-sub", { 
      opacity: 0, 
      y: 20, 
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    .from(".hero-ctas", { 
      opacity: 0, 
      y: 20, 
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2")
    .from(".scroll-indicator", { 
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    }, "-=0.2");
  }, { scope: containerRef });

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <SpotlightBackground className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
      </SpotlightBackground>

      {/* Hero Content */}
      <div ref={containerRef} className="container mx-auto relative z-20 min-h-screen flex items-center px-6 lg:px-12">
        <HydrationSafe>
          <div className="max-w-4xl">
            <div className="hero-tag inline-block px-3 py-1 mb-8 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="label-tag text-white/60">We Build Digital Solutions</span>
            </div>
            
            <h1 className="hero-h1 mb-8 text-white">
              <span className="block">Engineering</span>
              <span className="block">Growth.</span>
              <span className="block text-white/40 italic">Designing Futures.</span>
            </h1>
            
            <p className="hero-sub body-text mb-10 text-lg lg:text-2xl max-w-2xl text-white/60 leading-relaxed">
              Vexor Solutions helps businesses scale with cutting-edge 
              technology, strategy, and design.
            </p>
            
            <div className="hero-ctas flex flex-wrap gap-6">
              <Link 
                href="#services" 
                className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center group backdrop-blur-sm"
              >
                Explore Our Services
              </Link>
              <Link 
                href="#contact" 
                className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-off-white transition-all duration-300 flex items-center group shadow-2xl shadow-white/10"
              >
                Book a Free Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </HydrationSafe>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-20">
        <div className="scroll-indicator w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase rotate-90 origin-left mt-8">
          Scroll
        </span>
      </div>

      {/* Background Noise/Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20" 
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>
    </section>
  );
}
