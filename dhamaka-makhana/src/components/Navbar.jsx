import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1209]/97 backdrop-blur-lg border-b border-[#2a2015]/80 px-6 md:px-12 py-3"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - left side */}
        <div className="flex items-center gap-3">
          <img
            src="/images/Updated_logo-removebg-preview-removebg-preview.png"
            alt="Dhamaka Snacks Company"
            className="h-10 md:h-12 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(244, 148, 52, 0.5)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
            }}
          />
        </div>

        {/* Desktop Navigation - pushed to the right */}
        <div className="hidden md:flex items-center gap-10 font-bold uppercase text-sm tracking-widest text-[#c4b89a]">
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
        <div className="md:hidden flex items-center">
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
