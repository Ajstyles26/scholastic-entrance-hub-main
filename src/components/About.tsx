import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Students", value: "15,000+" },
    { icon: BookOpen, label: "Programs", value: "50+" },
    { icon: Award, label: "Years of Excellence", value: "25+" },
    { icon: Globe, label: "International Partners", value: "30+" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Ajayi Crowther University
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded on the principles of academic excellence and moral integrity, Ajayi Crowther University 
            stands as a beacon of quality education in Nigeria. Our commitment to <em>Scientia Probitas</em> 
            guides everything we do, ensuring our graduates are equipped with both knowledge and character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-university-light-blue rounded-full group-hover:bg-university-gold/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-university-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-university-blue mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To provide world-class education that combines academic rigor with moral development, 
              preparing students to become leaders who will make positive contributions to society.
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a premier university recognized globally for excellence in teaching, research, 
              and community service, built on the foundation of Christian values and Nigerian heritage.
            </p>
          </div>
          
          <div className="bg-university-light-blue rounded-lg p-8">
            <h3 className="text-2xl font-bold text-university-blue mb-4">Why Choose ACU?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-university-gold mr-2">•</span>
                Accredited programs with international recognition
              </li>
              <li className="flex items-start">
                <span className="text-university-gold mr-2">•</span>
                World-class faculty and research facilities
              </li>
              <li className="flex items-start">
                <span className="text-university-gold mr-2">•</span>
                Strong industry partnerships and internship opportunities
              </li>
              <li className="flex items-start">
                <span className="text-university-gold mr-2">•</span>
                Vibrant campus life and extracurricular activities
              </li>
              <li className="flex items-start">
                <span className="text-university-gold mr-2">•</span>
                Excellent graduate employment rates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;