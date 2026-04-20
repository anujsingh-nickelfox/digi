"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import React from "react";

const testimonials = [
  {
    text: "Vexor Solutions transformed our digital presence. Their attention to detail and engineering prowess is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    name: "Alex Rivera",
    role: "CEO, TechFlow",
  },
  {
    text: "The design philosophy at Vexor is simply breath-taking. They don't just build websites; they create experiences that resonate.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    name: "Sarah Chen",
    role: "Founder, Zenith",
  },
  {
    text: "Our ROI increased by 300% after Vexor took over our digital strategy. Truly a game-changer for our business growth.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    name: "Marcus Thorne",
    role: "Director, Pulse Media",
  },
  {
    text: "Strategic, professional, and results-driven. Vexor is our go-to partner for all things digital and creative design.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop",
    name: "Elena Rossi",
    role: "CMO, Luminare",
  },
  {
    text: "The implementation was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    name: "David Kim",
    role: "IT Manager, Nexus",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our global operations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    name: "Sophia Lopez",
    role: "Sales Director, Global Co",
  },
  {
    text: "Our business functions improved significantly with their user-friendly design and positive customer feedback loop.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop",
    name: "Emily Watson",
    role: "Marketing Director",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance for our satisfaction.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    name: "Michael Chen",
    role: "Customer Success",
  },
  {
    text: "Using Vexor, our online conversions significantly improved, boosting business performance across all metrics.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24 lg:py-48 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center">
            <div className="border border-white/10 py-1.5 px-4 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
              Testimonials
            </div>
          </div>

          <h2 className="section-h2 text-white mt-8 leading-[1.1]">
            What our <span className="text-white/40 italic">Global Partners</span> say
          </h2>
          <p className="body-text text-white/60 text-lg lg:text-xl mt-6">
            See how Vexor Solutions is helping forward-thinking brands 
            redefine their digital excellence.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[840px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
