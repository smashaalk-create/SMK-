import { motion } from "motion/react";
import { ShoppingBag, Truck, Zap } from "lucide-react";

export default function Order() {
  return (
    <div className="bg-smk-charcoal min-h-screen">
      <section className="py-32 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-black mb-8 italic tracking-tighter text-smk-white"
          >
            GET IT NOW
          </motion.h1>
          <div className="pill-tag mx-auto w-fit">Fast. Hot. Lethal.</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Takeaway */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-smk-gray p-12 md:p-20 border border-white/5 rounded-none flex flex-col items-center text-center space-y-8"
          >
            <div className="w-20 h-20 bg-smk-orange text-white flex items-center justify-center skew-x-[-10deg]">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-4xl font-display font-black italic text-white leading-none">QUICK PICKUP</h2>
            <p className="text-smk-white/60 font-bold leading-relaxed">
              Skip the line. Order now and grab your stack in 15 minutes. Pure efficiency for the DHA hustle.
            </p>
            <button className="w-full btn-primary py-6 text-xl">
              START PICKUP ORDER
            </button>
          </motion.div>

          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-smk-white p-12 md:p-20 text-smk-charcoal rounded-none flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 bg-smk-orange text-white font-black text-xs skew-x-[-15deg]">DHA EXCLUSIVE</div>
            <div className="w-20 h-20 bg-smk-charcoal text-white flex items-center justify-center skew-x-[-10deg]">
              <Zap size={40} />
            </div>
            <h2 className="text-4xl font-display font-black italic text-smk-charcoal leading-none">FLASH DELIVERY</h2>
            <p className="text-smk-charcoal/60 font-bold leading-relaxed">
              We deliver within Phase V, VI, VII & VIII in under 30 minutes. Hotter than your last date.
            </p>
            <button className="w-full bg-smk-charcoal text-white py-6 uppercase font-black tracking-widest text-xl skew-x-[-10deg] hover:bg-smk-orange transition-all">
              RAID DELIVERY
            </button>
          </motion.div>
        </div>

        <div className="mt-24 card-refined flex flex-col md:flex-row items-center justify-between gap-8 py-12 bg-smk-gray border-l-8 border-l-smk-orange">
          <div className="flex items-center space-x-8">
            <div className="p-6 bg-smk-orange text-white">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-black italic text-white uppercase">SMK SQUAD SHIPPING</h3>
              <p className="text-xs text-smk-white/40 uppercase tracking-widest font-black">KARACHI CENTRAL - 45 MINS AVG</p>
            </div>
          </div>
          <div className="text-3xl font-display font-black text-smk-orange italic text-center md:text-right leading-none">
            FREE DELIVERY ON<br />ORDERS ABOVE RS. 3000
          </div>
        </div>
      </section>
    </div>
  );
}
