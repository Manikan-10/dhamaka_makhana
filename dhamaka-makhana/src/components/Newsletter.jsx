import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}! Stay poppin'! 🎉`);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-6 text-center bg-primary border-b-4 border-background-dark">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="material-symbols-outlined text-8xl text-background-dark animate-bounce">
          mail
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-background-dark leading-none">
          Stay Poppin'!
        </h2>
        <p className="text-xl font-bold text-background-dark/80 italic">
          Join our list for exclusive flavor drops and explosive discounts.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            className="w-full sm:w-96 p-5 rounded-2xl border-4 border-background-dark font-black focus:ring-0 focus:outline-none placeholder:text-slate-400"
            placeholder="YOUR EMAIL ADDRESS"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-background-dark text-primary font-black px-10 py-5 rounded-2xl border-4 border-background-dark hover:bg-slate-900 transition-all uppercase whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
