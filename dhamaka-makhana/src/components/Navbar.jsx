import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1209]/97 backdrop-blur-lg border-b border-[#2a2015]/80 px-6 md:px-12 py-4"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center">
        <a href="#home" className="flex flex-col items-center leading-none shrink-0">
          <img
            src="/images/Kamya%20logo.png"
            alt="Kamya"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <p className="mt-1 text-[17px] md:text-[20px] tracking-[0.2em] uppercase text-[#d5c6a7] flex items-center justify-center gap-2.5 relative left-3 md:left-4 text-center">
            <span>A</span>
            <img
              src="/images/Kamya%20logo.png"
              alt="Kamya mini"
              className="h-7 md:h-8 w-auto object-contain opacity-100 brightness-110 saturate-125"
            />
            <span>Venture</span>
          </p>
        </a>

        {/* Desktop Navigation - pushed to the right */}
        <div className="hidden md:flex items-center gap-10 font-bold uppercase text-sm tracking-widest text-[#c4b89a] ml-auto">
          <a className="hover:text-primary transition-colors cursor-pointer" href="#home">
            Home
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#products">
            Snacks
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#about">
            About
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#contact">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            className="p-2 hover:bg-primary/20 rounded-full transition-colors text-[#c4b89a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 font-bold uppercase text-sm tracking-widest text-[#c4b89a] border-t border-[#2a2015] pt-4">
          <a className="hover:text-primary transition-colors cursor-pointer" href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#products" onClick={() => setMobileMenuOpen(false)}>
            Snacks
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
