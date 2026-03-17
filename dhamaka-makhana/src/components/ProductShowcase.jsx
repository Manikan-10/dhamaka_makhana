import React, { useEffect, useRef, useState } from "react";

const productImages = [
  {
    src: "/images/product1.jpeg",
    alt: "Dhamaka Makhana - The Ancient Indian Superfood",
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
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-4xl">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-zoom-pulse text-left text-white">
            Our Products
          </h3>
          <p className="text-2xl md:text-4xl font-black mt-4 uppercase tracking-tight text-left"
            style={{
              background: 'linear-gradient(135deg, #f49434 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            High Quality, Big, Bold, DHAMAKEDAAR Makhana!
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
