import React from "react";

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
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            What We <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Stand For</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="rounded-xl p-5 text-left bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/30 transition-colors">
              <span className="text-primary font-black text-lg">Real Food</span>
              <p className="text-white/80 text-sm mt-1">Ingredients you recognize and trust</p>
            </div>
            <div className="rounded-xl p-5 text-left bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/30 transition-colors">
              <span className="text-primary font-black text-lg">Minimal Processing</span>
              <p className="text-white/80 text-sm mt-1">No unnecessary intervention</p>
            </div>
            <div className="rounded-xl p-5 text-left bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/30 transition-colors">
              <span className="text-primary font-black text-lg">Natural Nutrition</span>
              <p className="text-white/80 text-sm mt-1">No artificial flavours, colours, or preservatives</p>
            </div>
            <div className="rounded-xl p-5 text-left bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/30 transition-colors">
              <span className="text-primary font-black text-lg">Guilt-Free Snacking</span>
              <p className="text-white/80 text-sm mt-1">Good for your body, every day</p>
            </div>
            <div className="rounded-xl p-5 text-left sm:col-span-2 lg:col-span-2 bg-[#231c12]/80 border border-[#3d2e1a]/40 hover:border-primary/30 transition-colors">
              <span className="text-primary font-black text-lg">Tradition Meets Today</span>
              <p className="text-white/80 text-sm mt-1">Ancient wisdom, modern quality standards</p>
            </div>
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
