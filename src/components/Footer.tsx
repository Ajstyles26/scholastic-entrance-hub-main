import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-university-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/971b6eaa-ed60-4534-8a20-2935632c67de.png" 
                alt="Ajayi Crowther University Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Ajayi Crowther University</h3>
                <p className="text-sm text-white/80">Scientia Probitas</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Excellence in education, research, and community service built on Christian values and Nigerian heritage.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-white/80 hover:text-university-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/80 hover:text-university-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/80 hover:text-university-gold cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-white/80 hover:text-university-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">About ACU</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Academic Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Research</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Campus Life</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Alumni</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Apply Now</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Requirements</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">International Students</a></li>
              <li><a href="#" className="text-white/80 hover:text-university-gold transition-colors">Contact Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-university-gold" />
                <span className="text-white/80">+234 803 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-university-gold" />
                <span className="text-white/80">admissions@acu.edu.ng</span>
              </div>
              <div className="text-white/80">
                <p>Oyo-Ogbomoso Road</p>
                <p>Oyo, Oyo State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2024 Ajayi Crowther University. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-university-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-university-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-university-gold text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;