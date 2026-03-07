import React from "react";

const LaunchingSoon = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f49434 0%, #e07b1a 40%, #d4680f 100%)' }}
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-bounce-in">
          <div className="inline-block bg-[#1a1209] px-10 py-6 rounded-2xl animate-pulse-glow">
            <span className="text-3xl md:text-5xl lg:text-6xl tracking-wide font-samarkan"
              style={{
                background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              shubha prasaadam makhana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchingSoon;
