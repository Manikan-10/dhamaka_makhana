import React, { useEffect, useRef, useState } from "react";

const LaunchingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

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
          <p className="text-lg md:text-2xl font-black uppercase tracking-wide text-[#1a1209] mb-5">
            Our Upcoming Product -
          </p>
          <div className="inline-block bg-[#1a1209] px-10 py-6 rounded-2xl animate-pulse-glow">
            <span className="text-3xl md:text-5xl lg:text-6xl tracking-wide font-samarkan"
              style={{
                background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shubh Prasadam Makhana
            </span>
          </div>
        </div>

        {/* Product 2 Image */}
        <div
          ref={imgRef}
          className={`mt-12 max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
          >
            <img
              src="/images/product2.png"
              alt="Shubh Prasadam Makhana - Premium Fox Nuts"
              className="w-full h-auto object-contain bg-[#fff6e8]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchingSoon;
