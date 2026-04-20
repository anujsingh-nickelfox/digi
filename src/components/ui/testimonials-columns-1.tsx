"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-black"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-10 rounded-3xl border border-white/10 bg-surface shadow-xl shadow-white/5 max-w-xs w-full group transition-colors duration-500 hover:border-white/20" 
                  key={i}
                >
                  <div className="text-white/70 group-hover:text-white transition-colors duration-500 font-sans leading-relaxed italic">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-white tracking-tight leading-5 font-display">
                        {name}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-white/40 mt-1 font-mono">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
