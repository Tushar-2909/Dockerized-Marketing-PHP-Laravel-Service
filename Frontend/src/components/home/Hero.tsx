import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-end relative overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="max-w-7xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
              Creative Studio
            </span>
          </motion.div>

          {/* Main headline - massive display text */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,10vw,9rem)] font-extralight leading-[0.9] tracking-[-0.03em] text-foreground"
            >
              We craft
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,10vw,9rem)] font-extralight leading-[0.9] tracking-[-0.03em] text-foreground/40"
            >
              digital experiences
            </motion.h1>
          </div>

          {/* Bottom row with description and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
              A boutique creative studio focused on brand strategy, digital design,
              and campaign development for forward-thinking brands.
            </p>
            <Link
              to="/campaigns"
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground hover:text-primary transition-colors duration-500"
            >
              <span>View Projects</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
