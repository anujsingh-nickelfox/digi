import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle: string;
  tag: string;
  className?: string;
}

export default function PageHero({ title, subtitle, tag, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-48 pb-24 lg:pt-64 lg:pb-32 bg-black overflow-hidden", className)}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          <span className="label-tag text-white/40">{tag}</span>
          <h1 className="text-6xl lg:text-9xl font-black font-display tracking-tighter leading-[0.9] text-white">
            {title}
          </h1>
          <p className="body-text text-white/60 text-lg lg:text-2xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Background Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>
    </section>
  );
}
