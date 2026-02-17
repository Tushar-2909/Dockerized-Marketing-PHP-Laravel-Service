import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <Services />
      <CTA />
    </Layout>
  );
};

export default Home;
