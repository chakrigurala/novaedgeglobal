import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Testimonials />
        <Founder />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-montserrat">
            © 2024 NovaEdge Global. All rights reserved. Pioneering the future of AI & Web Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
