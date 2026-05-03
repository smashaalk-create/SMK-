import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Visit() {
  return (
    <div className="bg-smk-charcoal min-h-screen">
      <section className="py-32 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[150px] font-display font-black mb-8 italic tracking-tighter text-smk-white"
          >
            THE SPOT
          </motion.h1>
          <div className="pill-tag mx-auto w-fit">Heart of DHA Phase VI</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl font-display font-black italic text-smk-white leading-none">DHA KARACHI</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <MapPin className="text-smk-orange mt-1" size={32} />
                  <p className="text-smk-white/70 text-2xl font-bold leading-tight">
                    Plot 12-C, 2nd Commercial St, <br />
                    Phase 6 DHA, <br />
                    Karachi, Pakistan
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <Phone className="text-smk-orange" size={32} />
                  <p className="text-smk-white/70 text-2xl font-bold">+92 21 111-SMK-DHA</p>
                </div>
                <div className="flex items-center space-x-6">
                  <Mail className="text-smk-orange" size={32} />
                  <p className="text-smk-white/70 text-2xl font-bold">smoke@smkburgers.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-display font-black italic text-smk-orange uppercase">Hustle Hours</h3>
              <div className="grid grid-cols-2 gap-8 text-smk-white/70 font-bold text-lg">
                <div className="uppercase tracking-widest text-sm opacity-50">Mon - Thu</div>
                <div className="text-right">12:00 PM - 01:00 AM</div>
                <div className="uppercase tracking-widest text-sm opacity-50">Fri - Sun</div>
                <div className="text-right">12:00 PM - 03:00 AM</div>
              </div>
            </div>

            <div className="pt-8">
              <button className="btn-primary w-full md:w-auto text-xl">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="space-y-12">
             <div className="bg-smk-orange p-12 rounded-none space-y-8 text-white skew-x-[-3deg] shadow-2xl">
                <div className="pill-tag bg-smk-charcoal text-white w-fit">Group Orders</div>
                <h2 className="text-5xl font-display font-black italic leading-none">FEED THE GANG</h2>
                <p className="text-white/90 font-bold leading-relaxed text-xl">
                  Party at the crib? Office hustle? We handle bulk orders that make people forget they were hungry. Special gang-rates available.
                </p>
                <button className="w-full bg-smk-charcoal text-white py-5 uppercase font-black tracking-widest hover:bg-smk-white hover:text-smk-orange transition-all skew-x-[3deg]">
                  INQUIRE FOR BULK
                </button>
             </div>
             <div className="aspect-video rounded-none overflow-hidden grayscale border-4 border-smk-gray">
               <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                className="w-full h-full object-cover brightness-50"
                alt="SMK Outlet"
                referrerPolicy="no-referrer"
              />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
