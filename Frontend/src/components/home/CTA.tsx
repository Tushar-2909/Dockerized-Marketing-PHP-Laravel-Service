import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-32 lg:py-48 bg-secondary/20 relative overflow-hidden">
      {/* Subtle glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[200px]"
      />

      <div className="px-8 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-8"
          >
            Shall we team up?
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-extralight text-foreground leading-[0.95] tracking-tight"
            >
              Let's create
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-extralight text-foreground/30 leading-[0.95] tracking-tight"
            >
              something great
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 border border-foreground/20 px-10 py-5 text-xs uppercase tracking-[0.3em] text-foreground hover:border-primary hover:text-primary transition-all duration-500"
            >
              <span>Start a Project</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
            <a
              href="mailto:hello@studio.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              hello@studio.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
