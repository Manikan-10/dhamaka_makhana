import React, { useEffect, useState } from "react";

const colors = ["#f49434", "#f472b6", "#2dd4bf", "#fbbf24", "#a855f7", "#ef4444", "#22c55e"];

const Confetti = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 6,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 1.5,
      shape: Math.random() > 0.5 ? "rounded-full" : "rounded-sm",
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`confetti ${p.shape}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
