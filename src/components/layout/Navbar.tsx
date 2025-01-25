import { useState } from "react";
import { Menu, X } from "lucide-react";
import SignInDialog from "../auth/SignInDialog";
import SignUpDialog from "../auth/SignUpDialog";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarAuthButtons from "./NavbarAuthButtons";
import NavbarMobileMenu from "./NavbarMobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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
            <NavbarLogo onClick={() => scrollToSection('hero')} />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavbarLinks onLinkClick={scrollToSection} />
            <NavbarAuthButtons 
              onSignIn={() => setIsSignInOpen(true)}
              onSignUp={() => setIsSignUpOpen(true)}
            />
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
      <NavbarMobileMenu 
        isOpen={isOpen}
        onLinkClick={scrollToSection}
        onSignIn={() => setIsSignInOpen(true)}
        onSignUp={() => setIsSignUpOpen(true)}
      />

      <SignInDialog isOpen={isSignInOpen} onOpenChange={setIsSignInOpen} />
      <SignUpDialog isOpen={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
    </nav>
  );
};

export default Navbar;