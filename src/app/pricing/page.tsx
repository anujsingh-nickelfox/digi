import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";

export default function PricingPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Investment"
        title="Simple, Transparent Pricing."
        subtitle="We offer tailored pricing plans that align with your business goals and current needs, ensuring you get the best value and results."
      />
      <Pricing />
      <section className="py-24 lg:py-48 bg-white text-black overflow-hidden border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-8">
              <span className="label-tag text-black/40">Comparison</span>
              <h2 className="section-h2 text-black">Find Your <span className="text-black/40 italic">Ideal Plan</span></h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-black/10">
                <thead>
                  <tr className="bg-black/5">
                    <th className="p-6 text-sm font-mono uppercase tracking-widest text-black/40">Feature</th>
                    <th className="p-6 text-sm font-mono uppercase tracking-widest text-black/40">Starter</th>
                    <th className="p-6 text-sm font-mono uppercase tracking-widest text-black/40">Growth</th>
                    <th className="p-6 text-sm font-mono uppercase tracking-widest text-black/40">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {[
                    ["Custom Design", "Basic", "Advanced", "Full Custom"],
                    ["SEO Optimization", "Basic", "Advanced", "Full Suite"],
                    ["Priority Support", "None", "Email & Chat", "24/7 Dedicated"],
                    ["Development Time", "4-6 Weeks", "8-12 Weeks", "Bespoke Timeline"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-black/5 transition-colors">
                      <td className="p-6 font-bold text-sm uppercase tracking-tight">{row[0]}</td>
                      <td className="p-6 body-text text-black/60">{row[1]}</td>
                      <td className="p-6 body-text text-black/60">{row[2]}</td>
                      <td className="p-6 body-text text-black/60">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
