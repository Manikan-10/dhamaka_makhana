import React from "react";

const Hero = () => {
  return (
    <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block bg-accent-teal text-background-dark font-bold px-4 py-1 rounded-full border-2 border-background-dark -rotate-2">
            🔥 TRENDING SUPERFOOD
          </div>
          <h2 className="text-6xl md:text-8xl font-black leading-none uppercase italic tracking-tighter text-background-dark">
            Dhamaka <br />
            <span className="text-primary not-italic">Makhana:</span>
            <br />
            The Snack That{" "}
            <span className="bg-accent-yellow px-2 border-4 border-background-dark">
              Pops!
            </span>
          </h2>
          <p className="text-xl font-medium max-w-lg">
            Ancient Indian wisdom meets explosive modern flavors. Say goodbye to
            boring chips and hello to the crunchiest, healthiest pop in town.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-background-dark text-xl font-black px-10 py-5 rounded-2xl border-4 border-background-dark pop-art-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
              Discover the Crunch
            </button>
            <button className="bg-white text-background-dark text-xl font-black px-10 py-5 rounded-2xl border-4 border-background-dark hover:bg-slate-50 transition-all uppercase">
              View Flavors
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="relative rounded-3xl border-4 border-background-dark overflow-hidden pop-art-shadow bg-accent-yellow">
            <img
              alt="Vibrant pop-art makhana snack pack illustration"
              className="w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBErA0RRbvMcXeuYIeVcRevnhmAym1rtpQ0iO9UUyXJbAQwQPuq14oey0zPyNogOmfhWldusWn3ROnxIBbRQg8Z8XiIrZ6eMYM-3TWxbmFnqQyBECEXG-x7FLkZV1VOYNRe8D5PFU0JO60ydIsRn9mz_8Y208kVEeWqJ5VYlKrywsRxUo86X2dXlFXibJBp_igxTOPt32KK7wx0Gn1pt_mZMhbgNjab3VUjYeeLu04pBEkar8sOZOKn0Les1ty-rIBcXJiJh8Qt18eI"
            />
          </div>
          {/* Decorative Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-accent-pink text-white p-4 rounded-full border-4 border-background-dark rotate-12 hidden md:block">
            <span className="material-symbols-outlined text-4xl">star</span>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent-teal text-background-dark font-black p-4 border-4 border-background-dark -rotate-12 hidden md:block">
            100% ORGANIC
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
