import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1209]/97 backdrop-blur-lg border-b border-[#2a2015]/80 px-3 sm:px-4 md:px-12 py-3 md:py-4"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center">
        <a href="#home" className="flex flex-col items-start leading-none shrink-0">
          <img
            src="/images/Kamya%20logo.png"
            alt="Kamya"
            className="h-10 sm:h-11 md:h-16 w-auto object-contain"
          />
          <p className="mt-1 text-[11px] sm:text-[12px] md:text-[20px] tracking-[0.16em] md:tracking-[0.2em] uppercase text-[#d5c6a7] flex items-center justify-start gap-1.5 sm:gap-2.5 md:gap-2.5 text-left whitespace-nowrap">
            <span>A</span>
            <img
              src="/images/Kamya%20logo.png"
              alt="Kamya mini"
              className="h-4 sm:h-5 md:h-8 w-auto object-contain opacity-100 brightness-110 saturate-125"
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
        <div className="md:hidden flex items-center ml-auto -mr-1">
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
