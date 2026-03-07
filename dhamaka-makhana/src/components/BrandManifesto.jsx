import React from "react";

const benefits = [
  {
    icon: "local_fire_department",
    title: "High Protein",
    desc: "Fuel your muscles naturally.",
    bgColor: "bg-primary",
    textColor: "text-background-dark",
  },
  {
    icon: "block",
    title: "0% Junk",
    desc: "No preservatives, just vibes.",
    bgColor: "bg-accent-teal",
    textColor: "text-background-dark",
  },
  {
    icon: "heart_check",
    title: "Low Fat",
    desc: "Snack all day, no regrets.",
    bgColor: "bg-accent-yellow",
    textColor: "text-background-dark",
  },
  {
    icon: "bolt",
    title: "Energy Boost",
    desc: "Clean fuel for your hustle.",
    bgColor: "bg-accent-pink",
    textColor: "text-white",
  },
];

const BrandManifesto = () => {
  return (
    <section
      id="story"
      className="bg-accent-teal/30 py-24 px-6 border-y-4 border-background-dark"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-full h-full bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="border-4 border-background-dark rounded-[3rem] overflow-hidden pop-art-shadow bg-white">
            <img
              alt="Cool Indian man with sunglasses holding makhana"
              className="w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4P2kI1cNePwsNXPSg-2e9yphWDNf9DPigBVRYqMW8k7WK1sdqXQnI3SvS3tOlxJjh1Wd59rdaYVVfx0Cd8CxAGlkVG1ksNxFohtFuJwY-c3fzuagMmYXu3RXlX6C6t6cIgclD1x8H-KPCADVdrr_UxOkQQePw2hzR-oeRCCKGpbv2Q1v_6BQUZ5r2pOQFCIJPP3TA9oQWQIyP1twPTIqFWZvJxCy-hqaUuJdYEsgBJCN3kZ1dDPiEn3_8EiEICZ0Y5Y3jWFzZF1j-"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          <div className="text-primary font-black uppercase tracking-widest text-sm">
            — OUR MISSION
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter">
            The <span className="text-primary">Dhamaka</span> <br />
            Brand Manifesto
          </h2>
          <p className="text-xl font-bold text-slate-600">
            Centuries ago, Indian sages discovered the fox nut. We just added
            the "Dhamaka". It's a powerhouse of nutrition disguised as your
            favorite guilty pleasure.
          </p>

          {/* Benefits Grid */}
          <div id="benefits" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl border-2 border-background-dark pop-art-shadow-sm"
              >
                <div
                  className={`${benefit.bgColor} p-2 rounded-lg border-2 border-background-dark ${benefit.textColor}`}
                >
                  <span className="material-symbols-outlined">
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <h5 className="font-black uppercase">{benefit.title}</h5>
                  <p className="text-sm font-bold text-slate-500">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;
