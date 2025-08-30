import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import founderImage from "@/assets/founder-headshot.jpg";

const Founder = () => {
  return (
    <section className="py-20 bg-background" id="founder">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Meet the <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
            Driving innovation and excellence in AI and web technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={founderImage} 
                    alt="Alex Thompson - Founder & CEO"
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-montserrat font-bold mb-4 text-foreground">
                    Alex Thompson
                  </h3>
                  <p className="text-lg text-primary font-montserrat font-semibold mb-6">
                    Founder & CEO
                  </p>
                  
                  <div className="space-y-4 text-muted-foreground font-montserrat leading-relaxed">
                    <p>
                      With over 15 years of experience in artificial intelligence and web development, 
                      Alex founded NovaEdge Global to bridge the gap between cutting-edge technology 
                      and practical business solutions.
                    </p>
                    <p>
                      Previously leading AI initiatives at Fortune 500 companies, Alex brings deep 
                      technical expertise and strategic vision to help businesses transform their 
                      operations through innovative technology solutions.
                    </p>
                    <p>
                      Alex holds a PhD in Computer Science from MIT and has published numerous 
                      research papers on machine learning and artificial intelligence applications 
                      in business environments.
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;