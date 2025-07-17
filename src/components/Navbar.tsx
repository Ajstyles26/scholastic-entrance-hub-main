import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-university-blue text-white fixed top-0 left-0 z-50 shadow-lg">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-4">
        <img 
          src="/lovable-uploads/971b6eaa-ed60-4534-8a20-2935632c67de.png" 
          alt="Ajayi Crowther University Logo" 
          className="h-12 w-auto animate-fade-in"
        />
        <span className="font-bold text-lg hidden sm:block">
          Ajayi Crowther University
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover-scale"
        >
          Login
        </Button>
        <Menu className="sm:hidden cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
