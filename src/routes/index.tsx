import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Clients } from "@/components/portfolio/Clients";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay Kumar Thakur — Digital Marketing Specialist" },
      { name: "description", content: "Premium portfolio of Sanjay Kumar Thakur — digital marketing specialist, freelancer and digital solutions builder helping brands in the UK, USA, Norway & Dubai." },
      { property: "og:title", content: "Sanjay Kumar Thakur — Digital Marketing Specialist" },
      { property: "og:description", content: "Effective digital marketing strategies and campaigns for growing businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Clients />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
