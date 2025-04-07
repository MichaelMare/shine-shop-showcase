
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/public/lovable-uploads/a6539c3e-b237-4c78-8489-7134280b70c6.png" 
                alt="Kairos IT Services Logo" 
                className="h-12 bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality IT solutions since 2023.
              We pride ourselves on integrity, honesty, customer satisfaction and product excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>16 Forest Walk</p>
              <p>325 Forest Walk Crescent</p>
              <p>Faerie Glen, Pretoria, 0081</p>
              <p>Email: marketing@kairosit.co.za</p>
              <p>Phone: (+27) 82 708 5927</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Kairos IT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
