import { Card, CardContent } from "@/components/ui/card";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import chatbotImage from "@/assets/project-ai-chatbot.jpg";
import analyticsImage from "@/assets/project-analytics.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Revolution",
      description: "Transformed a traditional retail business with AI-powered recommendations, predictive inventory management, and personalized customer experiences. Achieved 300% increase in online sales within 6 months.",
      image: ecommerceImage,
      tech: ["React", "AI/ML", "Node.js", "MongoDB"],
      metrics: "300% Sales Increase"
    },
    {
      title: "Intelligent Customer Support",
      description: "Developed an advanced AI chatbot system that handles 95% of customer inquiries automatically, reducing response time from hours to seconds while maintaining high satisfaction rates.",
      image: chatbotImage,
      tech: ["Python", "NLP", "TensorFlow", "React"],
      metrics: "95% Automation Rate"
    },
    {
      title: "Business Intelligence Platform",
      description: "Created a comprehensive analytics dashboard that processes millions of data points to provide real-time business insights, enabling data-driven decisions that improved ROI by 150%.",
      image: analyticsImage,
      tech: ["Vue.js", "D3.js", "PostgreSQL", "Docker"],
      metrics: "150% ROI Improvement"
    }
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Our <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
            Discover how we've helped businesses transform their operations and achieve 
            remarkable results through innovative AI and web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border overflow-hidden hover-glow group transition-smooth"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                  {project.metrics}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-montserrat font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-montserrat leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;