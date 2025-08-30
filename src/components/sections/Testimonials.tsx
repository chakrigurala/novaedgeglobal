import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechVenture Inc.",
      content: "NovaEdge Global transformed our entire business model with their AI solutions. The predictive analytics platform they built increased our efficiency by 40% and helped us make data-driven decisions that boosted our revenue significantly.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      position: "CTO, Global Retail Solutions",
      content: "Working with NovaEdge was a game-changer. Their team delivered a complex e-commerce platform ahead of schedule, and the AI-powered features have revolutionized our customer experience. Absolutely exceptional service.",
      rating: 5
    },
    {
      name: "Emily Watson",
      position: "Founder, InnovateLab",
      content: "The web solutions created by NovaEdge Global exceeded all our expectations. Their attention to detail, technical expertise, and commitment to delivering quality results make them our go-to technology partner.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
            Don't just take our word for it. Here's what industry leaders are saying 
            about their experience working with NovaEdge Global.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover-glow group transition-smooth"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 font-montserrat leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <p className="font-montserrat font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-montserrat">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;