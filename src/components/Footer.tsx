import Link from "next/link";
import { Linkedin, Instagram, Twitter, Facebook, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import HydrationSafe from "./ui/hydration-safe";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Pricing Plans", href: "#pricing" },
      { name: "Latest Blog", href: "/blog" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "IT & Software", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Business Strategy", href: "#services" },
      { name: "Design & Creative", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 lg:mb-32">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-3xl font-black tracking-tighter">VEXOR</span>
              <span className="text-3xl font-light tracking-tight text-white/60">Solutions</span>
            </Link>
            <p className="body-text text-white/50 text-base lg:text-lg max-w-xs leading-relaxed">
              Engineering growth and designing futures for the world's most 
              ambitious brands through cutting-edge digital solutions.
            </p>
            <div className="flex items-center space-x-4">
              <HydrationSafe>
                {socialLinks.map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </HydrationSafe>
            </div>
          </div>

          {/* Columns 2 & 3: Links */}
          {footerLinks.map((column, i) => (
            <div key={i} className="space-y-8 lg:pt-4">
              <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white/90">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-lg font-bold text-white/60 hover:text-white transition-colors flex items-center group"
                    >
                      {link.name}
                      <HydrationSafe>
                        <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </HydrationSafe>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact */}
          <div className="space-y-8 lg:pt-4">
            <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white/90">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              <li>
                <Link 
                  href="mailto:hello@vexorsolutions.com" 
                  className="flex items-center space-x-4 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors">
                    <HydrationSafe><Mail size={18} /></HydrationSafe>
                  </div>
                  <span className="text-lg font-medium">hello@vexorsolutions.com</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+919876543210" 
                  className="flex items-center space-x-4 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors">
                    <HydrationSafe><Phone size={18} /></HydrationSafe>
                  </div>
                  <span className="text-lg font-medium">+91 98765 43210</span>
                </Link>
              </li>
              <li className="flex items-start space-x-4 text-white/60">
                <div className="w-10 h-10 mt-1 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <HydrationSafe><MapPin size={18} /></HydrationSafe>
                </div>
                <span className="text-lg font-medium leading-relaxed">
                  Cyber Hub, DLF Phase 2,<br />
                  Gurugram, HR 122002
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-sm font-mono uppercase tracking-widest text-white/30">
          <p>© 2026 Vexor Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
