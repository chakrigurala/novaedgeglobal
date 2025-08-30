import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Globe } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description: "Harness the power of machine learning and artificial intelligence to automate processes, gain insights, and create intelligent solutions that adapt to your business needs."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Development",
      description: "Our agile development process ensures rapid delivery without compromising quality. Get your solutions to market faster with our streamlined approach."
    },
    {
      icon: Globe,
      title: "Global Scale Solutions",
      description: "Built for the future with cloud-native architecture, our solutions scale seamlessly across continents to support your growing business demands."
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            About <span className="text-gradient">NovaEdge Global</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-montserrat">
            We are a forward-thinking technology company specializing in artificial intelligence and 
            innovative web solutions. Our mission is to empower businesses with cutting-edge technology 
            that transforms operations, enhances user experiences, and drives sustainable growth in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover-glow group transition-smooth"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-montserrat">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;