"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We dive deep into your brand, goals, and audience to uncover key insights and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "A bespoke roadmap is crafted, aligning technology and design with your business objectives.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Our expert team builds, designs, and refines until your vision is flawlessly brought to life.",
  },
  {
    number: "04",
    title: "Delivery",
    desc: "We launch, monitor, and scale your digital assets to ensure long-term success and growth.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".process-step", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1.5,
      },
      width: "100%",
      ease: "none",
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-24 lg:py-48 bg-black text-white overflow-hidden border-y border-white/10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <span className="label-tag text-white/40">How We Work</span>
          <h2 className="section-h2 text-white">
            A Seamless Path to <span className="text-white/40 italic">Digital Excellence</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Horizontal Connection Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-white/10">
            <div 
              ref={lineRef} 
              className="absolute top-0 left-0 w-0 h-full bg-white"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="process-step relative flex flex-col space-y-6 lg:space-y-12"
              >
                {/* Step Circle/Icon */}
                <div className="relative z-10 w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center bg-black border border-white/20 rounded-full group-hover:border-white transition-colors duration-500 shadow-2xl shadow-white/5">
                  <span className="text-4xl lg:text-5xl font-black font-display text-white opacity-90">
                    {step.number}
                  </span>
                  <div className="absolute inset-2 border border-dashed border-white/20 rounded-full"></div>
                </div>

                <div className="space-y-4 max-w-[280px]">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="body-text text-white/60 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
