import { motion } from "motion/react";

export default function Story() {
  return (
    <div className="bg-smk-charcoal min-h-screen">
      {/* Hero */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-black mb-8 italic tracking-tighter text-smk-white"
          >
            THE JUICE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-smk-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            SMK started in a backyard with one goal: to create a burger that actually tastes like the ones we see in our dreams. No mock data. Just real flames.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="skew-x-[-2deg] overflow-hidden border-8 border-smk-gray"
            >
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9a76957c?q=80&w=2070&auto=format&fit=crop"
                alt="The Sizzle"
                className="w-full h-[700px] object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="pill-tag w-fit">The Mission</div>
                <h2 className="text-5xl md:text-6xl font-display font-black leading-none text-smk-white italic">
                  BOLD BY <br />
                  <span className="text-smk-orange">DESIGN.</span>
                </h2>
                <p className="text-smk-white/70 text-lg leading-relaxed font-medium">
                  We don’t do generic. Our beef is 100% prime cut, our sauces are made daily from scratch, and our buns are toasted to structural perfection. This is street food with a bachelor's degree.
                </p>
              </div>
              
              <div className="space-y-6 pt-12 border-t border-white/10">
                {[
                  { id: "01", title: "Prime Beef Imports" },
                  { id: "02", title: "Secret Urban Sauces" },
                  { id: "03", title: "2:00 AM Last Call" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-6">
                    <div className="w-12 h-12 skew-x-[-10deg] bg-smk-orange flex items-center justify-center text-white font-display font-black text-xl">{item.id}</div>
                    <h3 className="text-sm uppercase tracking-widest font-black text-smk-white">{item.title}</h3>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="btn-primary">
                  JOIN THE MOVEMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-40 bg-smk-orange text-smk-charcoal text-center overflow-hidden relative skew-y-[-2deg]">
        <div className="max-w-4xl mx-auto px-6 relative z-10 skew-y-[2deg]">
          <h2 className="text-4xl md:text-7xl font-display font-black italic mb-12 leading-none uppercase">
            "IF IT DOESN'T DRIP, IT DOESN'T COUNT."
          </h2>
          <div className="w-24 h-2 bg-smk-charcoal mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.5em] text-smk-charcoal font-black">THE SMK OATH</p>
        </div>
      </section>
    </div>
  );
}
