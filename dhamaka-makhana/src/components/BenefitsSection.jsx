import React, { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: "local_fire_department",
    title: "Bold Flavours",
    desc: "We don't do bland. Every snack is packed with authentic, fiery Indian spices.",
  },
  {
    icon: "eco",
    title: "Quality Ingredients",
    desc: "Sourced from trusted farms, our ingredients are always fresh and natural.",
  },
  {
    icon: "workspace_premium",
    title: "Crafted With Pride",
    desc: "From our kitchen to your hands — made with love and decades of expertise.",
  },
  {
    icon: "block",
    title: "No Preservatives",
    desc: "Just pure, natural goodness — nothing artificial, nothing unnecessary.",
  },
  {
    icon: "spa",
    title: "100% Vegan",
    desc: "Plant-based power in every bite. Good for you, good for the planet.",
  },
  {
    icon: "bolt",
    title: "Energy Boost",
    desc: "Clean fuel for your hustle. High protein, low fat superfood.",
  },
];

const BenefitCard = ({ benefit, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 cursor-default
        ${isVisible ? "animate-pop-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.12}s`, animationFillMode: "forwards" }}
    >
      {/* Orange circle icon */}
      <div
        className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#f49434] to-[#e07b1a] flex items-center justify-center shadow-lg"
        style={{
          boxShadow: '0 8px 25px rgba(244, 148, 52, 0.4), inset 0 -3px 8px rgba(0,0,0,0.2), inset 0 3px 8px rgba(255,255,255,0.15)',
        }}
      >
        <span className="material-symbols-outlined text-white text-3xl fill-1">
          {benefit.icon}
        </span>
      </div>
      <h5 className="font-black uppercase text-primary text-lg md:text-xl mb-3 tracking-widest">
        {benefit.title}
      </h5>
      <p className="text-sm md:text-base text-[#8a8070] leading-relaxed max-w-xs mx-auto">
        {benefit.desc}
      </p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-[#1a1209]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Why Dhamaka?
          </h3>
          <p className="text-lg md:text-xl text-[#8a8070] max-w-2xl mx-auto">
            We believe snacking should be an experience, not just a habit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
