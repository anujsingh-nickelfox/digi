"use client";

import { useRef } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import HydrationSafe from "./ui/hydration-safe";

export default function CTABanner() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 lg:py-64 bg-black text-white overflow-hidden border-t border-white/10"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449156059431-787c5bc699b7?q=80&w=2070&auto=format&fit=crop"
          alt="Dark Skyline"
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="cta-content max-w-4xl mx-auto space-y-10 lg:space-y-16">
          <div className="space-y-6">
            <span className="label-tag text-white/40">Start Your Journey</span>
            <h2 className="text-5xl lg:text-8xl font-black font-display tracking-tighter leading-[0.9]">
              Ready to Scale Your <span className="text-white/40 italic">Business?</span>
            </h2>
            <p className="body-text text-white/60 text-lg lg:text-2xl max-w-2xl mx-auto">
              Let's build something remarkable together. Our team is ready 
              to turn your vision into a digital masterpiece.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-off-white transition-all duration-300 flex items-center justify-center group"
            >
              Start a Project
              <HydrationSafe><ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" /></HydrationSafe>
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
            >
              Book a Free Call
              <HydrationSafe><MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" /></HydrationSafe>
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract Background Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>
    </section>
  );
}
