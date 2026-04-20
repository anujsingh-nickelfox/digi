import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHero 
        tag="Our Expertise"
        title="Solutions for a Digital Era."
        subtitle="We offer a comprehensive suite of digital services designed to help brands navigate the complexities of modern business and technology."
      />
      <Services />
      <section className="py-24 lg:py-48 bg-white text-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-24">
            {[
              { 
                title: "IT & Software Development", 
                desc: "We build high-performance web applications, mobile apps, and scalable cloud solutions using the latest tech stacks.",
                features: ["Next.js & React Expert", "Mobile (React Native)", "Cloud Architecture (AWS/Azure)", "SaaS Product Development"]
              },
              { 
                title: "Digital Strategy & Marketing", 
                desc: "Data-driven marketing strategies that amplify your brand's voice and drive measurable business results.",
                features: ["Advanced SEO Systems", "Performance Marketing", "Social Media Strategy", "Conversion Rate Optimization"]
              },
              { 
                title: "UI/UX & Creative Design", 
                desc: "Cinematic, user-centric designs that tell your brand story and provide seamless digital experiences.",
                features: ["Premium Web Design", "Mobile App UI/UX", "Brand Identity Systems", "Motion & 3D Graphics"]
              }
            ].map((service, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-8">
                  <h3 className="section-h2 text-black">{service.title}</h3>
                  <p className="body-text text-black/70 text-lg lg:text-xl">{service.desc}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-4 border-b border-black/5 pb-4">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="font-bold text-sm uppercase tracking-wider">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
