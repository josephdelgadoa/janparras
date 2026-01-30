import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ConferencesSection from "@/components/ConferencesSection";
import BooksSection from "@/components/BooksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OpportunitySection from "@/components/OpportunitySection";
import ShopSection from "@/components/ShopSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ConferencesSection />
      <BooksSection />
      <TestimonialsSection />
      <OpportunitySection />
      <ShopSection />
      <ContactSection />
      <Chatbot />
    </main>
  );
}
