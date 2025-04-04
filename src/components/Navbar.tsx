
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
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
        
        {/* Centered logo */}
        <div className="flex justify-center w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/a6539c3e-b237-4c78-8489-7134280b70c6.png" 
              alt="Kairos IT Services Logo" 
              className="h-16 md:h-20"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-gray-700 hover:text-navy font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-navy font-medium">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-navy font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-3 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-navy font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="block text-gray-700 hover:text-navy font-medium"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-navy font-medium"
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
