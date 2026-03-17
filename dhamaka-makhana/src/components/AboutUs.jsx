import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#1a1209] relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(244,148,52,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== ABOUT US ===== */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 text-left"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Us
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-justify">
            At Dhamaka Snacks Company, we believe that the best food is the kind that nature intended — simple, honest, nourishing, in short <span className="text-primary font-black">DHAMAKEDAAR!</span>
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 text-justify">
            Long before nutrition labels, ultra-processing, and artificial flavours became the norm, our ancestors snacked on real food. Seeds, nuts, grains, and natural ingredients that fuelled the body, satisfied hunger, and supported long-term wellness. Kamya was born from this very idea—to bring back mindful, natural snacking in a modern world that has forgotten it.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 text-justify">
            We create snacks the way they should be made:<br />
            <span className="text-primary font-bold">nothing artificial, nothing unnecessary, and nothing you need to feel guilty about.</span>
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 text-justify">
            Every Kamya product is rooted in real ingredients, careful sourcing, and minimal processing—so what you eat actually nourishes you.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed text-justify">
            Our snacks are crafted for everyone—for kids who deserve clean food while growing, for adults who want healthier everyday choices, and for families who want snacks they can trust and look forward to.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-6 text-justify">
            This is food that feels familiar, comforting, and right—just like the snacks our grandparents grew up with, reimagined for today.
          </p>
        </div>

        {/* ===== OUR MISSION ===== */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto text-center rounded-3xl border border-[#3a2b18] bg-[#120c07]/80 px-6 md:px-10 py-10 md:py-12 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Our <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Mission</span>
          </h3>
          <p className="text-base md:text-lg text-white/85 leading-relaxed text-center max-w-4xl mx-auto">
            To create India's healthiest snacking genre by bringing back real food, natural ingredients, and traditional wisdom—without shortcuts, chemicals, or compromise.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-4 text-center max-w-4xl mx-auto">
            We aim to make clean, wholesome snacking accessible, enjoyable, and sustainable, so choosing health never feels like a sacrifice.
          </p>
          </div>
        </div>

        {/* ===== OUR VISION ===== */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto text-center rounded-3xl border border-[#3a2b18] bg-[#120c07]/80 px-6 md:px-10 py-10 md:py-12 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Our <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Vision</span>
          </h3>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-4 text-center max-w-4xl mx-auto">
            To build a future where snacking is no longer a guilty habit, but a nourishing one—
          </p>
          <p className="text-base md:text-lg text-white leading-relaxed text-center max-w-3xl mx-auto">
            where children grow up loving real food,<br />
            where adults trust what they eat,<br />
            and where wellness begins with everyday choices.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-4 text-center max-w-4xl mx-auto">
            We envision Kamya becoming a household name that people associate with purity, honesty, and real wellness, just the way food was always meant to be.
          </p>
          </div>
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
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#3a2b18] shadow-2xl shadow-black/40">
            <img
              src="/images/What we stand for.png"
              alt="What We Stand For"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
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
