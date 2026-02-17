import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/campaigns" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <nav className="px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="text-foreground relative z-[60]">
              <span className="text-lg font-medium tracking-[0.25em] uppercase">
                Studio
              </span>
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-[60] flex flex-col gap-[6px] group cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-8 h-[1px] bg-foreground origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-8 h-[1px] bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-8 h-[1px] bg-foreground origin-center"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-background flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="group relative block py-4"
                  >
                    <span className={`text-[clamp(3rem,8vw,6rem)] font-extralight tracking-tight transition-colors duration-500 ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary"
                    }`}>
                      {link.name}
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 h-px bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Contact info in menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-16 text-center space-y-2"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  hello@studio.com
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  +1 (555) 000-0000
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
