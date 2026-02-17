import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "Branding",
    "Strategy",
    "Digital Design",
    "Web Development",
    "Packaging",
    "Art Direction",
    "UI/UX",
    "Motion",
  ];

  return (
    <section className="py-6 border-y border-border/20 overflow-hidden bg-background">
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0"
        >
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-extralight text-muted-foreground/20 flex items-center gap-8 px-8 whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0"
        >
          {[...items, ...items].map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-extralight text-muted-foreground/20 flex items-center gap-8 px-8 whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
