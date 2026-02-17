import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import campaignWellness from "@/assets/campaign-wellness.jpg";
import campaignFinance from "@/assets/campaign-finance.jpg";
import campaignArchitecture from "@/assets/campaign-architecture.jpg";
import campaignFashion from "@/assets/campaign-fashion.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "Elevate Wellness",
    category: "Brand Identity",
    image: campaignWellness,
  },
  {
    id: 2,
    title: "Aurora Finance",
    category: "Digital Design",
    image: campaignFinance,
  },
  {
    id: 3,
    title: "Vertex Architecture",
    category: "Web Design",
    image: campaignArchitecture,
  },
  {
    id: 4,
    title: "Nomad Collection",
    category: "Campaign",
    image: campaignFashion,
  },
];

const FeaturedWork = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-40 bg-background">
      <div className="px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-4">
              Projects
            </p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-extralight text-foreground leading-[1.05] tracking-tight">
              Selected Work
            </h2>
          </div>
          <Link
            to="/campaigns"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors duration-500 shrink-0"
          >
            <span>All Projects</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Asymmetric Grid - cocota style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {featuredProjects.map((project, index) => {
            // Asymmetric layout: alternating large/small
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";
            const aspectRatio = isLarge ? "aspect-[4/3]" : "aspect-[3/4]";
            const marginTop = !isLarge && index > 0 ? "md:mt-24" : "";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`${colSpan} ${marginTop}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/campaigns" className="group block">
                  {/* Image */}
                  <div className={`${aspectRatio} overflow-hidden relative`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredId === project.id ? 1.05 : 1,
                        filter: hoveredId !== null && hoveredId !== project.id
                          ? "brightness(0.5) saturate(0)"
                          : "brightness(1) saturate(1)",
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Overlay with project number */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground/40 font-light">
                      0{index + 1}
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
