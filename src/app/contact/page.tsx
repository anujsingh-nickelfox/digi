import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Contact Us"
        title="Let's Build Something Great."
        subtitle="Ready to start your next project? Reach out to our team of experts and let's discuss how we can help you scale your digital presence."
      />
      <section className="py-24 lg:py-48 bg-white text-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="label-tag text-black/40">Our Office</span>
                <h2 className="section-h2 text-black">Get in <span className="text-black/40 italic">Touch</span></h2>
                <p className="body-text text-black/70 text-lg lg:text-xl max-w-md">
                  We're always open to new ideas and collaborations. 
                  Reach out and let's start a conversation.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@vexorsolutions.com" },
                  { icon: Phone, label: "Phone", value: "+91 124 123 4567" },
                  { icon: MapPin, label: "Address", value: "Cyber City, Gurugram, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono uppercase tracking-widest text-black/40">{item.label}</span>
                      <span className="text-xl font-bold font-display tracking-tight">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-8 lg:p-12 border border-black/5 rounded-3xl space-y-8">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-black/40">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-black placeholder:text-black/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-black placeholder:text-black/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-black/40">Service Needed</label>
                  <select className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-black/40">
                    <option>Select a service</option>
                    <option>IT & Software</option>
                    <option>Digital Marketing</option>
                    <option>Business Strategy</option>
                    <option>Design & Creative</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-black/40">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-black placeholder:text-black/20 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-6 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
