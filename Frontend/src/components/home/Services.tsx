import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Branding & Identity",
    description: "We express what makes you unique. We develop complete visual identities that position your brand in the market.",
    capabilities: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Naming"],
  },
  {
    number: "02",
    title: "Digital Design",
    description: "We create memorable digital experiences that combine aesthetics with functionality to connect with your audience.",
    capabilities: ["Web Design", "App Design", "UI/UX", "Prototyping"],
  },
  {
    number: "03",
    title: "Strategy",
    description: "We define the creative and business strategy that gives meaning to every design and communication decision.",
    capabilities: ["Creative Direction", "Content Strategy", "Social Media", "Consulting"],
  },
];

const Services = () => {
  return (
    <section className="py-24 lg:py-40 bg-background">
      <div className="px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
           <p className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-4">
            Services
           </p>
           <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-extralight text-foreground leading-[1.05] tracking-tight max-w-3xl">
            We listen. <br />
            <span className="text-muted-foreground">We define together.</span>
           </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-t border-border/30 py-12 lg:py-16 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-sm text-primary/40 group-hover:text-primary transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extralight text-foreground group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description & Capabilities */}
                <div className="md:col-span-7 space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 border border-border/30 px-3 py-1.5 group-hover:border-primary/20 group-hover:text-primary/50 transition-all duration-500"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border/30" />
        </div>
      </div>
    </section>
  );
};

export default Services;
