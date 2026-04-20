"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";

export default function LayoutPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2"
            >
              <span className="text-4xl lg:text-6xl font-black tracking-tighter text-white">VEXOR</span>
              <span className="text-4xl lg:text-6xl font-light tracking-tight text-white/40">Solutions</span>
            </motion.div>
          </div>

          <div className="mt-12 w-64 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-2xl lg:text-4xl font-bold font-display tracking-[0.2em] text-white"
          >
            {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
