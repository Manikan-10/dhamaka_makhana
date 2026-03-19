import React from "react";

const DhamakaLogo = () => {
  return (
    <div
      className="w-full animate-bounce-in relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(244,148,52,0.12) 0%, rgba(30,23,16,0.6) 50%, #1a1209 80%)',
      }}
    >
      {/* Full-width warm glow behind */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[200%] animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(244,148,52,0.35) 0%, rgba(244,148,52,0.08) 40%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Full-width banner container */}
      <div className="w-full flex items-center justify-center py-4 sm:py-6 md:py-12 px-3 sm:px-5 md:px-6">
        <img
          src="/images/Updated_logo-removebg-preview-removebg-preview.png"
          alt="Dhamaka Snacks Company Logo"
          className="w-full max-w-[560px] sm:max-w-3xl md:max-w-4xl h-auto object-contain relative z-10"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(244, 148, 52, 0.7)) drop-shadow(0 0 80px rgba(244, 148, 52, 0.3)) drop-shadow(0 8px 25px rgba(0, 0, 0, 0.6))',
          }}
        />
      </div>

      {/* Bottom subtle border glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(244,148,52,0.4) 50%, transparent 100%)' }}
      />
    </div>
  );
};

export default DhamakaLogo;
