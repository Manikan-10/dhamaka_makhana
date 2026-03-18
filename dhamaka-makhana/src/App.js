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
            Superfood
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up delay-200 w-full max-w-6xl mx-auto" style={{opacity:0, animationFillMode:'forwards', animationDelay:'0.3s'}}>
            <span className="bg-gradient-to-r from-red-700 to-red-600 text-white font-black px-8 py-4 rounded-full text-xl md:text-4xl shadow-lg uppercase tracking-wide w-full text-center">
              HIGH PROTEIN
            </span>
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-black px-8 py-4 rounded-full text-xl md:text-4xl shadow-lg uppercase tracking-wide w-full text-center">
              LOW FAT
            </span>
            <span className="bg-gradient-to-r from-teal-700 to-teal-600 text-white font-black px-8 py-4 rounded-full text-xl md:text-4xl shadow-lg uppercase tracking-wide w-full text-center">
              GUILT FREE SNACK
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up w-full max-w-6xl mx-auto" style={{opacity:0, animationFillMode:'forwards', animationDelay:'0.5s'}}>
            <span className="bg-gradient-to-r from-[#5a3a1a] to-[#3d2813] text-[#f5d5a4] font-black px-8 py-4 rounded-full text-lg md:text-2xl shadow-lg uppercase tracking-wide w-full text-center border border-[#7a5228]/40">
              No Preservatives
            </span>
            <span className="bg-gradient-to-r from-[#1f4f1d] to-[#143515] text-[#b8ef9c] font-black px-8 py-4 rounded-full text-lg md:text-2xl shadow-lg uppercase tracking-wide w-full text-center border border-[#3a7a2e]/40">
              No Added Oil
            </span>
            <span className="bg-gradient-to-r from-[#4a285d] to-[#341947] text-[#ddbcff] font-black px-8 py-4 rounded-full text-lg md:text-2xl shadow-lg uppercase tracking-wide w-full text-center border border-[#6d3f89]/40">
              No Artificial Flavors
            </span>
            <span className="bg-gradient-to-r from-[#5b1f3d] to-[#3f152a] text-[#ffbed7] font-black px-8 py-4 rounded-full text-lg md:text-2xl shadow-lg uppercase tracking-wide w-full text-center border border-[#7d2c55]/40">
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
