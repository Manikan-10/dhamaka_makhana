import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DhamakaLogo from "./components/DhamakaLogo";
import MarqueeTicker from "./components/MarqueeTicker";
import ProductShowcase from "./components/ProductShowcase";
import CartoonStrips from "./components/CartoonStrips";
import LaunchingSoon from "./components/LaunchingSoon";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#1a1209] text-[#d4cdc4] font-display z-0">
      {/* Orange gradient top bar */}
      <div className="w-full h-1.5" style={{ background: 'linear-gradient(90deg, #f49434 0%, #fbbf24 50%, #f49434 100%)' }} />

      {/* Confetti on load */}
      {showConfetti && <Confetti />}



      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== LOGO SECTION ===== */}
      <section className="relative">
        <DhamakaLogo />
      </section>

      {/* ===== MARQUEE (LED STYLE) ===== */}
      <MarqueeTicker />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight animate-slide-up text-white">
            The Ancient Indian
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Superfood</span>
          </h2>
          <p className="mt-4 text-lg text-[#e0d8d0] animate-slide-up" style={{opacity:0, animationFillMode:'forwards', animationDelay:'0.2s'}}>
            Premium Fox Nuts — The Ancient Indian Superfood
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 animate-slide-up delay-200" style={{opacity:0, animationFillMode:'forwards', animationDelay:'0.3s'}}>
            <span className="bg-gradient-to-r from-red-700 to-red-600 text-white font-black px-5 py-2 rounded-full text-sm md:text-base shadow-lg">
              HIGH PROTEIN
            </span>
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-black px-5 py-2 rounded-full text-sm md:text-base shadow-lg">
              LOW FAT
            </span>
            <span className="bg-gradient-to-r from-teal-700 to-teal-600 text-white font-black px-5 py-2 rounded-full text-sm md:text-base shadow-lg">
              GUILT FREE SNACK
            </span>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 animate-slide-up" style={{opacity:0, animationFillMode:'forwards', animationDelay:'0.5s'}}>
            <span className="bg-[#2a2015] text-[#c4a878] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-[#3d2e1a]/50">
              No Preservatives
            </span>
            <span className="bg-[#1a2a15] text-[#8bc47a] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-[#2a3d1a]/50">
              No Added Oil
            </span>
            <span className="bg-[#2a1a2a] text-[#c49ade] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-[#3d1a3d]/50">
              No Artificial Flavors
            </span>
            <span className="bg-[#2a1520] text-[#de9aaf] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-[#3d1a2a]/50">
              No Salt
            </span>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <ProductShowcase />

      {/* ===== CARTOON STRIPS ===== */}
      <CartoonStrips />

      {/* ===== LAUNCHING SOON ===== */}
      <LaunchingSoon />

      {/* ===== ABOUT US ===== */}
      <AboutUs />

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}

export default App;
