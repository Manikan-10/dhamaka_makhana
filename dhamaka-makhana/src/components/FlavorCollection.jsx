import React from "react";

const flavors = [
  {
    name: "Peri Peri Punch",
    description: '"A spicy kick that\'ll wake up your ancestors."',
    bgColor: "bg-accent-pink",
    imgAlt: "Peri Peri Spice Makhana Pack",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQoiIjVBTnJdlUwGXoXqQmJc4Km2cLZcHh0SrhEk6yYpOG4Pzq32bKN2r85w1lMBZ_G3vhiw3H5P3D8uUfQvt5Qi_u3sA4M8_AkxJrGfMJLuZg7D_PGLhc0T2jWHSA3yKR7O_3gPamGKAOBhBlF5lihqS5j2fPG8W-j2P3XqLfzXFxn3aFjnKVkDQU3nCCzuZbGsXpvKekJ3yz0l4Rt8j8d2_-FGo0MjMpFKXE5X2V_ug9uT-nCy_gWOBhqtNIRqq2B9JQcQDJL01X0",
  },
  {
    name: "Tangy Tomato",
    description: '"Zesty, sweet, and dangerously addictive."',
    bgColor: "bg-accent-teal",
    imgAlt: "Tangy Tomato Makhana Pack",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-X8UEb9cxu_lW1eJzjT1VnRiXA3RhCK_6IKN6j3W4vwQbJqBnc3mZyWKK39X_9PwU8fF3-JVj9BmgjDU5q2B8W53wh2L3qkPMoVfRb9bwZR_-TiVoV1dJPeTwBXYo3tHf8gkbO_I-3e33z1rfKl8PFPvQAUG3cMHVLcCsZd8t9MhXu62uyW4iQhm9VkDqVGAuCd5wn3PZJLaBXpxnQ0DOCt6kv4pL1c4FfJ_bXlFqiKslL8PfUjbpqTKiXJN5Pf0rWjk3ILjFHDIY1w",
  },
  {
    name: "Classic Salted",
    description: '"The OG crunch. Pure, simple, perfection."',
    bgColor: "bg-accent-yellow",
    imgAlt: "Classic Salted Makhana Pack",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBT5-0m25TJOZDljBbvSYv6Hq4rUb_TZL39WT_lqeNe_tSN9uc1sVhJGMxG7nXyJQk9OhMPsEdmWmyYILCJAZl3V4GqLLY_DZKK0acuX8g8_MHyIE_bPaTQolM7t8xjKwG0OgkN5YmYpHAMb8JwCi7SBFyP5QfCxE2NVh2y1m2Dn3UEUmWFXk4xNfhVgBmqeIwuV9Vf-Kd49cpHRdmQKj9Gl_EY5ySMuaIqLhP1n-pLWFGQfFN5xnTN2tqD-A2gUVF-UJSkGHq7FwTqB",
  },
];

const FlavorCollection = () => {
  return (
    <section id="shop" className="px-6 py-24 bg-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-background-dark">
            Our Flavor Collection
          </h3>
          <p className="text-xl font-bold text-slate-600 max-w-2xl">
            From the streets of Old Delhi to the spice markets of Mexico, we've
            got a pop for every palate.
          </p>
        </div>

        {/* Flavor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border-4 border-background-dark pop-art-shadow-sm p-6 hover:-translate-y-2 transition-transform duration-500"
            >
              <div
                className={`${flavor.bgColor} rounded-2xl border-2 border-background-dark aspect-square mb-6 overflow-hidden`}
              >
                <img
                  alt={flavor.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  src={flavor.imgSrc}
                />
              </div>
              <h4 className="text-2xl font-black uppercase mb-2 group-hover:text-primary transition-colors">
                {flavor.name}
              </h4>
              <p className="font-bold text-slate-500 mb-6 italic">
                {flavor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorCollection;
