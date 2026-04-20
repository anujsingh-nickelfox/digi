"use client";

import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const myPricingPlans: PricingCardProps[] = [
  {
    planName: "Starter",
    price: "1,99,999",
    description: "Perfect for startups and small brands.",
    features: [
      "Digital Presence Audit",
      "Single-Page Website",
      "Basic SEO Strategy",
      "Social Media Setup",
      "3 Months Support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    planName: "Growth",
    price: "4,99,999",
    description: "Ideal for scaling businesses and medium brands.",
    features: [
      "Custom Multi-Page Site",
      "Full Digital Strategy",
      "Advanced SEO & PPC",
      "UI/UX Design Kit",
      "6 Months Priority Support",
    ],
    buttonText: "Choose Growth",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Enterprise",
    price: "Custom",
    description: "For global brands requiring custom solutions.",
    features: [
      "Bespoke Software Dev",
      "Dedicated Project Team",
      "End-to-End Consulting",
      "Brand Identity System",
      "Annual Growth Support",
    ],
    buttonText: "Contact Us",
    buttonVariant: "primary",
  },
];

export default function Pricing() {
  return (
    <div id="pricing">
      <ModernPricingPage
        title={
          <>
            Find the <span className="text-white">Perfect Plan</span> for Your Business
          </>
        }
        subtitle="Investment in Your Digital Future. Start for free, then grow with us. Flexible plans for projects of all sizes."
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
    </div>
  );
}
