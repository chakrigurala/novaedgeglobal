import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Technology Neural Networks" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Pioneering
            <span className="text-gradient block mt-2">
              AI & Web Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-montserrat font-light max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence and innovative web technologies. 
            We deliver solutions that drive growth and redefine possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="hover-glow">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;