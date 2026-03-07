import React from "react";

const CartoonStrips = () => {
  return (
    <section className="py-16 px-6 bg-[#1a1209]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Ravi's Story Comic Strip */}
        <div className="text-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#2a2015]/60 bg-white">
            <img
              src="/images/Story (1).png"
              alt="Dhamaka Makhana: Unleash your inner Hero - Ravi's Story Comic Strip"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Makhana History Infographic */}
        <div className="text-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#2a2015]/60 bg-white">
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
