import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 Digital Marketing Trends 2025",
    tag: "Marketing",
    date: "April 10, 2026",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Building Scalable Web Apps with Next.js 15",
    tag: "Development",
    date: "April 15, 2026",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "The Art of Cinematic UI Design",
    tag: "Design",
    date: "April 20, 2026",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Insights"
        title="Our Digital Thinking."
        subtitle="Explore our latest thoughts, insights, and expert perspectives on digital marketing, technology, and design."
      />
      <section className="py-24 lg:py-48 bg-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link 
                key={i} 
                href="/blog" 
                className="group relative flex flex-col space-y-6 overflow-hidden border border-white/10 p-6 lg:p-8 hover:bg-surface transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="label-tag text-white/40">{post.tag}</span>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs font-mono text-white/40">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
