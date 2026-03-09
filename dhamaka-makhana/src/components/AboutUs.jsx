import React, { useEffect, useRef, useState } from "react";

const standForItems = [
  {
    icon: "restaurant",
    title: "Real Food",
    desc: "Ingredients you recognize and trust",
    gradient: "from-orange-500 to-amber-400",
    delay: 0,
  },
  {
    icon: "settings_suggest",
    title: "Minimal Processing",
    desc: "No unnecessary intervention",
    gradient: "from-amber-500 to-yellow-400",
    delay: 0.1,
  },
  {
    icon: "eco",
    title: "Natural Nutrition",
    desc: "No artificial flavours, colours, or preservatives",
    gradient: "from-emerald-500 to-teal-400",
    delay: 0.2,
  },
  {
    icon: "favorite",
    title: "Guilt-Free Snacking",
    desc: "Good for your body, every day",
    gradient: "from-rose-500 to-pink-400",
    delay: 0.3,
  },
  {
    icon: "history_edu",
    title: "Tradition Meets Today",
    desc: "Ancient wisdom, modern quality standards",
    gradient: "from-purple-500 to-indigo-400",
    delay: 0.4,
  },
];

const StandForCard = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-2xl p-6 text-left overflow-hidden transition-all duration-500 cursor-pointer
        bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10`}
      style={{
        transitionDelay: `${item.delay}s`,
      }}
    >
      {/* Animated background glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(244,148,52,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-24 h-24 -translate-y-12 translate-x-12 rotate-45 transition-all duration-500 ${
            isHovered ? 'translate-y-[-1.5rem] translate-x-[1.5rem]' : ''
          }`}
          style={{
            background: `linear-gradient(135deg, rgba(244,148,52,0.3), rgba(251,191,36,0.15))`,
          }}
        />
      </div>

      {/* Icon with animated ring */}
      <div className="relative mb-4 w-14 h-14 flex items-center justify-center">
        {/* Pulsing ring */}
        <div
          className={`absolute inset-0 rounded-xl border-2 border-primary/30 transition-all duration-500 ${
            isHovered ? 'scale-110 border-primary/60' : ''
          }`}
          style={{
            animation: isHovered ? 'pulse-glow 2s ease-in-out infinite' : 'none',
          }}
        />
        {/* Icon background */}
        <div className={`relative w-full h-full rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-500 ${
          isHovered ? 'scale-110 rotate-3' : ''
        }`}>
          <span className="material-symbols-outlined text-white text-2xl fill-1"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
          >
            {item.icon}
          </span>
        </div>
      </div>

      {/* Title with underline animation */}
      <div className="relative mb-2">
        <span className="text-primary font-black text-lg group-hover:text-amber-400 transition-colors duration-300">
          {item.title}
        </span>
        <div className={`h-0.5 bg-gradient-to-r from-primary to-amber-400 mt-1 transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        {item.desc}
      </p>

      {/* Bottom shine line */}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-700 ${
        isHovered ? 'w-full' : 'w-0'
      }`} />
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#1a1209] relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(244,148,52,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* ===== ABOUT US ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Us
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
            At Dhamaka Snacks Company, we believe that the best food is the kind that nature intended — simple, honest, nourishing, in short <span className="text-primary font-black">DHAMAKEDAAR!</span>
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6">
            Long before nutrition labels, ultra-processing, and artificial flavours became the norm, our ancestors snacked on real food. Seeds, nuts, grains, and natural ingredients that fuelled the body, satisfied hunger, and supported long-term wellness. Kamya was born from this very idea—to bring back mindful, natural snacking in a modern world that has forgotten it.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6">
            We create snacks the way they should be made:<br />
            <span className="text-primary font-bold">nothing artificial, nothing unnecessary, and nothing you need to feel guilty about.</span>
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6">
            Every Kamya product is rooted in real ingredients, careful sourcing, and minimal processing—so what you eat actually nourishes you.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed">
            Our snacks are crafted for everyone—<br />
            <span className="text-white">for kids who deserve clean food while growing,</span><br />
            <span className="text-white">for adults who want healthier everyday choices,</span><br />
            <span className="text-white">and for families who want snacks they can trust and look forward to.</span>
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-6">
            This is food that feels familiar, comforting, and right—just like the snacks our grandparents grew up with, reimagined for today.
          </p>
        </div>

        {/* ===== OUR MISSION ===== */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Our <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Mission</span>
          </h3>
          <p className="text-base md:text-lg text-white/85 leading-relaxed">
            To create India's healthiest snacking genre by bringing back real food, natural ingredients, and traditional wisdom—without shortcuts, chemicals, or compromise.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-4">
            We aim to make clean, wholesome snacking accessible, enjoyable, and sustainable, so choosing health never feels like a sacrifice.
          </p>
        </div>

        {/* ===== OUR VISION ===== */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Our <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Vision</span>
          </h3>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-4">
            To build a future where snacking is no longer a guilty habit, but a nourishing one—
          </p>
          <p className="text-base md:text-lg text-white leading-relaxed">
            where children grow up loving real food,<br />
            where adults trust what they eat,<br />
            and where wellness begins with everyday choices.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-4">
            We envision Kamya becoming a household name that people associate with purity, honesty, and real wellness, just the way food was always meant to be.
          </p>
        </div>

        {/* ===== WHAT WE STAND FOR ===== */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">
            What We <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Stand For</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {standForItems.map((item, index) => (
              <StandForCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* ===== CLOSING STATEMENT ===== */}
        <div className="text-center pt-8 border-t border-[#2a2015]">
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-4">
            At Dhamaka Snacks Company, we don't believe in trends. We believe in <span className="text-primary font-bold">timeless food.</span>
          </p>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Real Food. Real Wellness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
