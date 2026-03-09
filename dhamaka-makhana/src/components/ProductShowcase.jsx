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
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 bg-[#1e1710] border border-[#2a2015]/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/15 ${
        isVisible ? "animate-bounce-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1e1710] to-[#0f0c06] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h4 className="text-lg md:text-xl font-black uppercase tracking-wide text-primary mb-0">
          {image.name}
        </h4>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-zoom-pulse">
            <span style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 50%, #f49434 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Dhamaka</span>{' '}
            <span className="text-white">Snacks Company</span>
          </h3>
          <p className="text-xl md:text-2xl font-bold mt-3 uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Premium Fox Nuts
          </p>
          <p className="text-base text-[#8a8070] mt-2">
            Premium Fox Nuts — The Ancient Indian Superfood
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {productImages.map((image, index) => (
            <ProductImageCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
