import { motion } from "motion/react";
import { useState } from "react";

const menuData = {
  "Burgers": [
    { name: "THE BIG SMK", price: "1250", desc: "Double smash beef, double cheddar, smoked beef bacon, grilled onions, signature SMK sauce." },
    { name: "TRUFFLE MONSTER", price: "1450", desc: "Smashed beef, swiss cheese, sautéed mushrooms, caramelized onions, truffle aioli." },
    { name: "DHA HEAT", price: "1150", desc: "Juicy beef, pepperjack, pickled jalapenos, flaming ghost pepper mayo (Warning: Hardcore)." },
    { name: "CLASSIC STACK", price: "950", desc: "Singled smashed beef, cheddar, bibb lettuce, tomato, onions, and standard house dip." },
  ],
  "Wraps": [
    { name: "HOT HONEY CRISP", price: "850", desc: "Nashville hot chicken, slaw, pickles, and spicy hot honey drizzle in a toasted tortilla." },
    { name: "SMOKEY BBQ WRAP", price: "950", desc: "Pulled brisket bits, crispy onions, mixed greens, and hickory BBQ sauce." },
    { name: "GARDEN STACK (V)", price: "850", desc: "Crispy paneer block, avocado spread, spicy slaw, and honey mustard." },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Burgers");

  return (
    <div className="bg-smk-charcoal min-h-screen">
      <section className="py-32 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-black mb-8 italic tracking-tighter text-smk-white"
          >
            THE STACK
          </motion.h1>
          <div className="pill-tag mx-auto w-fit text-smk-white uppercase tracking-widest font-black">Zero Fillers. All Flavor.</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-wrap justify-center gap-10 mb-20">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-[0.2em] font-black pb-2 border-b-4 transition-all ${
                activeCategory === cat ? "border-smk-orange text-smk-orange" : "border-transparent text-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
           key={activeCategory}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
        >
          {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
            <div key={item.name} className="flex justify-between items-start border-b border-white/5 pb-10 group cursor-default">
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-black text-smk-white group-hover:text-smk-orange transition-colors tracking-tight uppercase">{item.name}</h3>
                <p className="text-sm text-smk-white/60 font-medium leading-relaxed max-w-xs">{item.desc}</p>
              </div>
              <span className="menu-item-price text-xl italic whitespace-nowrap ml-4">Rs. {item.price}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-32 card-refined flex flex-col md:flex-row items-center justify-between gap-12 bg-white text-smk-charcoal p-12 md:p-16">
          <div className="space-y-6 flex-1">
            <h2 className="text-5xl font-display font-black italic tracking-tighter">CUSTOMIZE YOUR SMASH</h2>
            <p className="text-smk-charcoal/70 leading-relaxed font-bold text-lg">
              Want extra bacon? Double the cheese? A side of fire mayo? Just ask. We build it exactly how you crave it.
            </p>
            <button className="btn-primary">
              Order Online Now
            </button>
          </div>
          <div className="flex-1 aspect-square bg-smk-charcoal rounded-none overflow-hidden relative grayscale">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop"
              alt="Customize Burger"
              className="w-full h-full object-cover brightness-75 scale-125 rotate-6"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
