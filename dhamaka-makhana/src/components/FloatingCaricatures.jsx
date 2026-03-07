import React, { useEffect, useState } from "react";

const characters = [
  {
    src: "/images/cartoon-1-nobg.png",
    alt: "Cartoon Character 1",
    position: "top-[2%] left-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-left",
    delay: "0.5s",
  },
  {
    src: "/images/cartoon-2-nobg.png",
    alt: "Cartoon Character 2",
    position: "top-[2%] right-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-right",
    delay: "0.8s",
  },
  {
    src: "/images/cartoon-3-nobg.png",
    alt: "Cartoon Character 3",
    position: "top-[28%] left-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-left",
    delay: "1.2s",
  },
  {
    src: "/images/cartoon-4-nobg.png",
    alt: "Cartoon Character 4",
    position: "top-[28%] right-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-right",
    delay: "1.5s",
  },
  {
    src: "/images/cartoon-5-nobg.png",
    alt: "Cartoon Character 5",
    position: "top-[55%] left-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-bl",
    delay: "1.8s",
  },
  {
    src: "/images/cartoon-6-nobg.png",
    alt: "Cartoon Character 6",
    position: "top-[55%] right-0",
    size: "w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-40",
    animation: "animate-slide-in-br",
    delay: "2.1s",
  },
];

const FloatingCaricatures = () => {
  const [visibleChars, setVisibleChars] = useState([]);

  useEffect(() => {
    characters.forEach((_, index) => {
      const delay = parseFloat(characters[index].delay) * 1000;
      setTimeout(() => {
        setVisibleChars((prev) => [...prev, index]);
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {characters.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.size} ${
            visibleChars.includes(index) ? item.animation : "opacity-0"
          } pointer-events-none select-none hidden md:block`}
          style={{
            animationFillMode: "forwards",
          }}
        >
          <div className="animate-gentle-float" style={{ animationDelay: `${index * 0.5}s` }}>
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-contain opacity-95"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(244, 148, 52, 0.4)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
              }}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingCaricatures;
