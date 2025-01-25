import { Button } from "@/components/ui/button";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onLinkClick: (sectionId: string) => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

const NavbarMobileMenu = ({ isOpen, onLinkClick, onSignIn, onSignUp }: NavbarMobileMenuProps) => (
  <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
      <a 
        href="#features" 
        onClick={(e) => { e.preventDefault(); onLinkClick('features'); }}
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      >
        Features
      </a>
      <a 
        href="#pricing" 
        onClick={(e) => { e.preventDefault(); onLinkClick('pricing'); }}
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      >
        Pricing
      </a>
      <a 
        href="#faq" 
        onClick={(e) => { e.preventDefault(); onLinkClick('faq'); }}
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      >
        FAQ
      </a>
      <a 
        href="#contact" 
        onClick={(e) => { e.preventDefault(); onLinkClick('contact'); }}
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      >
        Contact
      </a>
      <div className="px-3 py-2 space-y-2">
        <Button variant="outline" className="w-full" onClick={onSignIn}>Sign In</Button>
        <Button className="w-full" onClick={onSignUp}>Get Started</Button>
      </div>
    </div>
  </div>
);

export default NavbarMobileMenu;