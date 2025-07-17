import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import universityBg from "@/assets/university-hero-bg.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  // const [text] = useTypewriter({
  //   words: ['Welcome to'],
  //   loop: false,
  //   typeSpeed: 1000,
  //   deleteSpeed: 0,
  //   delaySpeed: 0,
  // });

  return (
    <section className="relative bg-gradient-to-br from-university-blue to-university-blue/90 text-white overflow-hidden min-h-screen flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={universityBg}
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-university-blue/60 to-university-blue/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center lg:text-left max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span>Welcome to</span>
            <Cursor cursorStyle="|" />
            {" "}
            <span className="text-university-gold">Ajayi Crowther University</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Begin your journey to academic excellence. Apply now and join our community of scholars committed to transforming lives through quality education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button variant="gold" size="lg" className="group hover-scale">
              Start Your Application
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover-scale"
            >
              <GraduationCap className="mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
