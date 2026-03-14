import React, { useEffect, useRef, useState } from "react";

const productImages = [
  {
    src: "/images/product1.jpeg",
    alt: "Dhamaka Makhana - The Ancient Indian Superfood",
    name: "Dhamaka Makhana",
  },
];

const ProductImageCard = ({ image, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 bg-[#1e1710] border border-[#2a2015]/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/15 ${
        isVisible ? "animate-bounce-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      <div className="relative min-h-[320px] md:min-h-[450px] bg-gradient-to-br from-[#24180f] to-[#0f0c06] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6 md:p-8">
        <h4 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-primary mb-1 text-left">
          {image.name}
        </h4>
        <p className="text-sm md:text-base text-[#d4cdc4] text-left">Crunchy. Clean. Legendary.</p>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-4xl">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-zoom-pulse text-left">
            <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Dhamaka</span>{' '}
            <span className="text-white">Snacks Company</span>
          </h3>
          <p className="text-xl md:text-2xl font-bold mt-3 uppercase tracking-wide text-left"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Premium Fox Nuts
          </p>
          <p className="text-base md:text-lg text-[#b7aa95] mt-3 text-justify">
            Premium Fox Nuts — The Ancient Indian Superfood
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {productImages.map((image, index) => (
            <ProductImageCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
