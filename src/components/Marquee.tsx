"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const marqueeText = [
  "IT & SOFTWARE",
  "DIGITAL MARKETING",
  "BUSINESS CONSULTING",
  "DESIGN & CREATIVE",
  "VEXOR SOLUTIONS",
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, { scope: marqueeRef });

  return (
    <div className="w-full bg-black py-12 lg:py-16 border-y border-white/10 overflow-hidden">
      <div 
        ref={marqueeRef} 
        className="flex whitespace-nowrap items-center space-x-12 lg:space-x-24"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12 lg:space-x-24">
            {marqueeText.map((text, index) => (
              <div key={index} className="flex items-center space-x-12 lg:space-x-24">
                <span className="text-3xl lg:text-5xl font-black text-white/90 font-display uppercase tracking-tight">
                  {text}
                </span>
                <span className="text-2xl lg:text-4xl text-white/30">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
