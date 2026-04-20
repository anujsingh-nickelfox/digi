"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import HydrationSafe from "./ui/hydration-safe";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: navRef });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.from(".mobile-link", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "unset";
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 lg:px-12",
          isScrolled ? "glass-nav py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="text-2xl font-black tracking-tighter text-white">VEXOR</span>
            <span className="text-2xl font-light tracking-tight text-white/80">Solutions</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-black text-white hover:text-white/70 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <HydrationSafe>
              <Link
                href="#contact"
                className="hidden sm:flex items-center px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-off-white transition-colors group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </HydrationSafe>

            <button
              suppressHydrationWarning
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              <HydrationSafe>
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </HydrationSafe>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black z-[60] lg:hidden flex flex-col items-center justify-center space-y-8"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <button
          suppressHydrationWarning
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <HydrationSafe><X size={32} /></HydrationSafe>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="mobile-link text-4xl font-bold text-white hover:text-white/70 transition-colors"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mobile-link mt-8 px-10 py-4 bg-white text-black text-lg font-bold rounded-full flex items-center"
        >
          Get Started
          <HydrationSafe><ArrowRight className="ml-2 w-5 h-5" /></HydrationSafe>
        </Link>
      </div>
    </>
  );
}
