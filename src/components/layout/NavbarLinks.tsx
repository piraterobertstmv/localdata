interface NavLinkProps {
  href: string;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const NavLink = ({ href, onClick, children }: NavLinkProps) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
  >
    {children}
  </a>
);

const NavbarLinks = ({ onLinkClick }: { onLinkClick: (sectionId: string) => void }) => (
  <>
    <NavLink href="#features" onClick={(e) => { e.preventDefault(); onLinkClick('features'); }}>
      Features
    </NavLink>
    <NavLink href="#pricing" onClick={(e) => { e.preventDefault(); onLinkClick('pricing'); }}>
      Pricing
    </NavLink>
    <NavLink href="#faq" onClick={(e) => { e.preventDefault(); onLinkClick('faq'); }}>
      FAQ
    </NavLink>
    <NavLink href="#contact" onClick={(e) => { e.preventDefault(); onLinkClick('contact'); }}>
      Contact
    </NavLink>
  </>
);

export default NavbarLinks;