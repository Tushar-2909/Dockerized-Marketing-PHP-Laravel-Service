import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";
import { getHealth } from "@/services/api";

const Home = () => {
  const [backendStatus, setBackendStatus] = useState<
    "checking" | "online" | "offline"
  >("checking");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        await getHealth();
        setBackendStatus("online");
      } catch (error) {
        setBackendStatus("offline");
      }
    };

    checkBackend();
  }, []);

  return (
    <Layout>
      {/* Backend status banner */}
      <div className="fixed top-0 left-0 right-0 z-50 text-center text-sm py-2">
        {backendStatus === "checking" && (
          <div className="bg-yellow-500 text-black">
            ⏳ Checking backend status...
          </div>
        )}

        {backendStatus === "online" && (
          <div className="bg-green-600 text-white">
            ✅ Backend online
          </div>
        )}

        {backendStatus === "offline" && (
          <div className="bg-red-600 text-white">
            ❌ Backend offline
          </div>
        )}
      </div>

      <Hero />
      <Marquee />
      <FeaturedWork />
      <Services />
      <CTA />
    </Layout>
  );
};

export default Home;
