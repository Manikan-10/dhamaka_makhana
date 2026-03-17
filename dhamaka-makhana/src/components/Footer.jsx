import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f0c06] text-[#8a8070] py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Get in Touch heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get In Touch
          </h2>
          <p className="text-[#8a8070] mt-4 text-lg">
            Want to stock Dhamaka Snacks or just say hello? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-12">
          <div className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-2xl">mail</span>
            <span className="font-bold text-[#c4b89a] group-hover:text-primary transition-colors">dhamakasnackscompany@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-2xl">call</span>
            <span className="font-bold text-[#c4b89a] group-hover:text-primary transition-colors">+91 99915 54146</span>
          </div>
          <div className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            <span className="font-bold text-[#c4b89a] group-hover:text-primary transition-colors">Sonipat, India</span>
          </div>
        </div>

        {/* KAMYA venture branding */}
        <div className="mb-12 text-center">
          <p className="text-xl md:text-2xl font-black uppercase tracking-[0.14em] text-[#f6cf8b] mb-5">
            A KAMYA Venture
          </p>
          <div className="mx-auto max-w-md rounded-3xl border border-[#3a2b18] bg-black/60 px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.55)]">
            <img
              src="/images/Kamya logo.png"
              alt="Kamya Logo"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#2a2015] text-center">
          <p className="text-sm font-bold text-[#5a5040]">
            © 2026 Dhamaka Snacks Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
