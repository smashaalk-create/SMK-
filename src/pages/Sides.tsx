import { motion } from "motion/react";

const sidesData = [
  {
    name: "SMK Animal Fries",
    price: "750",
    desc: "Signature hand-cut fries loaded with double cheese, grilled onions, and the secret SMK sauce."
  },
  {
    name: "Truffle Parm Skins",
    price: "850",
    desc: "Crispy skin-on fries drizzled with white truffle oil and aged parmesan shavings."
  },
  {
    name: "Firecracker Wings",
    price: "950",
    desc: "6pc jumbo wings tossed in our sweet and deadly habanero glaze. Served with ranch."
  },
  {
    name: "Onion Ring Tower",
    price: "550",
    desc: "Beer-battered giant rings served with a side of Smokey BBQ dip."
  },
  {
    name: "Loaded Mac & Brisket",
    price: "1150",
    desc: "Creamy three-cheese mac topped with 12-hour smoked brisket bits and jalapenos."
  }
];

export default function Sides() {
  return (
    <div className="bg-smk-charcoal min-h-screen">
      <section className="py-32 border-b border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-black mb-8 italic tracking-tighter text-smk-white"
          >
            THE SIDES
          </motion.h1>
          <div className="pill-tag mx-auto w-fit">Loaded. Dangerous. Addictive.</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {sidesData.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-start border-b border-white/10 pb-8 group cursor-default"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-black text-smk-white group-hover:text-smk-orange transition-colors tracking-tight">{item.name}</h3>
                <p className="text-sm text-smk-white/60 leading-relaxed max-w-xs font-medium">{item.desc}</p>
              </div>
              <span className="menu-item-price text-xl ml-4">Rs. {item.price}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 card-refined flex flex-col md:flex-row items-center justify-between gap-12 bg-smk-orange text-white p-12 md:p-16 skew-x-[-2deg]">
          <div className="space-y-6 flex-1">
            <h2 className="text-5xl font-display font-black italic tracking-tighter">FRIES BEFORE GUYS?</h2>
            <p className="text-white/80 leading-relaxed font-bold text-lg">
              Our fries are hand-cut daily, double-fried for that perfect crunch, and seasoned with our proprietary spice blend. No shortcuts.
            </p>
            <button className="bg-smk-charcoal text-white px-10 py-5 uppercase text-xs tracking-widest font-black hover:bg-smk-white hover:text-smk-charcoal transition-all skew-x-[5deg]">
              Add To Cart
            </button>
          </div>
          <div className="flex-1 aspect-video rounded-sm overflow-hidden border-4 border-white grayscale">
            <img
              src="https://images.unsplash.com/photo-1573082829653-f495818f29ed?auto=format&fit=crop&w=1000&q=80"
              alt="Loaded Fries"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
