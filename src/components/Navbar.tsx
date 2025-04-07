
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 border-b-2 border-gold/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Mobile menu button */}
        <div className="md:hidden w-full flex justify-end mb-4">
          <button 
            className="text-navy"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Centered logo for both mobile and desktop */}
        <div className="flex justify-center w-full">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/a6539c3e-b237-4c78-8489-7134280b70c6.png" 
              alt="Kairos IT Services Logo" 
              className="h-20 md:h-24"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 justify-center w-full">
          <li>
            <Link to="/" className="text-navy hover:text-gold transition-colors duration-200 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-navy hover:text-gold transition-colors duration-200 font-medium">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors duration-200 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-3 animate-fade-in bg-white shadow-lg rounded-b-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-navy hover:text-gold transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="block text-navy hover:text-gold transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-navy hover:text-gold transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
