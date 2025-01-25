import { Button } from "@/components/ui/button";

interface NavbarAuthButtonsProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const NavbarAuthButtons = ({ onSignIn, onSignUp }: NavbarAuthButtonsProps) => (
  <>
    <Button 
      variant="outline" 
      className="mr-2 hover:scale-105 transition-transform duration-200"
      onClick={onSignIn}
    >
      Sign In
    </Button>
    <Button 
      className="hover:scale-105 transition-transform duration-200"
      onClick={onSignUp}
    >
      Get Started
    </Button>
  </>
);

export default NavbarAuthButtons;