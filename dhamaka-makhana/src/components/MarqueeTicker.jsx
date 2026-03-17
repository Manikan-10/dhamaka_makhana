import React from "react";

const marqueeItems = [
  "HIGH PROTEIN",
  "LOW FAT",
  "GUILT FREE SNACK",
  "NO PRESERVATIVES",
  "NO ADDED OIL",
  "NO ARTIFICIAL FLAVORS",
  "VEGAN",
  "RAW FOX NUTS",
  "RICH IN CALCIUM",
  "GLUTEN FREE",
];

const MarqueeTicker = () => {
  return (
    <div className="led-container w-full py-4 overflow-hidden whitespace-nowrap" style={{ borderTop: '2px solid #f49434', borderBottom: '2px solid #f49434' }}>
      {/* Dot overlay for LED effect */}
      <div className="led-dot-overlay" />
      
      <div
        className="flex animate-marquee gap-0 items-center relative z-10"
        style={{ width: "max-content" }}
      >
        {/* Double the items for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((text, index) => (
          <span key={index} className="flex items-center gap-0 led-item">
            <span className="led-separator text-2xl md:text-3xl mx-4">★</span>
            <span className="led-text text-2xl md:text-3xl uppercase">
              {text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
