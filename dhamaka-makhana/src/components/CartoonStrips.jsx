import React from "react";

const CartoonStrips = () => {
  return (
    <section className="py-16 px-6 bg-[#1a1209]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-10 border-l-4 border-[#f6a640] pl-5 md:pl-7">
          <h3 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
            <span
              className="drop-shadow-[0_4px_14px_rgba(246,166,64,0.28)]"
              style={{
                background: "linear-gradient(135deg, #fff6e8 0%, #ffd89b 45%, #f6a640 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Story for Mighty Makhana.
            </span>
          </h3>
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#2a2015]/60 bg-white">
            <img
              src="/images/Makhana Story.png"
              alt="Makhana: The Seed that Conquered Time - History Infographic"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartoonStrips;
