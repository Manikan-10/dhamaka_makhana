import React, { useEffect, useState } from "react";

const makhanaEmojis = ["🟡", "⚪", "🟠", "✨", "💥", "⭐"];

const MakhanaPopBurst = () => {
  const [pops, setPops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPop = {
        id: Date.now() + Math.random(),
        left: Math.random() * 90 + 5,
        top: Math.random() * 80 + 10,
        emoji: makhanaEmojis[Math.floor(Math.random() * makhanaEmojis.length)],
        size: Math.random() * 1.5 + 0.8,
      };
      setPops((prev) => [...prev.slice(-8), newPop]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{zIndex: -1}}>
      {pops.map((pop) => (
        <div
          key={pop.id}
          className="absolute animate-pop-in"
          style={{
            left: `${pop.left}%`,
            top: `${pop.top}%`,
            fontSize: `${pop.size}rem`,
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {pop.emoji}
        </div>
      ))}
    </div>
  );
};

export default MakhanaPopBurst;
