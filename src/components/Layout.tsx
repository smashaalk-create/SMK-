import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Menu as MenuIcon, X, Instagram, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "The Stack", path: "/menu" },
    { name: "The Sides", path: "/sides" },
    { name: "The Juice", path: "/story" },
    { name: "Find Us", path: "/visit" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-smk-charcoal/90 backdrop-blur-md border-b border-white/10 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-baseline group">
            <span className="text-4xl font-display font-black tracking-tighter text-smk-white group-hover:text-smk-orange transition-colors">SMK</span>
            <span className="text-xs ml-2 font-black tracking-[0.3em] text-smk-orange bg-smk-white px-2 py-0.5 rounded-sm">DHA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[12px] uppercase tracking-[0.2em] font-black transition-all border-b-2 hover:border-smk-orange ${
                  location.pathname === link.path 
                    ? "text-smk-orange border-smk-orange" 
                    : "text-smk-white border-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/order" className="btn-primary flex items-center group">
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-smk-white"
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-24 bg-smk-charcoal md:hidden z-40 px-6 pt-12"
          >
            <div className="flex flex-col space-y-8 items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-black uppercase tracking-tighter text-smk-white hover:text-smk-orange"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary text-center"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-smk-gray text-smk-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-b border-white/10 pb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-baseline">
              <span className="text-5xl font-display font-black tracking-tighter text-smk-white">SMK</span>
              <span className="text-xs ml-2 font-black tracking-[0.3em] text-smk-orange">DHA</span>
            </Link>
            <p className="text-smk-white/60 text-sm max-w-sm leading-relaxed font-medium">
              Join the bold. High-quality ingredients, intense flavors, and zero excuses. 
              DHA’s true street food experience is here.
            </p>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-[12px] uppercase tracking-[0.3em] font-black text-smk-orange underline decoration-2 underline-offset-8">HQ: DHA Phase VI</h3>
            <div className="space-y-6 text-sm text-smk-white/70 font-bold">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-smk-orange flex-shrink-0" />
                <span>Commercial Area, Phase VI, DHA, Karachi</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock size={20} className="text-smk-orange flex-shrink-0" />
                <span>Open 12:00 PM - 02:00 AM</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-smk-orange flex-shrink-0" />
                <span>+92 21 111-SMK-DHA</span>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-[12px] uppercase tracking-[0.15em] font-black text-smk-orange underline decoration-2 underline-offset-8">Follow The Smoke</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-smk-orange transition-colors p-4 bg-white/5 border border-white/10 hover:border-smk-orange font-bold uppercase tracking-widest text-[10px]">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-smk-orange transition-colors p-4 bg-white/5 border border-white/10 hover:border-smk-orange font-bold uppercase tracking-widest text-[10px]">
                <Coffee size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.4em] text-smk-white/40 font-black">
          <div>© {new Date().getFullYear()} SMK. URBAN CRAVINGS.</div>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-smk-white">Terms</a>
            <a href="#" className="hover:text-smk-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={useLocation().pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
