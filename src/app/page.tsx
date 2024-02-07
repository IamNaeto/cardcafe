'use client'
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
