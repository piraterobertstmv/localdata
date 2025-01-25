import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSignIn = () => {
    toast({
      title: "Coming Soon",
      description: "Sign in functionality will be available soon!",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Coming Soon",
      description: "Sign up functionality will be available soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => scrollToSection('hero')}>LocalData</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
            >
              Contact
            </a>
            <Button 
              variant="outline" 
              className="mr-2 hover:scale-105 transition-transform duration-200"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button 
              className="hover:scale-105 transition-transform duration-200"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
          >
            Contact
          </a>
          <div className="px-3 py-2 space-y-2">
            <Button variant="outline" className="w-full" onClick={handleSignIn}>Sign In</Button>
            <Button className="w-full" onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;