import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import BusinessSearch from "@/components/BusinessSearch";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <BusinessSearch />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
};

export default Index;