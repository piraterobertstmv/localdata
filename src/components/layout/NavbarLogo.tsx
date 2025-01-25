const NavbarLogo = ({ onClick }: { onClick: () => void }) => (
  <span 
    className="text-xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer" 
    onClick={onClick}
  >
    LocalData
  </span>
);

export default NavbarLogo;