import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Layout from "@/components/layout/Layout";

import campaignWellness from "@/assets/campaign-wellness.jpg";
import campaignFinance from "@/assets/campaign-finance.jpg";
import campaignFashion from "@/assets/campaign-fashion.jpg";
import campaignArchitecture from "@/assets/campaign-architecture.jpg";
import campaignHotel from "@/assets/campaign-hotel.jpg";
import campaignFitness from "@/assets/campaign-fitness.jpg";

interface Campaign {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
}

// Mock data for when API is unavailable
const mockCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Elevate Wellness",
    description: "A comprehensive brand identity and digital campaign for a premium wellness brand, focusing on mindful living and holistic health.",
    category: "Brand Identity",
    year: "2024",
    image: campaignWellness,
  },
  {
    id: 2,
    title: "Aurora Finance",
    description: "Complete digital transformation including website redesign, mobile app, and integrated marketing campaign for a fintech startup.",
    category: "Digital Design",
    year: "2024",
    image: campaignFinance,
  },
  {
    id: 3,
    title: "Nomad Collection",
    description: "Lifestyle campaign for a sustainable fashion brand, featuring editorial photography and immersive digital experiences.",
    category: "Campaign",
    year: "2023",
    image: campaignFashion,
  },
  {
    id: 4,
    title: "Vertex Architecture",
    description: "Award-winning website and visual identity for an innovative architecture firm, showcasing their portfolio with cinematic excellence.",
    category: "Web Design",
    year: "2023",
    image: campaignArchitecture,
  },
  {
    id: 5,
    title: "Meridian Hotels",
    description: "Luxury hospitality brand positioning and global marketing campaign spanning digital, print, and experiential touchpoints.",
    category: "Brand Strategy",
    year: "2023",
    image: campaignHotel,
  },
  {
    id: 6,
    title: "Pulse Fitness",
    description: "Dynamic brand refresh and app design for a next-generation fitness platform, emphasizing community and performance.",
    category: "App Design",
    year: "2024",
    image: campaignFitness,
  },
];

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("/api/campaigns");
        // Ensure response is an array before setting
        if (Array.isArray(response.data)) {
          setCampaigns(response.data);
        }
      } catch (error) {
        // Mock data already set as default, no action needed
        console.log("Using mock data for campaigns");
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <Layout>
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Work
            </p>
            <h1 className="text-display font-extralight text-foreground">
              Campaigns
            </h1>
            <p className="mt-6 text-muted-foreground max-w-xl">
              A selection of projects that showcase our approach to 
              brand building and digital storytelling.
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-secondary/50 animate-pulse"
                />
              ))}
            </div>
          )}

          {/* Campaigns Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {campaigns.map((campaign, index) => (
                <motion.article
                  key={campaign.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] mb-6 overflow-hidden border border-transparent group-hover:border-primary/50 transition-all duration-500">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                      <span>{campaign.category}</span>
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      <span>{campaign.year}</span>
                    </div>
                    <h2 className="text-title font-light text-foreground group-hover:text-primary transition-colors duration-500">
                      {campaign.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
