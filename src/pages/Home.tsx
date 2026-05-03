import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-smk-charcoal overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-smk-charcoal/40 via-smk-charcoal/80 to-smk-charcoal z-10" />
          <img
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=2000&q=80"
            alt="SMK Burger Hero"
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="pill-tag mx-auto w-fit">DHA'S LOUDEST FLAVORS</div>
            <h1 className="text-7xl md:text-[160px] font-display font-black leading-[0.8] tracking-tighter text-smk-white italic">
              BOLDER.<br />BETTER.<br /><span className="text-smk-orange">SMK.</span>
            </h1>
            <p className="text-lg md:text-2xl text-smk-white/70 max-w-2xl mx-auto font-medium leading-tight">
              Juiced up burgers, criminal sides, and the vibe DHA has been waiting for. 
              No fluff. Just food.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/menu" className="btn-primary w-full sm:w-auto text-xl px-12">
                STAKE THE STACK
              </Link>
              <Link to="/visit" className="btn-outline w-full sm:w-auto text-xl px-12">
                FIND THE SPOT
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-smk-orange"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Featured Items */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b-4 border-smk-orange pb-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter">THE SIGNATURES</h2>
            <p className="text-smk-orange font-black tracking-widest mt-2 uppercase">Crave-Worthy Masterpieces</p>
          </div>
          <Link to="/menu" className="text-sm font-black underline underline-offset-8 hover:text-smk-orange transition-colors hidden md:block uppercase">
            View All Items
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[600px] overflow-hidden bg-smk-gray border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              alt="The Big SMK"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-smk-charcoal via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-10 left-10 space-y-4">
              <span className="pill-tag">Bestseller</span>
              <h3 className="text-5xl font-display font-black text-white italic">THE BIG SMK</h3>
              <p className="text-white/70 max-w-sm font-bold">Double beef, triple cheese, smoked onions, and a pint of our secret SMK sauce.</p>
            </div>
          </motion.div>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <motion.div whileHover={{ scale: 0.98 }} className="bg-smk-orange p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-4xl font-display font-black text-smk-charcoal italic leading-none">LOADED<br />SMK FRIES</h3>
                <p className="mt-4 text-sm font-black text-smk-charcoal/80 uppercase">The Cult Favorite.</p>
               </div>
               <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Coffee size={200} className="rotate-12 translate-y-10" />
               </div>
               <Link to="/sides" className="relative z-10 w-fit p-3 bg-smk-charcoal text-white hover:bg-white hover:text-smk-orange transition-all">
                <ArrowRight size={24} />
               </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 0.98 }} className="bg-smk-white p-10 flex flex-col justify-between group">
              <div>
                <h3 className="text-4xl font-display font-black text-smk-charcoal italic leading-none">HOT<br />HONEY WRAP</h3>
                <p className="mt-4 text-sm font-black text-smk-charcoal/60 uppercase">Crunch with a Kick.</p>
              </div>
              <Link to="/menu" className="w-fit p-3 bg-smk-orange text-white hover:bg-smk-charcoal transition-all">
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-smk-white text-smk-charcoal relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-black opacity-5 whitespace-nowrap pointer-events-none italic">
          BORN IN DHA
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 relative z-10">
            <div className="pill-tag bg-smk-charcoal text-white">THE CULTURE</div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] italic">
              MORE THAN<br />JUST A<br /><span className="text-smk-orange">BURGER.</span>
            </h2>
            <p className="text-xl font-bold leading-relaxed max-w-lg">
              SMK is a movement. Founded by foodies, dedicated to the late-night hustlers, 
              the spice-chasers, and the flavor-obsessed. We don't do subtle. We do SMK.
            </p>
            <Link to="/story" className="btn-primary w-fit inline-block">
              GET THE JUICE
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-smk-charcoal rounded-none overflow-hidden relative border-8 border-smk-charcoal">
               <img 
                src="https://images.unsplash.com/photo-1550950158-d059fd9fe472?auto=format&fit=crop&w=1000&q=80" 
                className="w-full h-full object-cover saturate-150 brightness-75"
                alt="SMK Vibe"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center p-10 border border-white/20 m-4">
                  <div className="text-white text-center">
                    <span className="text-6xl font-display font-black text-smk-orange italic">100%</span>
                    <p className="font-black text-sm tracking-widest uppercase">Imported Beef</p>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-smk-orange flex items-center justify-center text-white skew-x-[-12deg] z-20">
               <div className="text-center">
                <span className="text-4xl font-display font-black leading-none italic">- 12 PM -</span>
                <p className="font-black text-xs tracking-tighter uppercase font-sans">Until 2 AM</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-smk-charcoal text-center px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto space-y-12"
        >
          <div className="pill-tag mx-auto w-fit">STROLL IN OR STAY HOME</div>
          <h2 className="text-5xl md:text-9xl font-display font-black italic tracking-tighter leading-none text-white">THE CRAVING IS REAL.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 pt-6">
            <Link to="/order" className="btn-primary text-2xl px-16">
              ORDER ONLINE
            </Link>
            <Link to="/visit" className="btn-outline text-2xl px-16 border-smk-orange text-smk-orange hover:bg-smk-orange hover:text-white">
              GET THE SPOT
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
