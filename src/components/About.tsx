"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const stats = [
  { label: "Clients", value: "200+" },
  { label: "Years", value: "5+" },
  { label: "Projects", value: "50+" },
  { label: "Satisfaction", value: "98%" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 90%",
      },
      scale: 0.5,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-48 bg-black text-white overflow-hidden border-y border-white/10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column: Image */}
          <div ref={imageRef} className="relative aspect-[4/5] lg:aspect-square group overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Team"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Right Column: Content */}
          <div ref={contentRef} className="about-content space-y-10">
            <div className="space-y-4">
              <span className="label-tag text-white/40">About Vexor</span>
              <h2 className="section-h2">
                We Are the Architects of <span className="text-white/40 italic">Digital Success</span>
              </h2>
            </div>

            <p className="body-text text-white/60 text-lg lg:text-xl max-w-xl">
              Our mission is to empower businesses with transformative digital solutions. 
              We blend strategic thinking with innovative design and engineering to build 
              products that people love and businesses thrive on.
            </p>

            <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item flex flex-col space-y-1">
                  <span className="text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-off-white transition-colors group"
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
